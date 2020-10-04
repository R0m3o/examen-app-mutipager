import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PatchComment(props) {
    const [comment, setComment] = useState({});

    useEffect(() => {
        async function getComment() {
            try {
                let res = await axios.get('http://localhost:5033/kommentar/' + props.theId)
                let commentRes = await res.data;
    
                setComment({ titel: commentRes.titel, kommentaren: commentRes.kommentaren })
            } catch (err) {
                console.log("an error has occured: " + err.message)
            }
        }

        getComment();
    }, [props.theId])

    const editComment = e => {
        e.preventDefault();

        axios.put('http://localhost:5033/kommentar/admin/' + props.theId, comment, {withCredentials:true})
            .then(res => {
                console.log(res.data);
            }).catch((err) => {
                console.log("an error has occured: " + err.message)
            });
    }

    return (
        <Form onSubmit={editComment}>
            <InputGroup  className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="write-symbol">&#9998;</InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl defaultValue={comment.titel} onChange={(e) => setComment({...comment, titel: e.target.value})} placeholder="kommentar-titel" aria-label="comment-titel" aria-describedby="write-symbol" type="text"/>
                
                <FormControl defaultValue={comment.kommentaren} onChange={(e) => setComment({...comment, kommentaren: e.target.value})} placeholder="kommentar" aria-label="comment" aria-describedby="write-symbol" type="text"/>
                
                <Button variant="outline-dark" type="submit">RET</Button>
            </InputGroup>
        </Form>    
    )
}

export default PatchComment;