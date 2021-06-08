import React, { useEffect, useState } from 'react';
import './BookingList.css';
import swal from 'sweetalert';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';


const BookingList = () => {
    const clientInfo = JSON.parse(localStorage.getItem('loggedInUser')) || {}

    const [booking, setBooking] = useState(null);

    useEffect(() => {
        fetch(`https://diligent-detectives-server.herokuapp.com/bookings?email=${clientInfo.email}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
            })
            .catch(err => {
                swal(err.message, {
                    icon: 'error',
                })
                .then(() => {
                    setBooking(true);
                    document.getElementById('booking-list-container').innerHTML = `<h2 class="text-center text-danger m-5">Sorry Something Is Wrong</h2>`;
                })
            })
    }, [clientInfo.email])

    return (
        <div className="booking-list">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Booking List</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div id="booking-list-container" className="content-items padding-5">

                {
                    booking?.length > 0 &&
                    <div className="display-grid-col-3">
                        {
                            booking.map(service => <div key={service._id} className="p-3 box-shadow rounded bg-white">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <img className="rounded-circle" src={service.serviceInfo.image} alt="" width="80" height="80" />
                                    <p className={`status ${service.status}`}>{service.status}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5>{service.serviceInfo.name}</h5>
                                    <p>$ {service.serviceInfo.cost}</p>
                                </div>
                                <p className="text-justify">{service.serviceInfo.description}</p>
                            </div>)
                        }
                    </div>
                }

                {
                    !booking && <LoadingSpinner />
                }

                {
                    booking?.length === 0 && <h2 className="text-center m-5">You have no booking</h2>
                }

            </div>
        </div>
    );
};

export default BookingList;