import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import dayjs from 'dayjs';
import qs from 'qs';
import PatchComment from '../auth/PatchComment';
import DeleteComment from '../auth/DeleteComment';

function Product(props) {
    const [product, setProduct] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [comments, setComments] = useState([]);
    const [liked, setLiked] = useState(false);
    const [commenttitle, setCommenttitle] = useState({});
    const [commenttext, setCommenttext] = useState({});
    const data = qs.stringify({
        'titel' : commenttitle,
        'kommentaren' : commenttext,
        'bruger' : sessionStorage.userID,
        'produkt' : props.match.params.id
    })

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/' + props.match.params.id)
            .then(res => {
                setProduct(res.data);
                setIngredients(res.data.ingredienser);
                setComments(res.data.kommentar);
                console.log(res.data);
            })
    }, [props.match.params.id])

    const likeProduct = e => {
        e.preventDefault();

        axios.patch('http://localhost:5033/produkter/likes/' + props.match.params.id)

        setLiked(true)
    }

    const submitComment = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/kommentar/admin', data, {withCredentials:true})
    }

    let TheProduct = "";
    let listOfIngredients = "";
    let likeStatus;
    let listOfComments = "";

    if (product !== undefined) {
        listOfIngredients = ingredients.map(ingredient => {
            if(liked) {
                likeStatus = (
                    <p>{product.likes} <span role="img" aria-label="heart-icon">&#9825;</span></p>
                )
            } else {
                likeStatus = (
                    <Button variant="outline-dark" onClick={likeProduct}><span role="img" aria-label="heart-icon">&#9825;</span></Button>
                )
            }

            return (
                <div className="row">
                    <div key={ingredient.id} className="col-sm-12 col-md-12">
                        <p>{ingredient.maengde} {ingredient.enhed_fokortet} {ingredient.ingrediens_titel}</p>
                    </div>
                </div>
            )
        })
    }

    listOfComments = comments.map(comment => {
        if (comment.bruger._id === sessionStorage.userID) {
            return (
                <Card key={comment.id}>
                    <Card.Body>
                        <Card.Title>{comment.bruger.fornavn} {comment.bruger.efternavn}</Card.Title>
                        <Card.Text>{dayjs(comment.oprettet).format("DD MMMM, kl. HH:mm YYYY")}</Card.Text>
                        <Card.Text>{comment.titel}</Card.Text>
                        <Card.Text>{comment.kommentaren}</Card.Text>

                        <PatchComment theId={comment._id}/>
                        <DeleteComment theId={comment._id}/>
                    </Card.Body>
                </Card>
            )
        } else {
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
        }
    })

    TheProduct = (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <h5>{product.titel}</h5>

                    <img src={'http://localhost:5033/images/' + product.image} className="img-height-card" alt={product.titel}/>
                
                    <p>{product.beskrivelse}</p>
                </div>

                <div className="col-sm-12 col-md-5">
                    {likeStatus}
                    {listOfIngredients}
                </div>

                <div className="col-sm-12 col-md-12">
                    <p><b>Kommentar {comments.length} &#128172;</b></p>

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
    

    return (
        <section id="IdTheProduct">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    {TheProduct}
                </div>
            </div>
        </section>
    )
}

export default Product;
