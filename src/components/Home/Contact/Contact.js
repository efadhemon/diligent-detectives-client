import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact py-5">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- Always  connect with us</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>

                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" name="name" className="input" placeholder="Your Name" />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="email" name="email" className="input" placeholder="Your Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name="subject" className="input" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="input" cols="30" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button style={{ width: "150px" }} type="button" className="btn-brand mx-auto">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;