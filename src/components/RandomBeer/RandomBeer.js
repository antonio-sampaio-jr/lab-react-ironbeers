import { useEffect, useState } from 'react';
import { Card, Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import NavBar from '../NavBar/NavBar';

function RandomBeer() {
    const[beers,setBeers] = useState([]); 
    const[fetching,setFetching] = useState(true);

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            setBeers(response.data);
            setFetching(false);
        })
        .catch((error) => 
            console.log(error));
    },[]);

    return (
        <div>
            <Container>
                <Row>
                <Col key={beers._id}>
            <div className="card">
            <Card style={{ width: '90%', margin: 'auto' }}>
            <NavBar />
            <Card.Header><img src={beers.image_url} alt="" width="72" height="54"/></Card.Header>
            <Card.Body>
                <Card.Text>{beers.name}</Card.Text>
                <Card.Text>{beers.tagline}</Card.Text>
                <Card.Text>{beers.first_brewed}</Card.Text>
                <Card.Text>{beers.attenuation_level}</Card.Text>
                <Card.Text>{beers.description}</Card.Text>
                <Card.Text>{beers.contributed_by}</Card.Text>
            </Card.Body>
        </Card>
            </div>
            </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RandomBeer;