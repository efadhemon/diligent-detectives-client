import React, { useEffect, useState } from 'react';
import './MainHeader.css'
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MainHeader = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    }, []);
    
    const handleBackToTop = () =>{
        window.scrollTo(500, 0);
    }

    return (
        <section className="main-header">
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <button className={isVisible ? "back-to-top" : "back-to-top d-none"} onClick={handleBackToTop}title="Back To Top"><FontAwesomeIcon icon={faArrowUp} /></button>
        </section>
    );
};

export default MainHeader;