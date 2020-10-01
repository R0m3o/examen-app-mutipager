import React from 'react';
import { Link } from 'react-router-dom';
import PatchProfile from './PatchProfile';

function MyProfile() {
    return (
        <section id="IdMyProfile">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Min profil</h4>
                    <div className="row">
                        <PatchProfile/>
                        <div className="col-sm-12 col-md-6">
                            <Link to='/delete-profile'>SLET PROFIL</Link>
                            
                            <Link to='/logout'>LOG UD</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProfile;