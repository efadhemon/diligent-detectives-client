import React, { useEffect, useState } from 'react';
import './ManageTestimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import EditTestimonialModal from './EditTestimonialModal';

const ManageTestimonials = ({admin, testAdmin}) => {
    const [testimonials, setTestimonials] = useState(null);
    const [editedTestimonial, setEditedTestimonial] = useState({});
    const [isEditedSuccess, setIsEditedSuccess] = useState(null);

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
                swal(err.message, {
                    icon: "error"
                });
            })

    }, [isEditedSuccess])

    const handleDeleteTestimonial = (id) => {

        if (admin === testAdmin) {
            swal("As a test admin you don't deleted Testimonial", {
                icon: "warning",
            })
        } else {
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
                                })
                                .then(() => {
                                    document.getElementById(`${id}`).style.display = 'none';
                                })
                            }
                        })
                }
            });
        }

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
        <div className="manage-testimonials">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Review List</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="content-items padding-5">

                {
                    testimonials?.length > 0 &&
                    <div className="display-grid-col-3">
                        {
                            testimonials.map(testimonial => <div id={testimonial._id} key={testimonial._id} className="p-3 box-shadow rounded bg-white text-center">

                                <img className="rounded-circle" src={testimonial.image} alt="" width="100" height="100" />
                                <h4>{testimonial.name}</h4>
                                <h6>{testimonial.from}</h6>
                                <p>{testimonial.quote.substr(1, 200)}</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <button className="delete-btn" onClick={() => handleDeleteTestimonial(testimonial._id)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                                    <button onClick={() => handleEditTestimonial(testimonial)} className="edit-btn"><FontAwesomeIcon icon={faEdit} /> Edit</button>
                                </div>
                            </div>)
                        }
                    </div>
                }

                {
                    !testimonials && <LoadingSpinner />
                }


                <EditTestimonialModal modalIsOpen={modalIsOpen} closeModal={closeModal} isEditedSuccess={isEditedSuccess} setIsEditedSuccess={setIsEditedSuccess} editedTestimonial={editedTestimonial}></EditTestimonialModal>

            </div>
        </div>
    );
};

export default ManageTestimonials;