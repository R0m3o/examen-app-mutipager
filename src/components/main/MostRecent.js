import React from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImg from '../../images/avatar-1577909_640.png';
import { Link } from 'react-router-dom';

function MostRecent() {
    return (
        <section id="IdMostRecent">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <h4>Nyeste bagværk</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium atque eos praesentium nemo delectus libero ratione, perspiciatis vitae? Nulla, qui accusantium odit atque quam facere commodi odio sed animi!</p>
                
                <div className="row">
                    <Card className="col-md-3 col-sm-12">
                        <Card.Body>
                            <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                            
                            <Card.Text>TBD</Card.Text>
                            
                            <Card.Title>TBD</Card.Title>
                            
                            <Card.Text>TBD</Card.Text>

                            <Link to='/product' className="col-12">SE MERE</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default MostRecent;