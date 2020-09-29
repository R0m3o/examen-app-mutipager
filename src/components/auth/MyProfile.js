import React from 'react';
import { Link } from 'react-router-dom';

function MyProfile() {
    return (
        <section id="IdMyProfile">
            <div className="row">
                <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                    <h4>Min profil</h4>

                    <Link to='/patch-profile'>RET PROFIL</Link>

                    <Link to='/delete-profile'>SLET PROFIL</Link>
                    
                    <Link to='/logout'>LOG UD</Link>
                </div>
            </div>
        </section>
    )
}

export default MyProfile;