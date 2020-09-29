import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PatchProfile = (props) => {
    const [profile, setProfile] = useState({});
    const history = useHistory();

    useEffect(() => {
        async function getProfile() {
            try {
                let res = await axios.get('http://localhost:5033/bruger/admin/' + props.match.params.id);
                let profileRes = await res.data;

                setProfile({ brugernavn: profileRes.brugernavn, fornavn: profileRes.fornavn, efternavn: profileRes.efternavn, email: profileRes.email, password: profileRes.password})
            } catch (err) {
                console.log(err);
            }
        }

        getProfile();
    }, [])

    const editProfile = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5033/bruger/admin/' + props.match.params.id + profile, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                history.push('/');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <section id="IdPatchProfile">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Ret din profil</h4>
                    <Form onSubmit={editProfile}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Brugernavn:</Form.Label>

                            <Form.Control defaultValue={profile.brugernavn} onChange={(e) => setProfile({ ...profile, brugernavn: e.target.value })} type="text"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicFirstname">
                            <Form.Label>Fornavn:</Form.Label>

                            <Form.Control defaultValue={profile.fornavn} onChange={(e) => setProfile({ ...profile, fornavn: e.target.value })} type="text"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicLastname">
                            <Form.Label>Efternavn:</Form.Label>

                            <Form.Control defaultValue={profile.efternavn} onChange={(e) => setProfile({ ...profile, efternavn: e.target.value })} type="text"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>

                            <Form.Control defaultValue={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} type="email"/>
                        
                            <Form.Text className="text-muted">
                                Man logger ind med sin email, vær sikker på at du kan huske hvilken du bruger.  
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>

                            <Form.Control defaultValue={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} type="password"/>
                        </Form.Group>

                        <Button variant="outline-success" type="submit">RET BRUGER</Button>

                        <Button onClick={() => { history.push('/')}} variant="outline-danger" type="button">FORTRYD</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default PatchProfile;