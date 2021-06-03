import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Testimonials = () => {

    SwiperCore.use([Pagination, Autoplay]);
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

                {
                    testimonials.length === 0 && <LoadingSpinner />
                }

            </div>
            <div className="mx-sm-5">
                    <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                    >

                        {
                            testimonials.map(testimonial => {
                                return (
                                    <SwiperSlide key={testimonial._id}>
                                        <Testimonial testimonial={testimonial} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
        </section>
    );
};

export default Testimonials;