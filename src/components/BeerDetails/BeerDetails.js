import { Button, Card, Col, Container, Row } from "react-bootstrap"
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function BeerDetails() {
    const { beerId } = useParams()
    const[beers,setBeers] = useState([]); 
    const[fetching,setFetching] = useState(true);

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            setBeers(response.data);
            setFetching(false);
        })
        .catch((error) => 
            console.log(error));
    },[]);
   
    return(
            <Col key={beers._id}>
            <NavBar />
            <div className="card">
                <img src={beers.image_url} alt="" style={{height:"100px"}} />
                <h3>{beers.name}</h3>
                <h3>{beers.tagline}</h3>
                <h3>{beers.contributed_by}</h3>
            </div>
            </Col>
        );
}

export default BeerDetails;