import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MyProducts() {
    const [myproducts, setMyProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5033/produkter')
            .then(res => {
                console.log(res.data)
                setMyProducts(res.data);
            })
            .catch((err) => {
                console.log("an error has occured: " + err.message)
            })
    }, [])

    let listOfProducts = "";

    listOfProducts = myproducts.map(product => {
        return (
            <Card className="col-sm-12 col-md-4" key={product.id}>
                <Card.Body>
                    <Card.Img variant="top" src={"http://localhost:5033/images/" + product.image} className="img-height-card"/>
                    
                    <Card.Text>{product.kommentar.length} <span role="img" aria-label="comment-icon">&#128172;</span> {product.likes} <span>&#9825;</span></Card.Text>
                    
                    <Card.Title>{product.titel}</Card.Title>
                    
                    <Card.Text className="product-txt-overflow">{product.teaser}</Card.Text>

                    <Link to={'/delete-product/' + product._id} className="col-12">SLET</Link>
                    <Link to={'/patch-product/' + product._id} className="col-12">RET</Link>
                </Card.Body>
            </Card>
        )
        
    })

    return (
        <section id="IdMyProducts" className="offset-sm-0 col-sm-12 col-md-12">
            <div className="row">
                {listOfProducts}
            </div>
        </section>
    )
}

export default MyProducts;