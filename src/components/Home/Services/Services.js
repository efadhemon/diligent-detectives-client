import React, { useEffect, useState } from 'react';
import './Services.css';
import { useHistory } from 'react-router';

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
                <h1 className="text-center text-uppercase text-brand mb-5">Our Services</h1>
                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- Offering Private <br /> Investigation Services</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>
                <div className="display-grid-col-3">

                    {
                        services.map(service => <div key={service._id} onClick={() => handleService(service)} className="service-box card" >
                            <div className="service-image">
                                <img src={service.image} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body service-details bg-dark text-white text-center">
                                <h4>{service.name}</h4>
                                <h6>$ {service.cost}</h6>
                                <p className="text-justif">{service.description}</p>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;