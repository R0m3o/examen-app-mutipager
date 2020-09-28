import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PlaceholderImg from '../../images/avatar-1577909_640.png';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <section id="IdProducts" className="row">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <h4>Vores elskede bagværk</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio consectetur eum dignissimos adipisci atque molestias hic voluptatem numquam nulla corrupti, fugiat itaque quod repellat dolores error recusandae magnam culpa?</p>

                <Accordion className="row" defaultActiveKey="0">
                    <div className="col-sm-12 col-md-3 accordion-btn">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            RUNDSTYKKER
                        </Accordion.Toggle>

                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            BAGUETTES
                        </Accordion.Toggle>

                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            FRANSKBRØD
                        </Accordion.Toggle>

                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            KAGER
                        </Accordion.Toggle>

                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            RUGBRØD
                        </Accordion.Toggle>
                    </div>
                    
                    <div className="col-sm-12 col-md-9">
                        <Accordion.Collapse eventKey="0" className="row">
                            <Card className="col-sm-12 col-md-4">
                                <Card.Body>
                                    <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                                    
                                    <Card.Text>TBD</Card.Text>
                                    
                                    <Card.Title>TBD</Card.Title>
                                    
                                    <Card.Text>TBD</Card.Text>

                                    <Link to='/product' className="col-12">SE MERE</Link>
                                </Card.Body>
                            </Card>
                        </Accordion.Collapse>

                        <Accordion.Collapse eventKey="1" className="row">
                            <Card className="col-sm-12 col-md-4">
                                <Card.Body>
                                    <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                                    
                                    <Card.Text>TBD</Card.Text>
                                    
                                    <Card.Title>TBD</Card.Title>
                                    
                                    <Card.Text>TBD</Card.Text>

                                    <Link to='/product' className="col-12">SE MERE</Link>
                                </Card.Body>
                            </Card>
                        </Accordion.Collapse>
                        
                        <Accordion.Collapse eventKey="2" className="row">
                            <Card className="col-sm-12 col-md-4">
                                <Card.Body>
                                    <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                                    
                                    <Card.Text>TBD</Card.Text>
                                    
                                    <Card.Title>TBD</Card.Title>
                                    
                                    <Card.Text>TBD</Card.Text>

                                    <Link to='/product' className="col-12">SE MERE</Link>
                                </Card.Body>
                            </Card>
                        </Accordion.Collapse>

                        <Accordion.Collapse eventKey="3" className="row">
                            <Card className="col-sm-12 col-md-4">
                                <Card.Body>
                                    <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                                    
                                    <Card.Text>TBD</Card.Text>
                                    
                                    <Card.Title>TBD</Card.Title>
                                    
                                    <Card.Text>TBD</Card.Text>

                                    <Link to='/product' className="col-12">SE MERE</Link>
                                </Card.Body>
                            </Card>
                        </Accordion.Collapse>

                        <Accordion.Collapse eventKey="4" className="row">
                            <Card className="col-sm-12 col-md-4">
                                <Card.Body>
                                    <Card.Img variant="top" src={PlaceholderImg} className="img-height-card"/>
                                    
                                    <Card.Text>TBD</Card.Text>
                                    
                                    <Card.Title>TBD</Card.Title>
                                    
                                    <Card.Text>TBD</Card.Text>

                                    <Link to='/product' className="col-12">SE MERE</Link>
                                </Card.Body>
                            </Card>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
        </section>
    )
}

export default Products;