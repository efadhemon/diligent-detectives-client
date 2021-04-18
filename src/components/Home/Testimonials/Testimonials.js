import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
       <section className="testimonials">
           <div className="container">
               <div className="section-header text-center mb-5">
                   <h5 className="text-brand text-uppercase">Testimonial</h5>
                   <h1 className="text-gradient">What Our Clients Says </h1>
               </div>
               <div className="display-grid-col-3">
                    {
                        reviews.map(review => <Testimonial review={review} key={review._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;