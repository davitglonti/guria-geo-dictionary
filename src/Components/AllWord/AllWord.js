import React, {useState,useEffect} from 'react'
import '../Head.css'
import nav from 'react-bootstrap/Nav';
import WordData from '../WordData'
import Pagination from './Pagination';
import ListGroup from 'react-bootstrap/ListGroup'
import Favoritessacdel from './Favoritessacdel';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const AllWord = () => {
  const [AddChecker,setAddChecker]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage]=useState(20)
const indexLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexLastPost - postsPerPage;

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

//sorted users
  const sortedusers = WordData.sort((a, b)=> {
    var nameA = a.gur
    var nameB = b.gur
    if (nameA < nameB) {
      return -1; 
    }
    if (nameA > nameB) {
      return 1; 
    }
  
  });
  //main 
  const currentPost = sortedusers.slice(indexOfFirstPost,indexLastPost)

//add favorites to localStorage
const localUser = JSON.parse(localStorage.getItem('myFavorite')) ;
const [Favorites,setFavorites]=useState(localUser)
 console.log(Favorites)
const AddFavorite=(item)=>{
  
    const AddFavorite=  WordData.find(element => element.id == item);
    setFavorites([...Favorites,AddFavorite])
  }
 
  useEffect(() => {
    localStorage.setItem('myFavorite', JSON.stringify(Favorites))
  });

  //delete favorite item
  const DeleteFav=(item)=>{
   Favorites.splice(item,1)
    localStorage.setItem('myFavorite', JSON.stringify(Favorites));

  }

  return (
    <div className='allWords' style={{textAlign:'center'}}>
      {currentPost.map((item,index)=>{
        return (
           <ListGroup style={{width:'50%', margin:'50px', position:'relative', left:'24%'}} key={index}>
      <ListGroup.Item variant="primary"> <h1 style={{color:'black'}}>{item.gur} : {item.geo}</h1></ListGroup.Item>
      <MdFavoriteBorder onClick={()=>AddFavorite(item.id)}/>
    </ListGroup>
        )
      })}

      <Pagination totalpost={WordData.length} postPerPage={postsPerPage} paginate={paginate}/>
      
    <Favoritessacdel favorites={Favorites} DeleteFav={DeleteFav}/>
      
      {Favorites.map(item=>(
        <h1>{item.id}</h1>
      ))}
    
     
    </div>
  )
}

export default AllWord;