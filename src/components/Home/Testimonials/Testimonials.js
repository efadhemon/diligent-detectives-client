import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>
                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- What Our Clients Say</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>
            </div>
            <div className="display-grid-col-3">
                {
                    testimonials.map(testimonial =><Testimonial key={testimonial._id} testimonial={testimonial} />)
                }
            </div>
            {
                testimonials.length === 0 && <LoadingSpinner />
            }
        </section>
    );
};

export default Testimonials;