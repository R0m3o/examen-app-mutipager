import React from 'react';
import Card from 'react-bootstrap/Card';
import article from '../../images/article.jpg';
import article2 from '../../images/article2.jpg';
import article3 from '../../images/article3.jpg';

function WeCreate() {
    return (
        <section id="IdWeCreate">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Vi skaber lækkert! brød</h4>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint enim facilis voluptate! Voluptatum, explicabo a voluptatem deserunt dignissimos aspernatur, laboriosam esse dolor debitis distinctio architecto assumenda commodi, qui dicta?</p>

                    <div className="row">
                        <Card className="col-md-4 col-sm-12">
                            <Card.Body>
                                <Card.Img variant="top" src={article} className="img-height-card"/>
                                
                                <Card.Title>KREATIVITET DYRKES</Card.Title>
                                
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo iusto quidem sunt ex, eveniet minima et nobis. Fugit repellat adipisci dicta corrupti dolor laboriosam illo saepe quibusdam ab aperiam!</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="col-md-4 col-sm-12">
                            <Card.Body>
                                <Card.Img variant="top" src={article2} className="img-height-card"/>
                                
                                <Card.Title>VI ELSKER BRØD</Card.Title>
                                
                                <Card.Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo provident reiciendis optio saepe aliquam voluptas tempora esse ullam a. Facere eum animi sequi quam tempora numquam laborum mollitia repellat delectus!</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="col-md-4 col-sm-12">
                            <Card.Body>
                                <Card.Img variant="top" src={article3} className="img-height-card"/>
                                
                                <Card.Title>SANS FOR DETALJER</Card.Title>
                                
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo! Labore, reiciendis. Amet atque tempore iste eum molestias voluptatibus illum quod. Illum iusto quos veniam facere, error cupiditate maxime voluptatibus.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeCreate;