import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from './LoginContext';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Login() {
    const [logindata, setLogindata] = useState({});
    const history = useHistory();
    const { onLogin } = useContext(LoginContext)

    const userLoggingIn = e => {
        e.preventDefault();

        axios.post('http://localhost:5033/login/login', logindata)
            .then(res => {
                console.log(res.data);
                onLogin();
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section id="IdLogin">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <Form onSubmit={userLoggingIn}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="email-symbol">&#9993;</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl onChange={(e) => setLogindata({...logindata, email: e.target.value })} type="email" placeholder="email" aria-label="email" aria-describedby="email-symbol"/>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="key-symbol">&#9919;</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl onChange={(e) => setLogindata({...logindata, password: e.target.value })} type="password" placeholder="password" aria-label="password" aria-describedby="key-symbol"/>
                        </InputGroup>

                        <Button variant="outline-success" type="submit">LOG IND</Button>

                        <Button onClick={() => { history.push('/')}} variant="outline-danger" type="button">FORTRYD</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Login;