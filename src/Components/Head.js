import React,{useState} from 'react'
import './Head.css'
import WordData from './WordData';
import { GrFormNext } from 'react-icons/gr';
import PopularWords from './PopularWords';
import Alphabet from './Alphabet/Alphabet';

const Head = () => {
    const [changeClicked, setChangeClicked]=useState(false)
    
    //const [filteredList, setFilteredList] = new useState(WordData);
    const [searchedwords, setSearchedWords]=useState([])
 
 

    const Changelanguage=()=>{
        setChangeClicked(!changeClicked)
      
    }


//gavakete filtris funqcia
    const Searchgeo=(e) => {
      const keyword = e.target.value;

      if (keyword !== '') {
        const results = WordData.filter((user) => {
          return user.geo.startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setSearchedWords(results);
      } 
     
   
      
    };


    const Searchgur=(e) => {
      const keyword = e.target.value;

      if (keyword !== '') {
        const results = WordData.filter((user) => {
          return user.gur.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setSearchedWords(results);
      } 
     
     
    };


    const AlphabetSearch= (alphabet) =>{

     const alphabetFilter = WordData.filter(item=>item.geo[0]===alphabet)
     setSearchedWords(alphabetFilter)
    }

    

  
return (
  <div className='firspage'>
        <h1>გურულ-ქართული ლექსიკონი</h1>
    


    {changeClicked? 
      <div className='form'>
           <button className='dictionarychange' onClick={()=>Changelanguage()} >ქართულ<GrFormNext/> გურული</button>
       
           <br></br>
           <p>შეიყვანე სიტყვა ქართულად</p>
           <input type="input" className="form__field" placeholder="..."  required onChange={Searchgeo} />
           <div className='wordborder'>
              {searchedwords.map((item,index)=>{
                return (
                  <h1 key={index}>{item.geo} <GrFormNext/> {item.gur} </h1>
                )
              })}

            </div>

      </div>
    :
    <div className='form'>
    <button className='dictionarychange' onClick={()=>Changelanguage()} >გურულ<GrFormNext/> ქართული</button>
    <br></br>
    <p>შეიყვანე სიტყვა ქართულად</p>
    <input type="input" className="form__field" placeholder="..."  required onChange={Searchgur} />
    <div className='wordborder'>
       {searchedwords.map((item, index)=>{
         return (
           <h1 className='worditem'  key={index}>{item.gur} <GrFormNext/> {item.geo} </h1>
         )
       })}    
</div>
</div>
    }

    <Alphabet AlphabetSearch={AlphabetSearch}/>
    
      <h6 className='base'>სულ ბაზაში მოიპოვება:{WordData.length}   ჩანაწერი</h6>
     <PopularWords/>
  </div>


)

}

export default Head;