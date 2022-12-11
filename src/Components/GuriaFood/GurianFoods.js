import React from 'react'
import GuriaFoodData from './GuriaFoodData'
import Accordion from '../AllWord/Accordion'
import {FoodAnswers} from '../AllWord/AccordionData'

const GurianFoods = () => {
 
  return (
    <div style={{margin:'70px'}}>
      <h1 style={{textAlign:'center'}}>გურული საჭმელები</h1>
    {GuriaFoodData.food.map(item=>{
      return (
        <>
        <h1>{item.squadName}</h1>
        <p>{item.Description}</p>
</>
      )
    })}

    <Accordion  accordionData={FoodAnswers}/>
       
    </div>
  )
}

export default GurianFoods