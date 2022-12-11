import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Favoritessacdel = ({favorites,DeleteFav}) => {

  
  return (
    <div>
      
      {favorites.map((item,index)=>{
      
     return (
      
         <div class="card" key={index}>
  <div className="card-body">
    <h5 className="card-title">{item.geo} -{item.gur}</h5>
    
    <button type="button" className="btn btn-danger" onClick={()=>DeleteFav(index)}>Delete</button>
  </div>
</div>
     
    
 
     )})}
        </div>
  )
}

export default Favoritessacdel