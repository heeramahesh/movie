import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import '../styles/cards.css'

const Cards = ({k,image,title,year}) => {
    
    return (
        <div className="Cards">
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text><strong>{year}</strong></Card.Text>
    <Link to={`details/${k}`} 
                
                key={k}
                >
    <Button variant="primary" >More Details</Button>
    </Link>
    </Card.Body>
    </Card>
        </div>
    )
}

export default Cards
