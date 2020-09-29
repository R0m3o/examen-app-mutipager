import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import Comment from './Comment';

function Product(props) {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/' + props.match.params.id)
            .then(res => {
                const response = res.data;
                setProduct(response);
            })
    }, [])

    let theProduct = "";
    let listOfIngrediense = "";

    if (product !== undefined) { 
        listOfIngrediense = product.ingredienser.map(ingrediens => {
            return (
                <div className="col-sm-12 col-md-5">
                    <Card key={ingrediens.id}>
                        <Card.Body>
                            <Card.Text>
                                {ingrediens.maengde}{ingrediens.enhed_forkortet} {ingrediens.ingrediens_titel}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        })

        theProduct = (
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <Card.Header>
                    <p>Product &#8250; {product.kategori.titel}</p>
                </Card.Header>

                <div className="row">
                    <Card className="col-sm-12 col-md-7">
                        <Card.Body>
                            <Card.Title>{product.titel}</Card.Title>

                            <Card.Text>{product.kategori.titel}</Card.Text>

                            <Card.Img src={"http://localhost:5033/images/" + product.image} className="img-height-card" alt={product.titel}/>
                            
                            <Card.Text>{parse(product.beskrivelse)}</Card.Text>
                        </Card.Body>
                    </Card>

                    {listOfIngrediense}
                </div>
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