import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import EditServiceModal from './EditServiceModal';


const ManageService = () => {
    const [services, setServices] = useState(null);
    const [editedService, setEditedService] = useState({});
    const [isEditedSuccess, setIsEditedSuccess] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isEditedSuccess])

    const handleDeleteService = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://diligent-detectives-server.herokuapp.com/deleteService/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result) {
                                swal("Poof! Service has been deleted!", {
                                    icon: "success",
                                });
                                document.getElementById(`${id}`).style.display = 'none';
                            }
                        })
                }
            });

    };
    
    const handleEditService = (service) => {
        swal({
            title: "Are you sure?",
            text: "To Edit This Service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willEdit) => {
                if (willEdit) {
                    setEditedService(service)
                    openModal()
                }
            });

    };

    return (
        <div className="manage-service">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Manage Service</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="background-light padding-5">
                <div className="bg-white p-3 border-radius-10">
                    <table className="table table-borderless text-center">
                        <thead className="background-light">
                            <tr>
                                <th className="text-secondary" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Service Name</th>
                                <th className="text-secondary" scope="col">Service Cost</th>
                                <th className="text-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services?.map((service, index) =>
                                    <tr key={service._id} id={`${service._id}`}>
                                        <td>{index + 1}</td>
                                        <td>{service.name}</td>
                                        <td>{service.cost}</td>
                                        <td>
                                            <span className="delete-btn mr-3" onClick={() => handleDeleteService(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                            <span className="edit-btn" onClick={ () => handleEditService(service)}><FontAwesomeIcon icon={faEdit} /></span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {
                        !services && <LoadingSpinner />
                    }

                    {
                        services?.length === 0 && <h2>No Service Here</h2>
                    }
                </div>
                <EditServiceModal modalIsOpen={modalIsOpen} closeModal={closeModal} isEditedSuccess={isEditedSuccess} setIsEditedSuccess={setIsEditedSuccess} service={editedService}></EditServiceModal>
            </div>
        </div>
    );
};

export default ManageService;