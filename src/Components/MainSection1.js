import React, { useState } from 'react';
import '../App.css';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './MainSection1.css';

const MainSection1 = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const lengt = slides.length;

    const nextSlide = () => {
        setCurrent(current === lengt - 1 ? 0 : current + 1);
    };

    const prevSlide =() => {
        setCurrent(current === 0 ? lengt -1 : current -1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <section className='slider'>
            <div className='header'>
                <h2 className='h2-text'>In this section we have a 
                Image Slider wich Has a
                simple logic and easy to write,no big deal!
                Hope you enjoy it!
                </h2>
            </div>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.image} alt='nature' className='image'/>)}
                </div>
            ) 
        })}
        </section>
    );
};
export default MainSection1
