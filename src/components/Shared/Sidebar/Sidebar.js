import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCartPlus, faBook, faCommentAlt, faPlus, faUser, faThLarge, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const { pathname } = useLocation();
    const mainPath = pathname.split('/')[1];

    const signOut = () => {
        localStorage.removeItem('loggedInUser')
        localStorage.removeItem('admin')
        window.location.reload();
    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="side-bar-link">
                        <h2> {'{D}'} Detectives</h2>
                    </Link>
                </li>
                {mainPath === 'user' &&
                    <>
                        <li>
                            <Link to="/user" className="side-bar-link">
                                <FontAwesomeIcon icon={faUserAlt} /> <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/book" className="side-bar-link">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/booking-list" className="side-bar-link">
                                <FontAwesomeIcon icon={faBook} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/review" className="side-bar-link">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </>
                }

                {
                    mainPath === 'admin' &&
                    <>
                        <li>
                            <Link to="/admin/client-list" className="side-bar-link">
                                <FontAwesomeIcon icon={faBook} /> <span>Client List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/add-service" className="side-bar-link">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/make-admin" className="side-bar-link">
                                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/manage-service" className="side-bar-link">
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/manage-testimonials" className="side-bar-link">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Manage Testimonials</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>

            <div>
                <Link to="/" onClick={signOut} className="side-bar-link"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;