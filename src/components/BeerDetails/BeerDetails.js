import { Card } from "react-bootstrap"
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar";

function BeerDetails() {
    const { beerId } = useParams()
    const[beers,setBeers] = useState([]); 
    const[fetching,setFetching] = useState(true);

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data);
            setFetching(false);
        })
        .catch((error) => 
            console.log(error));
    },[]);
    console.log(beers);
    const foundBeer = beers.find((oneBeer) => {
        return oneBeer._id === beerId;
    });
    console.log(foundBeer);
    
    return (
        <Card style={{ width: '90%', margin: 'auto' }}>
            <NavBar />
            <Card.Header><img src={foundBeer.image_url} alt="" width="72" height="54"/></Card.Header>
            <Card.Body>
                <Card.Text>{foundBeer.name}</Card.Text>
                <Card.Text>{foundBeer.tagline}</Card.Text>
                <Card.Text>{foundBeer.first_brewed}</Card.Text>
                <Card.Text>{foundBeer.attenuation_level}</Card.Text>
                <Card.Text>{foundBeer.description}</Card.Text>
                <Card.Text>{foundBeer.contributed_by}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BeerDetails;