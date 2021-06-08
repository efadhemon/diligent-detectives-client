import React from 'react';
import swal from 'sweetalert';

const ClientDataTable = ({ client, index, isStatusUpdated, setIsStatusUpdated }) => {

    function updateStatus(e) {
        const newStatus = e.target.value;
        const id = e.target.id;

        fetch(`https://diligent-detectives-server.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newStatus })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    swal('Status Change Successful', {
                        icon: 'success'
                    })
                        .then(() => {
                            if (isStatusUpdated) {
                                setIsStatusUpdated(false);
                            } else {
                                setIsStatusUpdated(true);
                            }
                        })
                }
            })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{client.client_name}</td>
            <td>{client.client_email}</td>
            <td>{client.serviceInfo.name}</td>
            <td>{client.paymentId}</td>
            <td>
                <select id={client._id} onChange={updateStatus} className={`service-status ${client.status}`}>
                    <option value={client.status}>{client.status}</option>
                    {client.status !== 'Pending' &&
                        <option value="Pending">Pending</option>
                    }
                    {client.status !== 'On going' &&
                        <option value="On going">On going</option>
                    }
                    {client.status !== 'Done' &&
                        <option value="Done">Done</option>
                    }
                </select>
            </td>
        </tr>
    );
};

export default ClientDataTable;