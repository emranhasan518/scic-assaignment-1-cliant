import React from 'react';
import Previous from '../../Previous/Previous';
import Banner from '../Banner/Banner';
import Carosol from '../Carosol/Carosol';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Carosol></Carosol>
            <Previous></Previous>
        </div>
    );
};

export default Home;