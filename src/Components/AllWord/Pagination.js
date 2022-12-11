import React,{useState} from 'react'
import nav from 'react-bootstrap/Nav';
import './Allword.css'
const Pagination = ({totalpost, postPerPage, paginate}) => {
const pageNumbers= []
    for(let i=1; i<=Math.ceil(totalpost / postPerPage); i++){
        pageNumbers.push(i)
    
    }
  return (
    <div className='paginations'>
        {pageNumbers.map(number=> {
            return (
             <nav aria-label="Page navigation example" >
  <ul className="pagination" key={number}>
    <a onClick={() => paginate(number)}  className='page-link'>{number}</a>
  
  </ul>
</nav>   
            )
        })}
        
    </div>
    
  )
}

export default Pagination