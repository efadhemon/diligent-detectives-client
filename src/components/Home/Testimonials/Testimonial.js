import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, image } = props.testimonial;
    return (
        <div className="single-testimonial shadow">

            <img className="rounded-circle shadow" src={image} alt="" width="100" height="100" />
            <h4 className="text-gradient">{name}</h4>
            <h6 className="m-0">{from}</h6>
            <div className="text-secondary mt-3">
                <p className="text-justify">{quote}</p>
            </div>

        </div>
    );
};

export default Testimonial;