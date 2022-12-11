import React from 'react'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import './Text.css'
import WordData from './WordData'
import { GrLinkNext } from 'react-icons/gr';

const PopularWords = () => {

  const randomwords =  WordData.sort(() => Math.random() - Math.random()).slice(0, 25)

  //console.log(popularwords)
  return (
  
    <div className='popularWords'>
   <h1>ხშირად მოძებნილი სიტყვები</h1>

<section className='populargur'>
  <h1 > გურულ- ქართული</h1> 
 
  {randomwords.map((popular,index)=>{
    return (
      <button className='button-17'  key={index}>{popular.gur} <GrLinkNext/> {popular.geo}</button>
    )
  })}
  </section>
 
    
 </div>
  )
}

export default PopularWords
































































{/*
    <button className='button-17'>კიდო</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
    <button className='button-17'>დამატება</button>
  */}