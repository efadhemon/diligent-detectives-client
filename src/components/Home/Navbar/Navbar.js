import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import AvatarFace from '../../../images/Avatar face.png';
import { handleLogout, UserContext } from '../../../App';


const Navbar = () => {

    const loggedInUser = useContext(UserContext)[0];
    const [isFixed, setIsFixed] = useState(false);

    const showUserInfo = () => {
        const userInfo = document.getElementById('loggedIn-user-info');
        userInfo.classList.toggle('d-none')
    }


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        })
    }, []);

    return (
        <header className="header">
            <nav className={isFixed ? "navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-white" : "navbar navbar-expand-lg navbar-light bg-white"}>
                <div className="container-fluid">
                    <Link className="navbar-brand brand-logo text-gradient" to="/">Diligent Detectives</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/client-list">Admin</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ?
                                        <img onClick={showUserInfo} className="nav-link user-avatar" src={loggedInUser.photo ? loggedInUser.photo : AvatarFace} alt="Avatar" />
                                        :
                                        <Link className="nav-link login-btn" to="/login">Login</Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
                <div id="loggedIn-user-info" className="d-none shadow">
                    <img src={loggedInUser.photo ? loggedInUser.photo : AvatarFace} alt="" />
                    <h4>{loggedInUser.name}</h4>
                    <p>{loggedInUser.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>Log Out</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
