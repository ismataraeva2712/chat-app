import React from 'react';
import Banner from './Banner';
import Download from './Download';
import Footer from './Footer';
import Reviews from './Reviews';
import Services from './Services';

const Homes = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Download></Download>
            <Footer></Footer>
        </div>
    );
};

export default Homes;