import axios from "axios";
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

function NewBeer({apiURL,form,setForm}) {
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
            console.log(form);
            await axios.post(apiURL,form);
            console.log("Cadastro feito");
            navigate("/");
        } catch(error)
        {
            console.log(error);
        }
    }

    return (
        <div className="card">
            <NavBar />
        <Container>
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control
                        type="text"
                        name="tagline"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        name="description"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control
                        type="text"
                        name="first_brewed"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control
                        type="text"
                        name="brewers_tips"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control
                        type="number"
                        name="attenuation_level"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control
                        type="text"
                        name="contributed_by"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Button type="submit">Add New</Button>
            </Form>
        </Container>
        </div>
    )
}

export default NewBeer;