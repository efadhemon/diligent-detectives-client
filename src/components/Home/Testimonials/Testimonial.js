import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,image} = props.testimonial;
    return (
        <div className="p-4 rounded bg-white shadow">
            <div className="d-flex  align-items-center">
                <img className="rounded-circle shadow" src={image} alt="" width="100" height="100"/>
                <div className="ml-4">
                    <h4 className="text-brand">{name}</h4>
                    <h6 className="m-0">{from}</h6>
                </div>
            </div>
            <div className="text-secondary mt-3">
                <p className="text-justify">{quote}</p>
            </div>
       </div>
    );
};

export default Testimonial;