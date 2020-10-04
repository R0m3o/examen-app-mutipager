import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function DeleteComment(props) {
    const deleteTheComment = e => {
        axios.delete('http://localhost:5033/kommentar/admin/' + props.theId)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("an error has occured" + err.message)
            })
    }

    return (
        <div>
            <Button onClick={deleteTheComment} variant="outline-danger">SLET</Button>
        </div>
    )
}

export default DeleteComment;