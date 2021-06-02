import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import Testimonials from '../Testimonials/Testimonials';
import SuccessCases from '../SuccessCases/SuccessCases';
import SubscribeBox from '../SubscribeBox/SubscribeBox';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <main className="home">
            <MainHeader></MainHeader>
            <Services></Services>
            <About></About>
            <OurTeam></OurTeam>
            <SuccessCases></SuccessCases>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <SubscribeBox></SubscribeBox>
            <Footer></Footer>
        </main>
    );
};

export default Home;