import React from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImg from '../../images/avatar-1577909_640.png';

function WeCreate() {
    return (
        <section id="IdWeCreate" className="row">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <h4>Vi skaber lækkert! brød</h4>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint enim facilis voluptate! Voluptatum, explicabo a voluptatem deserunt dignissimos aspernatur, laboriosam esse dolor debitis distinctio architecto assumenda commodi, qui dicta?</p>

                <div className="row">
                    <Card className="col-md-4 col-sm-12">
                        <Card.Body>
                            <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                            
                            <Card.Title>TBD</Card.Title>
                            
                            <Card.Text>TBD</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default WeCreate;