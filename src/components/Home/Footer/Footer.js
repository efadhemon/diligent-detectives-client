import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

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
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Explore" menuItems={explore} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}>
                        <div className="">
                            <div className="text-white mb-4">
                                <span>Design By</span>
                                <h5>Mohammad Emon</h5>
                                <h6>Email: programmeremon@gmail.com</h6>
                            </div>

                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center py-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;