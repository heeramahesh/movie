import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { MovieContext } from '../context/MovieContext'
//import Container from "react-bootstrap/Container"
import {Container,Row,Col} from "react-bootstrap"
import noImage from "../styles/no-image-available.png"
import "../styles/Details.css"

const Details = () => {
    const {moveDet,selectedDetails}=useContext(MovieContext)
    let {id}= useParams()
    useEffect(
        ()=>{
            selectedDetails(id)

        },[])
    return (
        <div className="detail-container">
            <Container>
            <Row>
                <Col>
                <div className="poster">
                    {
                        moveDet.Poster==='N/A'?(
                            <img src={noImage} alt={moveDet.Title}/>
                        ):(
                            <img src={moveDet.Poster} alt={moveDet.Title}/>
                        )
                    }
                </div>
                </Col>
                <Col>
                <div className="movie-details">
                    <div>
                    <h1>
                    {
                       moveDet.Title 
                    }
                    </h1>
                    </div>
                    <div className="further-details">
                    <h5>About:</h5>
                    <span>{moveDet.Plot}</span>
                    <h5>Genre:</h5>
                    <span>{moveDet.Genre}</span>
                    <h5>Released:</h5>
                    <span>{moveDet.Released}</span>
                    <h5>Director:</h5>
                    <span>{moveDet.Director}</span>
                    <h5>Production:</h5>
                    <span>{moveDet.Production}</span>
                    <h5>Ratings:</h5>
                    <span>{moveDet.imdbRating}</span>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                
            </Row>
            </Container>
           
        </div>
    )
}

export default Details
