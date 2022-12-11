import React from 'react'
import { useParams } from 'react-router-dom';
 import outstandingjson from './outstanding.json'

const OutstandingFull = () => {
    const params = useParams()
    console.log(params.id)

    const filterItem= outstandingjson.filter((item,index)=> index== params.id)
  return (
    <div>
        {filterItem.map(item=>{
            return (
                <>
                <h1>{item.name}</h1>
                <img src={item.image}/>
                <p>{item.Fullinfo}</p>
                </>
            )
        })}
       
    </div>
  )
}

export default OutstandingFull