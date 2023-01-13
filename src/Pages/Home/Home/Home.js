import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCard/InfoCards';
import LastBanner from '../LastBanner/LastBanner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

import Services from '../Services/Services';
import Testimonal from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
        <LastBanner></LastBanner>
        <MakeAppointment></MakeAppointment>
        <Testimonal></Testimonal>
        <Contact></Contact>
        </div>
    );
};

export default Home;