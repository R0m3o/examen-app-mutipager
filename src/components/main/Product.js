import React, { useState, useEffect } from 'react';
import qs from 'qs';
import dayjs from 'dayjs';
import axios from 'axios';
import parse from 'html-react-parser';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Product(props) {
    const [product, setProduct] = useState();
    const [liked, setLiked] = useState();
    const [commenttitle, setCommenttitle] = useState();
    const [commenttext, setCommenttext] = useState();
    const data = qs.stringify({
        'titel' : commenttitle,
        'kommentaren' : commenttext,
        'bruger' : document.cookie,
        'produkt' : props.match.params.id
    })

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/' + props.match.params.id)
            .then(res => {
                const response = res.data;
                setProduct(response);
            })
    }, [])
    
    const likeProduct = e => {
        e.preventDefault()

        axios.patch('http://localhost:5033/produkter/likes/' + props.match.params.id)
    
        setLiked(true)
    }

    const submitComment = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/kommentar/admin', data)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    let theProduct = "";
    let listOfIngrediense = "";
    let listOfComments = "";
    let likeStatus;

    if (product !== undefined) { 
        listOfIngrediense = product.ingredienser.map(ingrediens => {
            if (liked) {
                likeStatus = (
                    <p>{product.likes} &#9825;</p>
                )
            } else {
                likeStatus = (
                    <Button variant="outline-dark" onClick={likeProduct}>&#9825;</Button>
                )
            }

            return (
                <div className="row">
                    <div key={ingrediens.id} className="col-12">   
                        <p>{ingrediens.maengde} {ingrediens.enhed_forkortet} {ingrediens.ingrediens_titel}</p>
                    </div>
                </div>
            )
        })

        listOfComments = product.kommentar.map(comment => {
            return (
                <Card key={comment.id}>
                    <Card.Body>
                        <Card.Title>{comment.bruger.fornavn} {comment.bruger.efternavn}</Card.Title>
                        <Card.Text>{dayjs(comment.oprettet).format("DD MMMM, kl. HH:mm YYYY")}</Card.Text>
                        <Card.Text>{comment.titel}</Card.Text>
                        <Card.Text>{comment.kommentaren}</Card.Text>
                    </Card.Body>
                </Card>
            )
        })

        theProduct = (
            <div>
                <div>
                    <p>Product &#8250; {product.kategori.titel}</p>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-7">
                        <h5>{product.titel}</h5>

                        <p>{product.kategori.titel}</p>

                        <img src={"http://localhost:5033/images/" + product.image} className="img-height-card" alt={product.titel}/>
                        
                        <p>{parse(product.beskrivelse)}</p>
                    </div>

                    <div className="col-sm-12 col-md-5">
                        {likeStatus}
                        {listOfIngrediense}
                    </div>

                    <div className="col-sm-12 col-md-12">
                        <p><b>Kommentar {product.kommentar.length} &#128172;</b></p>
                        
                        <Form onSubmit={submitComment}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="write-symbol">&#9998;</InputGroup.Text>
                                </InputGroup.Prepend>

                                <FormControl onChange={(e) => setCommenttitle(e.target.value)} placeholder="kommentar-titel" aria-label="comment-titel" aria-describedby="write-symbol" type="text"/>
                                
                                <FormControl onChange={(e) => setCommenttext(e.target.value)} placeholder="kommentar" aria-label="comment" aria-describedby="write-symbol" type="text"/>

                                <Button variant="primary" type="submit">Indsæt</Button>
                            </InputGroup>
                        </Form>

                        {listOfComments}
                    </div>
                </div>
            </div>
        )
    }

    
    
    return (
        <section id="IdTheProduct">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    {theProduct}
                </div>
            </div>
        </section>
    )
}

export default Product;