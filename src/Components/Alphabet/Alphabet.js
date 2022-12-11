import React, { useState } from 'react'
import '../Text.css'
const Alphabet = ({AlphabetSearch}) => {


const georgianAlphabet = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი','კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ']
 

  return (
    <div>
        <h1>სწრაფი ძებნა</h1>

        {georgianAlphabet.map((element,index)=>{
          return (
            <button onClick={()=>AlphabetSearch(element)} className='alphabetbtn' key={index}>{element}</button>
           
          )
        })}

     
     
        
    </div>
  )
}

export default Alphabet