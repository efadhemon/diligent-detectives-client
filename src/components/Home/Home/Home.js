import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import Testimonials from '../Testimonials/Testimonials';
import SuccessCases from '../SuccessCases/SuccessCases';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <div className="section-break"></div>
            <Services></Services>
            <About></About>
            <SuccessCases></SuccessCases>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;