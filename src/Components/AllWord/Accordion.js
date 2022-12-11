import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
//import AccordionData from './AccordionData';
const accordion = ({accordionData}) => {
  return (
    <div>
      <h6>ხშირად დასმული კითხვები</h6>
        {accordionData.map((item)=>{
            return (
               <Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.Question}</Accordion.Header>
        <Accordion.Body>
          {item.Answer}
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion> 
            )
        })}
    
    </div>
  )
}

export default accordion