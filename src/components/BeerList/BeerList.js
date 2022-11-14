import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import NavBar from '../NavBar/NavBar';

function BeerList() {
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

    const renderBeers = beers.map((beer)=>{
        return(
            <Link to="/beerDetails/:beerId" key={beer._id}>
            <Col key={beer._id}>
            <div className="card">
                <img src={beer.image_url} alt="" style={{height:"100px"}} />
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
                <h3>{beer.contributed_by}</h3>
            </div>
            </Col>
            </Link>
        );
    });

    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    {fetching && <Spinner animation="border" />} 
                    {renderBeers}
                </Row>
            </Container>
        </div>
    );
}

export default BeerList;