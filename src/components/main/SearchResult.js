import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SearchResult(props) {
    const [results, setResults] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5033/produkter/soeg/' + props.match.params.searchword)
            .then(res => {
                const response = res.data;
                setResults(response);
            })
    }, [props.match.params.searchword])

    let listOfResults = "";
    let anyResults = "";

    if (results.length > 0) {
        listOfResults = results.map(result => {
            return (
                <Card className="col-sm-12 col-md-4" key={result.id}>
                    <Card.Body>
                        <Card.Img variant="top" src={"http://localhost:5033/images/" + result.image} className="img-height-card"/>
                        
                        <Card.Title>{result.titel}</Card.Title>
                        
                        <Card.Text className="product-txt-overflow">{result.teaser}</Card.Text>

                        <Link to={'/product/' + result._id} className="col-12">SE MERE</Link>
                    </Card.Body>
                </Card>
            )
        })
        anyResults = <h4>Her er dinne søge-resultater</h4>
    } else {
        anyResults = <h4>Der er desvære ingen resultater</h4>
    }

    return (
        <section id="IdSearchResult">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    {anyResults}
                    <div className="row">
                        {listOfResults}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchResult;