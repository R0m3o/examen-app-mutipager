import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState({});
    const [category, setCategory] = useState("All");

    function categoryChange(e) {
        setCategory(e.target.value);
        console.log(e.target.value)
    }

    useEffect(() => {
        axios.get('http://localhost:5033/produkter')
            .then(res => {
                const response = res.data;
                setProducts(response)
            });
    }, [])

    let listOfProducts = "";

    if (products.length > 0) {
        listOfProducts = products.map(product => {
            if (category === product.kategori.titel) {
                return (
                    <Card className="col-sm-12 col-md-4" key={product.id}>
                        <Card.Body>
                            <Card.Img variant="top" src={"http://localhost:5033/images/" + product.image} className="img-height-card"/>
                            
                            <Card.Text>{product.kommentar.length} &#128172; {product.likes} &#9825;</Card.Text>
                            
                            <Card.Title>{product.titel}</Card.Title>
                            
                            <Card.Text className="product-txt-overflow">{product.teaser}</Card.Text>

                            <Link to={'/product/' + product._id} className="col-12">SE MERE</Link>
                        </Card.Body>
                    </Card>
                )
            } else if (category === "All") {
                return (
                    <Card className="col-sm-12 col-md-4" key={product.id}>
                        <Card.Body>
                            <Card.Img variant="top" src={"http://localhost:5033/images/" + product.image} className="img-height-card"/>
                            
                            <Card.Text>{product.kommentar.length} &#128172; {product.likes} &#9825;</Card.Text>
                            
                            <Card.Title>{product.titel}</Card.Title>
                            
                            <Card.Text className="product-txt-overflow">{product.teaser}</Card.Text>

                            <Link to={'/product/' + product._id} className="col-12">SE MERE</Link>
                        </Card.Body>
                    </Card>
                )
            }
        })
    } else {
        return <p>Der ingen produkter under denne kategori</p>
    }

    return (
        <section id="IdProducts">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Vores elskede bagværk</h4>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio consectetur eum dignissimos adipisci atque molestias hic voluptatem numquam nulla corrupti, fugiat itaque quod repellat dolores error recusandae magnam culpa?</p>

                    <div className="row">
                        <Form className="col-sm-12 col-md-3">
                            <Form.Control as="select" onChange={categoryChange}>
                                <option value="All">ALT BAGVÆRK</option>
                                <option value="Morgenbrød">MORGENBRØD</option>
                                <option value="Baguettes">BAGUETTES</option>
                                <option value="Franskbrød">FRANSKBRØD</option>
                                <option value="Kager">KAGER</option>
                                <option value="Rugbrød">RUGBRØD</option>
                                <option value="Grovbrød">GROVBRØD</option>
                                <option value="Boller">BOLLER</option>
                                <option value="Madbrød">MADBRØD</option>
                            </Form.Control>
                        </Form>
                        
                        <div className="col-sm-12 col-md-9">
                            <div className="row">
                                {listOfProducts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;