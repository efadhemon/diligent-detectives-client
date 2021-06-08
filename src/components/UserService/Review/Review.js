import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const Review = () => {
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
                swal('Sorry', error.message, 'error');
            });
    }

    const onSubmit = (data, e) => {
        if (imageUrl === null) {
            swal('Please', 'Wait Image Url is processing', 'warning');
        }
        else {
            const newReview = { ...data, image: imageUrl }
            fetch('https://diligent-detectives-server.herokuapp.com/addTestimonial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
                .then(res => res.json())
                .then((addSuccess) => {
                    if (addSuccess) {
                        swal('Thanks for your review', {
                            icon: 'success'
                        })
                            .then(() => e.target.reset())
                    }
                })
        }
    };


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Review</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="content-items">
                <form className="padding-5 width-50" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input placeholder="Your Name" className="input" type="text" name="name" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input placeholder="Where are you from?" className="input" type="text" name="from" ref={register({ required: true })} />
                        {errors.from && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your comment in 200 letter" className="input" type="text" name="quote" ref={register({ required: true })} />
                        {errors.quote && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <label className="upload-photo" htmlFor="upload-photo"> <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload a Image
                            <input className="input" type="file" onChange={handleImageUpload} id="upload-photo" name="image" ref={register({ required: true })} />
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

export default Review;