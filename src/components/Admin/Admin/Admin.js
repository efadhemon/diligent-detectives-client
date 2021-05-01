import React, { useState } from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import {
    Switch,
    Route
} from "react-router-dom";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import ClientList from '../ClientList/ClientList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';

const Admin = () => {

    const admin = JSON.parse(sessionStorage.getItem('admin')) || {};
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || {} ;


    const { register, handleSubmit,  errors } = useForm();

    const [error, setError] = useState(null);

    const onSubmit = data => {
        fetch(`https://diligent-detectives-server.herokuapp.com/admin?email=${data.email}`)
        .then(res => res.json())
        .then(result => {
            if (result.email === loggedInUser.email) {
                sessionStorage.setItem('admin', JSON.stringify(result.email));
                window.location.reload()
            }else{
                setError('Please login with this email');
            }
        })
        .catch(err=> {
            setError('Your Are Not An Admin');
        })
    };

    if (admin !== loggedInUser.email) {
        return (
            <div className="text-center mt-5">
                <h1>Please Verify that you are an admin</h1>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <input onChange={()=> setError(false)} className="verify-admin" placeholder="Enter your email" name="email" ref={register({ required: true })} />
                    <input className="verify-btn btn-brand" type="submit" value="Verify" />
                    {errors.email && <p className="text-danger mt-4">This field is required</p>}
                </form>
                {
                    error && <h1 className="text-danger mt-5">{error}</h1>
                }
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
                    </Switch>
                </div>
            </div>
        );
    }

};

export default Admin;