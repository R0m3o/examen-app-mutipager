import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NewsLetter() {
    return (
        <section id="IdNewsLetter" className="row">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <h4>Tilmeld dig vores nyhedsbrev</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic voluptate a animi dicta excepturi aspernatur, repellendus quae earum ipsum ipsa optio vero architecto placeat, facilis nihil nulla! Eum, inventore.</p>

                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="email-symbol">&#9993;</InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl placeholder="email" aria-label="email" aria-describedby="email-symbol"/>

                        <Button variant="primary" type="submit">TILMELD</Button>
                    </InputGroup>
                </Form>
            </div>
        </section>
    )
}

export default NewsLetter;