import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormComponent() {
    return (
        <section className="row">
            <Form className="col-md-5 col-sm-12">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>

                    <Form.Control type="email" placeholder="Enter email"/>
                    
                    <Form.Text className="text-muted">
                        Your email will not be shared with others
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>

                    <Form.Control type="password" placeholder="Enter password"/>

                    <Form.Text className="text-muted">
                        Don't share your password with others
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select:</Form.Label>

                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Textarea:</Form.Label>

                    <Form.Control as="textarea" rows="3"/>
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="upload file" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="checkbox"/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </section>
    )
}

export default FormComponent;