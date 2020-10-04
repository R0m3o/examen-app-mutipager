import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import fs from 'fs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PatchProduct = (props) => {
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/' + props.match.params.id)
            .then(res => {
                setProduct(res.data);
                console.log(res.data);
            })
            .catch ((err) => {
                console.log("an error has occured: " + err.message)
            })

            axios.get('http://localhost:5033/kategorier')
            .then(res => {
                console.log(res.data)
                setCategories(res.data)
            })
            .catch ((err) => {
                console.log("an error has occured: " + err.message)
            })
    }, [props.match.params.id])

    let listOfCategories = "";

    listOfCategories = categories.map(category => {
        return (
            <option key={category.id} value={category.id}>
                {category.titel}
            </option>
        )
    })

    const editProduct = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5033/produkter/admin/' + props.match.params.id, product, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                history.push('/');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <section id="IdEditProduct" className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">            
            <h4>Ret opskrift</h4>

            <Form onSubmit={editProduct}>
                <Form.Group controlId="formBasicTitel">
                    <Form.Label>titel:</Form.Label>

                    <Form.Control defaultValue={product.titel} onChange={(e) => setProduct({ ...product, titel: e.target.value })} type="text" placeholder="Titel"/>
                </Form.Group>

                <Form.Group controlId="formBasicTeaser">
                    <Form.Label>Teaser:</Form.Label>

                    <Form.Control defaultValue={product.teaser} onChange={(e) => setProduct({ ...product, teaser: e.target.value })} type="text" placeholder="Teaser"/>
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Beskrivelse:</Form.Label>

                    <Form.Control defaultValue={product.beskrivelse} onChange={(e) => setProduct({ ...product, beskrivelse: e.target.value })} type="text-area" placeholder="Beskrivelse"/>
                </Form.Group>

                <Form.Group controlId="formBasicTimeRequired">
                    <Form.Label>Tilberedningstid:</Form.Label>

                    <Form.Control defaultValue={product.tilberedningstid} onChange={(e) => setProduct({ ...product, tilberedningstid: e.target.value })} type="number" placeholder="tilbereningstid i minutter"/>
                </Form.Group>

                <Form.Group controlId="formBasicNumber">
                    <Form.Label>Antal:</Form.Label>

                    <Form.Control defaultValue={product.antal} onChange={(e) => setProduct({ ...product, antal: e.target.value })} type="number" placeholder="Antal færdige bagværk"/>
                </Form.Group>

                <Form.Group controlId="formBasicCategory">
                    <Form.Label>Kategori:</Form.Label>

                    <Form.Control as="select" defaultValue={product.kategori} onChange={(e) => setProduct({ ...product, kategori: e.target.value })}>
                        {listOfCategories}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicImage">
                    <Form.Label>Billede:</Form.Label>

                    <Form.Control defaultValue={product.image} onChange={(e) => setProduct({ ...product, image: fs.createReadStream(e.target.value + ".jpg") })} type="text" placeholder="billede fil navn (uden .jpg)"/>
                </Form.Group>

                <Button variant="outline-success" type="submit">OPREDT OPSKRIFT</Button>

                <Button onClick={() => { history.push('/')}} variant="outline-danger" type="button">FORTRYD</Button>
            </Form>       
        </section>
    )
}

export default PatchProduct;