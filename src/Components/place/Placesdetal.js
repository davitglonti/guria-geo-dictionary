import React,{useState} from 'react'
import './places.css'
import { useParams } from 'react-router-dom'
import Placedata from './Placedata'
import Images from '../images/Images'
const Placesdetal = () => {
    const params = useParams()
    const FilteredPlace= Placedata.filter(item => item.id== params.id)
 
    const [fullImg, setFullImg]=useState(false)
    console.log(fullImg)


    const imagesizechange =(item)=>{
      console.log(item)
      setFullImg(!fullImg)
    }
  return (
    <div className='placedetal'>

   <h1>   {FilteredPlace[0].name} </h1>
   <img src={FilteredPlace[0].image} className="placedetalimage"/>
   <br></br>
      {FilteredPlace[0].info}

 {/* galley section */}
    <section className='placesDetalImages'>
      <h1>გალერია</h1>
      <div className='placedetalgallery'>

       
     {FilteredPlace[0].images.map((item,index)=>{
      return (
        <div >
          
        <img src={item.image} style={{width:'100%'}} key={index} onClick={()=>console.log(item)}/>
        </div>
      )
     })}
   
    
     
        </div>
    </section>

    
        </div>
  )
}

export default Placesdetal