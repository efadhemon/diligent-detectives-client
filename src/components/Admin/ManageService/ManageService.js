import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDeleteService = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm('Are you sure to delete this product')
        if (deleteConfirm) {
            fetch(`https://diligent-detectives-server.herokuapp.com/deleteService/${id}`, {
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
        <div className="manage-service">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Manage Service</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div style={{height: '90vh'}}  className="background-light padding-5">
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
                                services.map((service, index) =>
                                    <tr key={service._id} id={`${service._id}`}>
                                        <td>{index + 1}</td>
                                        <td>{service.name}</td>
                                        <td>{service.cost}</td>
                                        <td >
                                            <span onClick={()=> handleDeleteService(service._id)}><FontAwesomeIcon icon={faTrashAlt}/></span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;