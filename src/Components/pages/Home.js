import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import MainSection1 from '../MainSection1';
import { SliderData } from '../SliderData';
import Footer from '../Footer';

function Home () {
    return(
        <>
        <HeroSection />
        <MainSection1 slides={SliderData} />
        <Footer />
        </>
    )
}

export default Home;