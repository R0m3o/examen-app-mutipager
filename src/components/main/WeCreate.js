import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function WeCreate() {
    const [news, setNews] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5033/nyheder/antal/3')
            .then(res => {
                const response = res.data;
                setNews(response)
            });
    }, [])

    let listOfNews = "";

    if (news.length > 0) {
        listOfNews = news.map(theNews => {
            return (
                <Card className="col-md-4 col-sm-12" key={theNews.id}>
                    <Card.Body>
                        <Card.Img variant="top" src={'http://localhost:5033/images/' + theNews.image} className="img-height-card"/>
                        
                        <Card.Title>{theNews.titel}</Card.Title>
                        
                        <Card.Text>{theNews.teaser}</Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <section id="IdWeCreate">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Vi skaber lækkert! brød</h4>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint enim facilis voluptate! Voluptatum, explicabo a voluptatem deserunt dignissimos aspernatur, laboriosam esse dolor debitis distinctio architecto assumenda commodi, qui dicta?</p>

                    <div className="row">
                        {listOfNews}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeCreate;