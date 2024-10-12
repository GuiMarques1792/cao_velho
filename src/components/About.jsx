import React from 'react';
import logo from '../assets/cao_velho_logo.jpg'; 
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import example_1 from "../assets/examples/example_1.png";
import example_2 from "../assets/examples/example_2.png";
import example_3 from "../assets/examples/example_3.png";
import example_4 from "../assets/examples/example_4.png";
import example_5 from "../assets/examples/example_5.png";

const About = () => {
 
  // Sample staff members (replace with actual staff data)


  return (
    <div className="flex justify-center items-start bg-[#0E1213]">
      {/* Left Side: Logo */}
      <div className="flex-1 flex justify-center">
        <img src={logo} alt="Company Logo" className="max-w-full h-auto" />
      </div>

      {/* Right Side */}
      <div className="container">
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={ 'auto' }
            coverflowEffect={
                {
                    rotate:0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            pagination={{el:'swiper-pagination',clickable:true}}
            navigation={{
                nextEl:'swiper-button-next',
                prevEl:'swiper-button-next',
                clickable:true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
        >
            <SwiperSlide>
                <img src={example_1} alt="ex1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={example_2} alt="ex2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={example_3} alt="ex3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={example_4} alt="ex4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={example_5} alt="ex5" />
            </SwiperSlide>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-foward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination">

                </div>
            </div>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
