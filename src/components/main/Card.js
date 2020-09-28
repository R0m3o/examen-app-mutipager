import React from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImg from '../../images/avatar-1577909_640.png';

function CardComponent() {
    return(
        <section className="row">
            <Card className="col-md-4 col-sm-12 margin-card">
                <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>This is some card text</Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4 col-sm-12 margin-card">
                <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>This is some card text</Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4 col-sm-12 margin-card">
                <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>This is some card text</Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4 col-sm-12 margin-card">
                <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>This is some card text</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}

export default CardComponent;