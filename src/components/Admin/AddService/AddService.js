import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '02ecc9ae74794902104116f47bebd708')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = (data, e) => {
        if (imageUrl == null) {
            swal('Please Wait Image Url is processing', {
                icon: 'warning',
            })
        }
        else {
            const newService = { ...data, image: imageUrl }
            fetch('https://diligent-detectives-server.herokuapp.com/addService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newService)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        swal('Service Successfully Added', {
                            icon: 'success',
                        })
                        .then( () => e.target.reset())
                                        
                    }
                })
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Add Service</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="content-items padding-5">
                <form className="width-50" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Service Name</label>
                        <input className="input" type="text" name="name" placeholder="type here" ref={register({ required: true })} id="name" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost">Service Cost (only use number)</label>
                        <input className="input" type="text" name="cost" placeholder="type here" ref={register({ required: true })} id="cost" />
                        {errors.cost && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Service Description (in 100 letter)</label>
                        <textarea className="input" type="text" name="description" placeholder="type here" ref={register({ required: true })} id="description" />
                        {errors.description && <span className="text-danger" >This field is required</span>}
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <label className="upload-photo" htmlFor="service-photo"> <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload a Image
                            <input className="input" type="file" onChange={handleImageUpload} id="service-photo" name="image" ref={register({ required: true })} />
                        </label>

                        <div className="text-right">
                            <input className="btn-brand" type="submit" value="Submit" />
                        </div>
                    </div>
                    {errors.image && <span className="text-danger d-block">This field is required</span>}
                </form>
            </div>
        </div>
    );
};

export default AddService;