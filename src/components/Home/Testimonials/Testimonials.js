import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
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
                <div className="display-grid-col-3">
                    {
                        reviews.map(review => <Testimonial review={review} key={review._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;