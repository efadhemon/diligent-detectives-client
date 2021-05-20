import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faComments, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">

            <div class="container">

                <div class="row">

                    <div class="footer-box col-md-3">

                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odit repudiandae? Unde doloremque nemo aperiam cupiditate nam laudantium voluptatem beatae!</p>

                        <div class="ficons">

                            <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="/"><FontAwesomeIcon icon={faBehance} /></a>

                        </div>

                    </div>

                    <div class="footer-box col-md-3">

                        <h3>CONTACT US</h3>

                        <div class="contact-icon"><FontAwesomeIcon icon={faHome} /></div>
                        <span id="contacts"> Mohammadpur, Dhaka-1207, Bangladesh</span>

                        <div class="contact-icon"><FontAwesomeIcon icon={faPhone} /></div>
                        <span id="contacts"> +880 19982 00160 <br /> +880 18712 57744</span>

                        <div class="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <span id="contacts"> emonhossain0317@gmail.com <br /> emon.dev02@gmail.com</span>

                    </div>

                    <div class="footer-box col-md-3">

                        <h3>USEFULL LINKS</h3>

                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faChevronRight} />Home</a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faChevronRight} />About Us</a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faChevronRight} />Services</a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faChevronRight} />News</a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faChevronRight} />Portfolio</a></li>
                        </ul>

                    </div>

                    <div class="footer-box col-md-3">
                        <h3>Recent Cases</h3>
                        <div class="fRpost">

                            <div class="fRpostMeta">
                                <span>15</span>
                                <p>APRIL 2021</p>
                            </div>

                            <div class="fRpostTitle">
                                <h3><a href="/">WHERE WE'RE STANDING RIGHT NOW</a></h3>
                                <p><FontAwesomeIcon icon={faUser} />By Admin </p>
                                <p><FontAwesomeIcon icon={faComments} />35</p>
                            </div>

                        </div>

                        <div class="fRpost">
                            <div class="fRpostMeta">
                                <span>25</span>
                                <p>APRIL 2021</p>
                            </div>

                            <div class="fRpostTitle">
                                <h3><a href="/">AND MAYBE KNOWING ISN'T THE POINT</a></h3>

                                <p><FontAwesomeIcon icon={faUser} />By Admin </p>
                                <p><FontAwesomeIcon icon={faComments} />30</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="copy-right-container">
                    <div class="row">

                        <p class="col-md-6">Copyright &copy; {new Date().getFullYear()}, All rights reserved Emon</p>

                        <div class="col-md-6 text-right">
                            <ul className="list-unstyled">
                                <li><Link to="/">FAQS </Link></li>
                                <li className="mr-4"><Link to="/">Privacy </Link></li>
                                <li className="mr-4"><Link to="/">Policy </Link></li>
                                <li className="mr-4"><Link to="/">Support</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    );
};

export default Footer;