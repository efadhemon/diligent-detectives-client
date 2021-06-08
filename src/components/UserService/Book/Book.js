import React, { useContext, useState } from 'react';
import './Book.css'
import { useHistory } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import Services from '../../Home/Services/Services';

const Book = () => {

  const [serviceInfo, setServiceInfo] = useState(JSON.parse(sessionStorage.getItem('service')));
  const clientInfo = useContext(UserContext)[0];

  const history = useHistory();

  const handlePaymentSuccess = paymentId => {
    console.log(paymentId);
    const bookingDetails = { client_name: clientInfo.name, client_email: clientInfo.email, serviceInfo: { ...serviceInfo }, paymentId, status: 'Pending', bookingTime: new Date() }
    fetch('https://diligent-detectives-server.herokuapp.com/addBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          swal('Thanks', 'Your Booking is Successful', 'success')
            .then(() => {
              sessionStorage.removeItem('service');
              history.push('/user/booking-list')
            })
        }
      })
  }


  if (serviceInfo) {

    return (
      <div className="book-section">
        <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
          <h1>Book</h1>
          <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
        </div>
        <div className="content-items padding-5">

          <div className="booking-info width-50">
            <input className="input" readOnly defaultValue={clientInfo.name} />
            <input className="input" readOnly defaultValue={clientInfo.email} />
            <input className="input" readOnly defaultValue={serviceInfo.name} />
          </div>

          <div className="payment-info">
            <div className="pay-with mb-4">
              <p className="text-secondary">Pay With</p>
              <label htmlFor="credit-card">
                <input type="radio" id="credit-card" name="paymentMethod" defaultChecked={true} /> Credit Card
                </label>
              <label htmlFor="paypal">
                <input type="radio" id="paypal" name="paymentMethod" /> Paypal
                </label>
            </div>
            <ProcessPayment serviceCost={serviceInfo.cost} handlePayment={handlePaymentSuccess}></ProcessPayment>
          </div>
        </div>

      </div>
    );

  } else {
    return (
      <div className="text-center">
        <Services setServiceInfo={setServiceInfo}></Services>
      </div>
    );
  }

};

export default Book;