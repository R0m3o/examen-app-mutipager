import React, { useContext } from 'react';
import { LoginContext } from '../auth/LoginContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function LogOut() {
    const { onLogout } = useContext(LoginContext);
    const history = useHistory();

    const handleLogout = () => {
        axios.get('http://localhost:5033/login/logout')
            .then(data => {
                var d = new Date();
                d.setTime(d.getTime() - (3*60*60*1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = (document.cookie + "; " + expires)
                
                onLogout();
                history.push('/');
            })
    }

    return (
        <section id="IdLogOut">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Er du sikker på at du vil logge ud?</h4>

                    <Button onClick={() => { history.push('/')}} variant="outline-success">FORTRYD</Button>
                    
                    <Button onClick={handleLogout} variant="outline-danger">LOG UD</Button>
                </div>
            </div>
        </section>
    )
}

export default LogOut;