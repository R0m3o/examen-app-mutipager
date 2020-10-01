import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Search() {
    const [searchword, setSearchword] = useState()
    const history = useHistory();

    const wordSearched = e => {
        e.preventDefault();
        history.push('/search-result/' + searchword)
    }

    return (
        <div className="row" id="IdSearch">
            <Form onSubmit={wordSearched} className="col-sm-7 col-md-3">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-search"><span>&#128269;</span></InputGroup.Text> 
                    </InputGroup.Prepend>

                    <FormControl onChange={(e) => setSearchword(e.target.value)} placeholder="..." aria-label="search" aria-describedby="basic-search"/>
                    
                    <Button type="submit" variant="outline-light">SØG</Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default Search;
