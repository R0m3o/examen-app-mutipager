import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NewsLetter() {
    const [newssub, setNewssub] = useState({});

    const createNewSub = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/nyhedsbrevtilmelding', newssub)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section id="IdNewsLetter">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Tilmeld dig vores nyhedsbrev</h4>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic voluptate a animi dicta excepturi aspernatur, repellendus quae earum ipsum ipsa optio vero architecto placeat, facilis nihil nulla! Eum, inventore.</p>

                    <Form onSubmit={createNewSub}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="email-symbol">&#9993;</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl onChange={(e) => setNewssub({ ...newssub, email: e.target.value })} placeholder="email" aria-label="email" aria-describedby="email-symbol" type="email"/>

                            <Button variant="primary" type="submit">TILMELD</Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;