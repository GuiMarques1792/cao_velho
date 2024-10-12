import React from 'react';
import logo from '../assets/cao_velho_logo.jpg'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

import staff1 from "../assets/staff/staff.png";
import staff2 from "../assets/staff/staff.png";
import staff3 from "../assets/staff/staff.png";

const About = () => {
  return (
    <div className="flex justify-center items-start bg-[#0E1213] h-screen">
      
      {/* Left Side */}
      <div className="w-1/2 flex justify-center items-center p-10">
        <img src={logo} alt="Company Logo" className="max-w-full h-auto" />
      </div>

      <div className="h-screen border-2 border-white items-center " />

      {/* Right Side */}
      <div className="w-1/2 flex flex-col space-y-20 mt-20">
        
        {/* Top Section*/}
        <div className="flex-1">
          <h1 className="text-white text-center text-4xl mb-8">O NOSSO TRABALHO</h1> 
          <Swiper
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}
             loop={true}
             slidesPerView={3}
             coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
               slideShadows: false,
             }}
             pagination={{ clickable: true }}
             navigation={{
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
               clickable: true,
             }}
             modules={[EffectCoverflow, Pagination, Navigation]}
             className="swiper_container"
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
              <div className="slider-arrow-right">
                <FaChevronLeft size={28} />
              </div>
              <div className="slider-arrow-left">
                <FaChevronRight size={28} />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        {/* Bottom Section */}
        <div>
          <h1 className="text-white text-center text-4xl mb-8">PROFISSIONAIS</h1> 
          <div className="flex justify-around items-center p-10">
            <div className="flex flex-col items-center">
              <img src={staff1} alt="Staff 1" className="w-32 h-32 rounded-full object-cover mb-2" />
              <p className="text-white text-xl">Andre</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={staff2} alt="Staff 2" className="w-32 h-32 rounded-full object-cover mb-2" />
              <p className="text-white text-xl">Staff Name 2</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={staff3} alt="Staff 3" className="w-32 h-32 rounded-full object-cover mb-2" />
              <p className="text-white text-xl">Staff Name 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
