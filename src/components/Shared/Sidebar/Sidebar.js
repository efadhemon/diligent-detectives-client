import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCartPlus, faBook, faCommentAlt, faPlus, faUser, faThLarge, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { handleLogout } from '../../../App';

const Sidebar = () => {

    const { pathname } = useLocation();
    const mainPath = pathname.split('/')[1];
    const subpath = pathname.split('/')[2];

    const handleSidebar = () => {
        const navTogglerBtn = document.querySelector(".nav-toggler");
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    };


    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">

            <div onClick={handleSidebar} className="nav-toggler">
                <span></span>
            </div>

            <ul className="list-unstyled">

                <li className="logo">
                    <Link to="/" className="text-gradient">
                        Detectives
                    </Link>
                </li>

                {mainPath === 'user' &&
                    <>
                        <li onClick={handleSidebar}>
                            <Link to="/user" className={subpath === undefined ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faUserAlt} /> <span>Profile</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/user/book" className={subpath === 'book' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/user/booking-list" className={subpath === 'booking-list' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faBook} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/user/review" className={subpath === 'review' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </>
                }

                {
                    mainPath === 'admin' &&
                    <>
                        <li onClick={handleSidebar}>
                            <Link to="/admin/client-list" className={subpath === 'client-list' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faBook} /> <span>Client List</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/admin/add-service" className={subpath === 'add-service' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/admin/make-admin" className={subpath === 'make-admin' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/admin/manage-service" className={subpath === 'manage-service' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link to="/admin/manage-testimonials" className={subpath === 'manage-testimonials' ? "side-bar-link active" : "side-bar-link"}>
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Manage Testimonials</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>

            <div>
                <span  onClick={handleLogout} className="text-dark side-bar-link "><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></span>
            </div>
        </div>
    );
};

export default Sidebar;