import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://diligent-detectives-server.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(admin => {
                if (admin) {
                    swal('Success', 'Admin Added', 'success');
                }
            })
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Make Admin</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="background-light padding-5">
                <div className="bg-white padding-5 border-radius-10">
                    <form className="width-50" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name"><h6>Admin Name</h6></label>
                            <input className="input" type="text" name="name" placeholder="Admin name" ref={register({ required: true })} id="name" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><h6>Admin Email</h6></label>
                            <input className="input" type="email" name="email" placeholder="example@gmail.com" ref={register({ required: true })} id="email" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="secret_key"><h6>Admin Secret Key</h6></label>
                            <input className="input" type="password" name="secret_key" placeholder="Secret key" ref={register({ required: true })} id="secret_key" />
                            {errors.secret_key && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="text-right">
                            <input className="btn-brand" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;