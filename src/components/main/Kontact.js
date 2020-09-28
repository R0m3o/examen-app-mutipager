import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Kontact() {
    return (
        <section id="IdKontact" className="row">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <h4>Kontakt os</h4>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta voluptates fuga doloremque maxime, ullam velit. Repellat nobis, odio earum vel, doloremque est minus iste voluptas omnis illum iure commodi facilis?</p>

                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter password"/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="3"/>
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
        </section>
    )
}

export default Kontact;