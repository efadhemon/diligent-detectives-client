import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const ourAddress = [
        { name: "Mohammadpur - Dhaka 1207", link: "/" }

    ]
    const explore = [
        { name: "About", link: "/" },
        { name: "Closed Cases", link: "/" },
        { name: "Team Member", link: "/" },
        { name: "Terms and Condition", link: "/" }
    ]
    const services = [
        { name: "Find a person", link: "/" },
        { name: "Child Custody", link: "/" },
        { name: "Marital Identify", link: "/" },
        { name: "Missing Case", link: "/" }
    ]
    return (
        // <footer className="footer-area clear-both">
        //     <div className="container pt-5">
        //         <div className="row py-5">
        //             <FooterCol key={1} menuTitle="Explore" menuItems={explore} />
        //             <FooterCol key={2} menuTitle="Services" menuItems={services} />
        //             <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}>
        //                 <div className="">
        //                     <div className="text-white mb-4">
        //                         <span>Design By</span>
        //                         <h5>Mohammad Emon</h5>
        //                         <h6>Email: programmeremon@gmail.com</h6>
        //                     </div>

        //                     <ul className="social-media list-inline">
        //                         <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
        //                         <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
        //                         <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
        //                     </ul>
        //                 </div>
        //             </FooterCol>
        //         </div>
        //         <div className="copyRight text-center text-white py-3">
        //             <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        //         </div>
        //     </div>
        // </footer>

        <footer id="footer">

            <div class="container">

                <div class="row">

                    <div class="fbox col-md-3">

                        <h3>ABOUT US</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.</p>

                        <div class="ficons">

                            <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="/"><FontAwesomeIcon icon={faBehance} /></a>

                        </div>

                    </div>

                    <div class="fbox col-md-3">

                        <h3>CONTACT US</h3>

                        <div class="contact-icon"><i class="fa fa-home"></i></div>
                        <span id="contacts"> Raffles Avenue, Singapore Flyer, Singapore</span>

                        <div class="contact-icon"><i class="fa fa-phone"></i></div>
                        <span id="contacts"> +(98) 888 7777 <br /> +(12) 999 22333</span>

                        <div class="contact-icon"><i class="fa fa-envelope"></i></div>
                        <span id="contacts"> sample-email@example.com  myinfo@example.com</span>

                    </div>

                    <div class="fbox col-md-3">

                        <h3>USEFULL LINKS</h3>

                        <ul>

                            <li><a href="#"><i class="fas fa-chevron-right"></i>Home</a></li>
                            <li><a href="#"><i class="fas fa-chevron-right"></i>About Us</a></li>
                            <li><a href="#"><i class="fas fa-chevron-right"></i>Services</a></li>
                            <li><a href="#"><i class="fas fa-chevron-right"></i>News</a></li>
                            <li><a href="#"><i class="fas fa-chevron-right"></i>Portfolio</a></li>


                        </ul>

                    </div>

                    <div class="fbox col-md-3">

                        <h3>RECENT POST</h3>

                        <div class="fRpost">

                            <div class="fRpostMeta">

                                <span>24</span>
                                <p>APRIL 2019</p>

                            </div>

                            <div class="fRpostTitle">

                                <h3><a href="#">WHERE WE'RE STANDING RIGHT NOW</a></h3>

                                <p><i class="fa fa-user"></i>By Admin </p>
                                <p><i class="fa fa-comment"></i>28</p>

                            </div>

                        </div>

                        <div class="fRpost">

                            <div class="fRpostMeta">

                                <span>24</span>
                                <p>APRIL 2019</p>

                            </div>

                            <div class="fRpostTitle">

                                <h3><a href="#">AND MAYBE KNOWING ISN'T THE POINT</a></h3>

                                <p><i class="fa fa-user"></i>By Admin </p>
                                <p><i class="fa fa-comment"></i>28</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="copy-right-container">

                <div class="container">

                    <div class="copy-right-text"> &copy; Copyright 2019 themelazer.info All rights reserved.</div>

                    <div class="copy-right-menu">

                        <ul>

                            <li><a href="#">FAQS </a></li>
                            <li><a href="#">Privacy </a></li>
                            <li><a href="#">Policy </a></li>
                            <li><a href="#">Support</a></li>

                        </ul>

                    </div>

                </div>

            </div>

        </footer>

    );
};

export default Footer;