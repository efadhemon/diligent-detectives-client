import React from 'react';
import './Profile.css';

const Profile = () => {

    const UserInfo = JSON.parse(localStorage.getItem('loggedInUser')) || {};

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    }

    return (
        <div className="profile-section">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Profile</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="background-light padding-5">
                <div className="profile-info">
                    <img className="rounded-circle shadow" src={UserInfo.photo} alt="" width="100" height="100" />
                    <h2 className="mt-3">{UserInfo.name}</h2>
                    <p>{UserInfo.email}</p>

                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;