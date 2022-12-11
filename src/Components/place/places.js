import React, {useState} from 'react';
import Placedata from './Placedata'
import Cards from '../images/Card';
import './places.css'
import Accordion from '../AllWord/Accordion'
import {PlacesAnswer} from '../AllWord/AccordionData'

const Places = () => {

 const [category,setCategory]=useState(Placedata)
//console.log(Placedata)
  const placesCategory=(category) =>{
    if(category === 'ყველა'){
     return setCategory(Placedata)
    }

    const filtercategory = Placedata.filter(filter=> filter.category== category)
    setCategory(filtercategory)
  }


  const Places=(place)=>{
    console.log(place)
    if(place==="ყველა"){
      return setCategory(Placedata)
    }
    const placeFilter= Placedata.filter(placefilter=> placefilter.location == place)
    setCategory(placeFilter)
  }
  
  return (
    <div>
      <section className='hystoric'>
        <h3>ადგილის მიხედვით</h3>
       <button onClick={()=> Places('ყველა')} className='button-59'> ყველა</button>
      <button onClick={()=> Places('ლიხაური')} className='button-59'> ლიხაური</button>
      <button onClick={()=> Places('ჩოხატაური')} className='button-59'>ჩოხატაური</button>
     </section>
     <br></br>
     <section>

     <h3>ღირსშესანიშნაობები</h3>
     <button onClick={()=> placesCategory('ყველა')} className='button-59'> ყველა</button>
      <button onClick={()=> placesCategory('მუზეუმი')} className='button-59'> მუზეუმები</button>
      <button onClick={()=> placesCategory('ისტორიული ძეგლები')} className='button-59'>ისტორიული ძეგლები</button>
     </section>
      <h1> ისტორიული ძეგლები</h1>
        <div className='places'>
          {category.map((item,index)=> {
           return (
            <Cards CardImg={item.image} CardTitle={item.name} CardText={item.info.slice(0,90)} href={`Placedetal/${item.id}`}/>
          
            )
          })}
        </div>

          <section>
            <Accordion accordionData={PlacesAnswer}/>
          </section>
    </div>
  )
}

export default Places