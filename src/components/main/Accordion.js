import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


function AccordionComponent() {
    return (
        <section className="row">
            <Accordion className="col-md-8 center col-sm-12">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click 1
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Title>hello</Card.Title>

                            <Card.Text>This is a card</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click 2
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Card.Title>hello</Card.Title>

                            <Card.Text>This is a card</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Click 3
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Card.Title>hello</Card.Title>

                            <Card.Text>This is a card</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        Click 4
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Card.Title>hello</Card.Title>

                            <Card.Text>This is a card</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </section>
    )
}

export default AccordionComponent;