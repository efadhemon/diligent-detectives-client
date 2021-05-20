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
                <div className="section-header text-center mb-5">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo quaerat, nihil fuga illo nemo dolores.</p>
                    </div>
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