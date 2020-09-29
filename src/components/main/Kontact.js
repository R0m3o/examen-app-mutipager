import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Kontact() {
    const [message, setMessage] = useState({});
    const history = useHistory();

    const sendMessage = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/kontakt', message)
            .then(res => {
                console.log(res.data);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section id="IdKontact">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Kontakt os</h4>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta voluptates fuga doloremque maxime, ullam velit. Repellat nobis, odio earum vel, doloremque est minus iste voluptas omnis illum iure commodi facilis?</p>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <Form onSubmit={sendMessage}>
                                <Form.Group controlId="formBasicText">
                                    <Form.Control onChange={(e) => setMessage({ ...message, navn: e.target.value })} type="text" placeholder="Navn"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onChange={(e) => setMessage({ ...message, email: e.target.value })} type="email" placeholder="Email"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicText">
                                    <Form.Control onChange={(e) => setMessage({ ...message, emne: e.target.value })} type="text" placeholder="Emne"/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onChange={(e) => setMessage({ ...message, besked: e.target.value })} as="textarea" rows="3"/>
                                </Form.Group>

                                <Button variant="primary" type="submit">SEND</Button>
                            </Form>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <p><b>Adresse:</b> Øster uttrupvej 1 9200 aalborg</p>
                            <p><b>telefon:</b> +45 25 26 95 40</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Kontact;