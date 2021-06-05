import React from 'react';
import about from '../../../images/about.png';
import './About.css'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-title">
                    <h2>about us</h2>
                </div>
                <div className="row">
                    <div data-aos="zoom-in-down" className="col-md-6">
                        <img className="about-image" src={about} alt="" />
                    </div>

                    <div data-aos="zoom-in-up" className="col-md-6">
                        <h1 className="text-gradient">-- Introducing the Private <br /> Investigation Agency</h1>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <div className="text-right">
                            <button className="btn-brand btn-circle">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;