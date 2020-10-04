import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DeleteProfile() {
    const [profile, setProfile] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('http://localhost:5033/bruger/admin/' + sessionStorage.userID);
                setProfile(await res.data);
            } catch (err) {
                console.log(err)
            }
        })()
    }, [sessionStorage.userID])

    const deleteProfile = e => {
        axios.delete('http://localhost:5033/bruger/admin/' + sessionStorage.userID)
            .then(res => {
                console.log(res.data);
                history.push('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return (
        <section id="IdDeleteProfile">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Er du sikker på at du vil slætte denne profil?</h4>

                    <p>{profile.brugernavn}</p>

                    <p>{profile.email}</p>
                    
                    <Button onClick={() => { history.push('/')}} variant="outline-success">FORTRYD</Button>
                    
                    <Button onClick={deleteProfile} variant="outline-danger">SLET PROFIL</Button>
                </div>
            </div>
        </section>
    )
}

export default DeleteProfile;