import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MostRecent() {
    const [products, setProducts] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/antal/8')
            .then(res => {
                const response = res.data;
                setProducts(response)
            });
    }, [])

    let listOfProducts = "";

    if (products.length > 0) {
        listOfProducts = products.map(product => {
            return (
                <Card className="col-md-3 col-sm-12" key={product.id}>
                    <Card.Body>
                        <Card.Img variant="top" src={'http://localhost:5033/images/' + product.image} className="img-height-card"/>
                        
                        <Card.Text>{product.kommentar.length} <span>&#128172;</span></Card.Text>
                        
                        <Card.Title>{product.titel}</Card.Title>
                        
                        <Card.Text className="product-txt-overflow">{parse(product.teaser)}</Card.Text>

                        <Link to={'/product/' + product._id} className="col-12">SE MERE</Link>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <section id="IdMostRecent">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Nyeste bagværk</h4>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium atque eos praesentium nemo delectus libero ratione, perspiciatis vitae? Nulla, qui accusantium odit atque quam facere commodi odio sed animi!</p>
                    
                    <div className="row">
                        {listOfProducts}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostRecent;