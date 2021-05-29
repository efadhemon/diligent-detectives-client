import React, { useEffect } from 'react';
import './MainHeader.css'
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MainHeader = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                document.querySelector('.back-to-top').style.display = 'block';
            } else {
                document.querySelector('.back-to-top').style.display = 'none';
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
            <button className="back-to-top" onClick={handleBackToTop}title="Back To Top"><FontAwesomeIcon icon={faArrowUp} /></button>
        </section>
    );
};

export default MainHeader;