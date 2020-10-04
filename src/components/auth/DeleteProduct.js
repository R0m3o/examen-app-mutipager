import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DeleteProduct(props) {
    const [product, setProduct] = useState({});
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
    }, [props.match.params.id])

    const deleteProduct = e => {
        axios.delete('http://localhost:5033/produkter/admin/' + props.match.params.id)
            .then(res => {
                console.log(res.data);
                history.push('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <section id="IdDeleteProfile">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Er du sikker på at du vil slætte denne opskrift?</h4>

                    <p>{product.titel}</p>

                    <p>{product.teaser}</p>
                    
                    <Button onClick={() => { history.push('/')}} variant="outline-success">FORTRYD</Button>
                    
                    <Button onClick={deleteProduct} variant="outline-danger">SLET OPSKRIFT</Button>
                </div>
            </div>
        </section>
    )

}

export default DeleteProduct;