import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Profile.css';
import AvatarFace from '../../../images/Avatar face.png';

const Profile = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser()
    }

    return (
        <div className="profile-section">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Profile</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="content-items padding-5">
                <div className="profile-info">
                    <img className="rounded-circle shadow" src={loggedInUser.photo ? loggedInUser.photo :AvatarFace} alt="" width="100" height="100" />
                    <h2 className="mt-3">{loggedInUser.name}</h2>
                    <p>{loggedInUser.email}</p>

                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;