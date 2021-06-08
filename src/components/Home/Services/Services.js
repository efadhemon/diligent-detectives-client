import React, { useEffect, useState } from 'react';
import './Services.css';
import { useHistory, useLocation } from 'react-router';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Services = ({setServiceInfo}) => {

    const [services, setServices] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const history = useHistory();

    const handleService = (service) => {
        history.push(`/user/book`);
        sessionStorage.setItem('service', JSON.stringify(service));
        if (pathname === '/user/book') {
            setServiceInfo(service)
        }
    }

    return (
        <section id="service" className="service-section">
            <div className="container">
                {
                    pathname === '/' &&
                    <>
                        <div className="section-title">
                            <h2>Our Services</h2>
                        </div>
                        <div className="row align-items-center mb-5">
                            <h1 className="col-md-7 text-gradient">-- Offering Private <br /> Investigation Services</h1>
                            <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                        </div>
                    </>
                }
                {
                    pathname === '/user/book' &&
                    <h1 className="fs-1 mb-5">Please select a service</h1>
                }
                <div className="display-grid-col-3">

                    {
                        services.map(service => <div data-aos={ pathname === '/' ? "fade-up" : ''} key={service._id} className="d-flex">
                            <div className="service-box" >
                                <div className="service-image">
                                    <img src={service.image} alt="" />
                                </div>
                                <div className="service-details shadow">
                                    <h3>{service.name}</h3>
                                    <h4 className="text-brand">$ {service.cost}</h4>
                                    <p className="text-justif">{service.description.substr(1, 100)}</p>
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