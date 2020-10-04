import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import fs from 'fs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewProduct() {
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:5033/kategorier')
            .then(res => {
                console.log(res.data)
                setCategories(res.data)
            })
            .catch ((err) => {
                console.log("an error has occured: " + err.message)
            })
    }, [])

    let listOfCategories = "";

    listOfCategories = categories.map(category => {
        return (
            <option key={category.id} value={category.id}>
                {category.titel}
            </option>
        )
    })

    const createNewProduct = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/kategorier/admin', product)
            .then(res => {
                console.log(res.data);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section id="IdNewProduct" className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">            
            <h4>Ny Opskrift</h4>

            <Form onSubmit={createNewProduct}>
                <Form.Group controlId="formBasicTitel">
                    <Form.Label>titel:</Form.Label>

                    <Form.Control onChange={(e) => setProduct({ ...product, titel: e.target.value })} type="text" placeholder="Titel"/>
                </Form.Group>

                <Form.Group controlId="formBasicTeaser">
                    <Form.Label>Teaser:</Form.Label>

                    <Form.Control onChange={(e) => setProduct({ ...product, teaser: e.target.value })} type="text" placeholder="Teaser"/>
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Beskrivelse:</Form.Label>

                    <Form.Control onChange={(e) => setProduct({ ...product, beskrivelse: e.target.value })} type="text-area" placeholder="Beskrivelse"/>
                </Form.Group>

                <Form.Group controlId="formBasicTimeRequired">
                    <Form.Label>Tilberedningstid:</Form.Label>

                    <Form.Control onChange={(e) => setProduct({ ...product, tilberedningstid: e.target.value })} type="number" placeholder="tilbereningstid i minutter"/>
                </Form.Group>

                <Form.Group controlId="formBasicNumber">
                    <Form.Label>Antal:</Form.Label>

                    <Form.Control onChange={(e) => setProduct({ ...product, antal: e.target.value })} type="number" placeholder="Antal færdige bagværk"/>
                </Form.Group>

                <Form.Group controlId="formBasicCategory">
                    <Form.Label>Kategori:</Form.Label>

                    <Form.Control as="select" onChange={(e) => setProduct({ ...product, kategori: e.target.value })}>
                        {listOfCategories}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicImage">
                    <Form.Label>Billede:</Form.Label>

                    <Form.Control onChange={(e) => setProduct({ ...product, image: fs.createReadStream(e.target.value + ".jpg") })} type="text" placeholder="billede fil navn (uden .jpg)"/>
                </Form.Group>

                <Button variant="outline-success" type="submit">OPREDT OPSKRIFT</Button>

                <Button onClick={() => { history.push('/')}} variant="outline-danger" type="button">FORTRYD</Button>
            </Form>       
        </section>
    )
}

export default NewProduct;
