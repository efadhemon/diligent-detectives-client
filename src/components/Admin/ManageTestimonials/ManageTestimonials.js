import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch(`https://diligent-detectives-server.herokuapp.com/testimonials`)
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
            })
            .catch(err => {
                swal('Sorry', err.message, 'error');
            })
    }, [])

    const handleDeleteTestimonial= (id) => {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm('Are you sure to delete this product')
        if (deleteConfirm) {
            fetch(`https://diligent-detectives-server.herokuapp.com/deleteTestimonial/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        document.getElementById(`${id}`).style.display = 'none';
                    }
                })
        }

    }

    return (
        <div className="testimonials-list">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Review List</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div id="testimonials-list-container" className="background-light padding-5">

                {
                    testimonials.length > 0 &&
                    <div className="display-grid-col-3">
                        {
                            testimonials.map(testimonial => <div key={testimonial._id} className="p-3 box-shadow rounded bg-white">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <img className="rounded-circle" src={testimonial.image} alt="" width="80" height="80" />
                                    <p onClick={()=> handleDeleteTestimonial(testimonial._id)}><FontAwesomeIcon title="Delete Testimonial" icon={faTrashAlt} /></p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5>{testimonial.name}</h5>
                                    <p>{testimonial.from}</p>
                                </div>
                                <p className="text-justify">{testimonial.quote}</p>
                            </div>)
                        }
                    </div>
                }

                {
                    testimonials.length === 0 && <LoadingSpinner/>
                }

            </div>
        </div>
    );
};

export default ManageTestimonials;