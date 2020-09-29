import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewUser() {
    const [user, setUser] = useState({});
    const history = useHistory();

    const createNewUser = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/bruger', user)
            .then(res => {
                console.log(res.data);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section id="IdNewUser">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Opredt bruger</h4>

                    <Form onSubmit={createNewUser}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Brugernavn:</Form.Label>

                            <Form.Control onChange={(e) => setUser({ ...user, brugernavn: e.target.value })} type="text" placeholder="Brugernavn"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicFirstname">
                            <Form.Label>Fornavn:</Form.Label>

                            <Form.Control onChange={(e) => setUser({ ...user, fornavn: e.target.value })} type="text" placeholder="Fornavn"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicLastname">
                            <Form.Label>Efternavn:</Form.Label>

                            <Form.Control onChange={(e) => setUser({ ...user, efternavn: e.target.value })} type="text" placeholder="Efternavn"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>

                            <Form.Control onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="Email"/>
                        
                            <Form.Text className="text-muted">
                                Man logger ind med sin email, vær sikker på at du kan huske hvilken du bruger.  
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>

                            <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password"/>
                        </Form.Group>

                        <Button variant="outline-success" type="submit">OPREDT BRUGER</Button>

                        <Button onClick={() => { history.push('/')}} variant="outline-danger" type="button">FORTRYD</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default NewUser;