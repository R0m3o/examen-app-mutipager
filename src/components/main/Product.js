import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import Comment from './Comment';

function Product(props) {
    const [product, setProduct] = useState();
    const [ingredients, setIngedients] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/' + props.match.params.id)
            .then(res => {
                const response = res.data;
                setProduct(response)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/' + props.match.params.id + '/ingredienser')
            .then(res => {
                const response = res.data;
                setProduct(response)
            })
    }, [])

    let theProduct = "";

    if (product !== undefined) {
        theProduct = (
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <Card.Header>
                    <p>Product &#8250; {product.kategori.titel}</p>
                </Card.Header>

                <Card>
                    <Card.Body className="row">
                        <div className="col-sm-12 col-md-9">
                            <Card.Title>{product.titel}</Card.Title>

                            <Card.Text>{product.kategori.titel}</Card.Text>

                            <Card.Img src={"http://localhost:5033/images/" + product.image} className="img-height-card" alt={product.titel}/>
                            
                            <Card.Text>{parse(product.beskrivelse)}</Card.Text>
                        </div>

                        <div className="col-sm-12 col-md-3">
                            <p><b>Ingredienser</b></p>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <section id="IdTheProduct">
            <div className="row">
                {theProduct}
            </div>
        </section>
    )
}

export default Product;