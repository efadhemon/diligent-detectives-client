import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
                alert(error.message);
            });
    }

    const onSubmit = data => {
        if (imageUrl === null) {
            alert('Please Wait Image Url is processing')
        }
        else {
            const newReview = { ...data, image: imageUrl }
            fetch('http://localhost:4000/postReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Product Successfully Added')
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
            <div style={{ height: '90vh' }} className="background-light">
                <form className="padding-5 width-50" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input placeholder="Your Name" className="input" type="text" name="name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input placeholder="Where are you from?" className="input" type="text" name="from" ref={register({ required: true })} />
                        {errors.city && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your comment" className="input" type="text" name="quote" ref={register({ required: true })} />
                        {errors.comment && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className="input" type="file" onChange={handleImageUpload} id="upload-photo" required />
                    </div>
                    <div className="text-right">
                        <input className="btn-brand" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;