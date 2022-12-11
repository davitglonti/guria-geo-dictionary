import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cards = ({CardImg,CardTitle,CardText,href}) => {
  return (
    <div>
         <Card  >
            <Card.Img variant="top" src={CardImg} style={{height:'50vh'}}/>
            <Card.Body>
            <Card.Title>{CardTitle}</Card.Title>
            <Card.Text>{CardText}... </Card.Text>
              <a href={href}>
            <Button variant="primary">მეტი</Button>
            </a>
            </Card.Body>
            </Card>
    </div>
  )
}

export default Cards