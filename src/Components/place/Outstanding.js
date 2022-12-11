import React,{useState} from 'react'
import Cards from '../images/Card'
import "./places.css"
 import outstandingjson from './outstanding.json'
const Outstanding = () => {
 const [filtercategory,setFilterCategory]=useState(outstandingjson)
 console.log(filtercategory)
//category map
  const AllCategory = outstandingjson.map(item=> item.category)
   
  //category Remove duplicate
   const category=  AllCategory.filter((value,index,)=> {
        return AllCategory.indexOf(value) === index;
    })
//filter category onClick
const filterCategory =(filtercategory=>{
    if(filtercategory === "all"){
       return setFilterCategory(outstandingjson)
    }
    const filter= outstandingjson.filter(item=> item.category === filtercategory)
    setFilterCategory(filter)
})

  return (
    <>
    <section className='humancategory'>
    <button className='button-59' onClick={()=> filterCategory("all")}>ყველა</button>
        {category.map((category)=>{
            return (
                <button className='button-59' onClick={()=> filterCategory(category)}> {category}</button>
            )
        })}
    </section>
    <div className='outstanding'>
        {filtercategory.map((item,index)=>{
            return (
                <div key={index}>
               <Cards CardImg={item.image} CardTitle={item.name} CardText={item.info} href={`Outstanding/${index}`}/>  
                </div>
            )
        }
            )}
       
    </div>
    </>
  )
}

export default Outstanding