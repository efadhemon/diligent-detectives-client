import React, { useEffect, useState } from 'react';
import './ClientList.css';
import ClientDataTable from './ClientDataTable';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import swal from 'sweetalert';


const ClientList = () => {
    const [clients, setClients] = useState(null);
    const [isStatusUpdated, setIsStatusUpdated] = useState(false);


    useEffect(() => {
        fetch(`https://diligent-detectives-server.herokuapp.com/clients`)
            .then(res => res.json())
            .then(data => setClients(data))
            .catch(err => {
                swal( err.message, {
                    icon: 'error',
                });
            })

    }, [isStatusUpdated])

    return (
        <div className="client-list">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Client List</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="content-items padding-5">
                {
                    clients?.length > 0 &&
                    <div className="bg-white p-3 border-radius-10">

                        <table className="table table-borderless text-center">
                            <thead className="bg-light">
                                <tr>
                                    <th className="text-secondary" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Client Name</th>
                                    <th className="text-secondary" scope="col">Client Email</th>
                                    <th className="text-secondary" scope="col">Service Name</th>
                                    <th className="text-secondary" scope="col">PaymentId</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clients.map((client, index) => <ClientDataTable client={client} index={index} isStatusUpdated={isStatusUpdated} setIsStatusUpdated={setIsStatusUpdated} key={client._id}></ClientDataTable>)
                                }
                            </tbody>
                        </table>

                    </div>
                }

                {
                    !clients && <LoadingSpinner />
                }

                {
                    clients?.length === 0 && <h2 className="text-center">No Client Here</h2>
                }
            </div>
        </div>
    );
};

export default ClientList;