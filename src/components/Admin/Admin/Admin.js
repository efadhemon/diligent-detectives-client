import React, { useState } from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import ClientList from '../ClientList/ClientList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import ManageTestimonials from '../ManageTestimonials/ManageTestimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';


const Admin = () => {

    const [admin, setItem] = useState(localStorage.getItem('admin'))
 
    console.log(admin);

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};


    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        fetch(`https://diligent-detectives-server.herokuapp.com/admin?email=${data.email}`)
            .then(res => res.json())
            .then(result => {
                if (result.email === loggedInUser.email) {
                    setItem(result.email)
                    localStorage.setItem('admin', result.email);
                } else {
                    swal('Error', 'Please login with this email', 'error');
                }
            })
            .catch(err => {
                swal('Warning', 'Your Are Not An Admin', 'warning');
            })
    };

    if (admin !== loggedInUser.email) {
        return (
            <div className="verify-admin-box">
                <div>
                    <h1 className="text-danger">Please Verify that you are an admin</h1>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <input className="verify-admin" placeholder="Enter your email" name="email" ref={register({ required: true })} />
                        <input className="verify-btn btn-brand" type="submit" value="Verify" />
                    </form>

                    <Link to='/' className="back-to-home">
                        <span><FontAwesomeIcon id='show-confirm-password-icon' icon={faExpandArrowsAlt} /></span>
                    </Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="row margin-0">
                <div className="col-md-2 padding-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 padding-0">
                    <Switch>
                        <Route path="/admin/make-admin">
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path="/admin/client-list">
                            <ClientList></ClientList>
                        </Route>
                        <Route path="/admin/add-service">
                            <AddService></AddService>
                        </Route>
                        <Route path="/admin/manage-service">
                            <ManageService></ManageService>
                        </Route>
                        <Route path="/admin/manage-testimonials">
                            <ManageTestimonials></ManageTestimonials>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }

};

export default Admin;