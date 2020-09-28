import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <section id="IdLogin" className="row">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="email-symbol">&#9993;</InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl type="email" placeholder="email" aria-label="email" aria-describedby="email-symbol"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="key-symbol">&#9919;</InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl type="password" placeholder="password" aria-label="password" aria-describedby="key-symbol"/>
                    </InputGroup>

                    <Button variant="primary" type="submit" className="btn-light">LOG IND</Button>
                </Form>
            </div>
        </section>
    )
}

export default Login;