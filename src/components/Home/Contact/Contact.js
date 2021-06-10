import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


const Contact = () => {


    function sendEmail(e) {
        emailjs.sendForm('service_y92xc5v', 'template_2mlxp4j', e.target, 'user_gLcMXOYVs8qRUE4j64btb')
            .then(() => {
                swal('Your message has been sent', {
                    icon: 'success'
                })
            }, () => {
                swal('Something is wrong, please try again', {
                    icon: 'success'
                })
            });
        e.target.reset();
        e.preventDefault();
    }

    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- Always  connect with us</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>

                <div className="col-md-9 mx-auto">
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" name="name" className="input" placeholder="Your Name" required />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="email" name="email" className="input" placeholder="Your Email" required />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="subject" className="input" placeholder="Subject" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="input" cols="30" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="form-group text-center">
                            <input style={{ width: "150px" }} type="submit" className="btn-brand mx-auto btn-circle" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;