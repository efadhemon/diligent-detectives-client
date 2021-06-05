import React, { useEffect, useState } from 'react';
import './Services.css';
import { useHistory } from 'react-router';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Services = () => {

    const history = useHistory();

    const handleService = (service) => {
        history.push(`/user/book`);
        sessionStorage.setItem('service', JSON.stringify(service))
    }

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section id="service" className="service-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                </div>
                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- Offering Private <br /> Investigation Services</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>
                <div className="display-grid-col-3">

                    {
                        services.map(service => <div data-aos="fade-up" key={service._id} className="d-flex">
                            <div className="service-box" >
                                <div className="service-image">
                                    <img src={service.image} alt="" />
                                </div>
                                <div className="service-details shadow">
                                    <h3>{service.name}</h3>
                                    <h4 className="text-brand">$ {service.cost}</h4>
                                    <p className="text-justif">{service.description.substr(1, 80)}</p>
                                    <div className="book-btn">
                                        <button onClick={() => handleService(service)} className="btn-brand btn-circle">Book Service</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                {
                    services.length === 0 && <LoadingSpinner />
                }
            </div>
        </section>
    );
};

export default Services;