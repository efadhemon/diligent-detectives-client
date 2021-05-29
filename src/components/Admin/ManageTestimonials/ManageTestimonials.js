import React, { useEffect, useState } from 'react';
import './ManageTestimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import EditTestimonialModal from './EditTestimonialModal';

const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [editedTestimonial, setEditedTestimonial] = useState({});
    const [editedSuccess, setEditedSuccess] = useState(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        fetch(`https://diligent-detectives-server.herokuapp.com/testimonials`)
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
            })
            .catch(err => {
                swal('Sorry', err.message, 'error');
            })
    }, [editedSuccess])

    const handleDeleteTestimonial = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this testimonial!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://diligent-detectives-server.herokuapp.com/deleteTestimonial/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result) {
                                swal("Poof! Testimonial has been deleted!", {
                                    icon: "success",
                                });
                                document.getElementById(`${id}`).style.display = 'none';
                            }
                        })
                }
            });

    };

    const handleEditTestimonial = (testimonial) => {
        swal({
            title: "Are you sure?",
            text: "To Edit This Testimonial!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willEdit) => {
                if (willEdit) {
                    setEditedTestimonial(testimonial)
                    openModal()
                }
            });

    };


    return (
        <div className="testimonials-list">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Review List</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="background-light padding-5">

                {
                    testimonials.length > 0 &&
                    <div className="display-grid-col-3">
                        {
                            testimonials.map(testimonial => <div id={testimonial._id} key={testimonial._id} className="p-3 box-shadow rounded bg-white text-center">

                                <img className="rounded-circle" src={testimonial.image} alt="" width="100" height="100" />
                                <h4>{testimonial.name}</h4>
                                <h5>{testimonial.from}</h5>
                                <p>{testimonial.quote}</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <button className="delete-btn" onClick={() => handleDeleteTestimonial(testimonial._id)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                                    <button onClick={() => handleEditTestimonial(testimonial)} className="edit-btn"><FontAwesomeIcon icon={faEdit} /> Edit</button>
                                </div>
                            </div>)
                        }
                    </div>
                }

                {
                    testimonials.length === 0 && <LoadingSpinner />
                }

                <EditTestimonialModal modalIsOpen={modalIsOpen} closeModal={closeModal} setEditedSuccess={setEditedSuccess} editedTestimonial={editedTestimonial}></EditTestimonialModal>

            </div>
        </div>
    );
};

export default ManageTestimonials;