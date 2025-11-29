import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image2 from "../../../public/Images/banner-dastresi-1 (1).png"
import Image3 from "../../../public/Images/banner-dastresi-2-min.png"
import Image4 from "../../../public/Images/banner-dastresi-4-min.png"

import './Slider.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="w-full overflow-hidden"> 
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image2} alt="" className="slider-img" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image3} alt="" className="slider-img" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image4} alt="" className="slider-img" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
