import React from 'react'
import "./testomonial.scss"
import {Data} from "../testomonial/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';

const testomonial = () => {
  return (
    <section className="testomonial_section">
    <h2 className="section__title">My Client Say </h2>
    <span className="section__subtitle">Testimonial </span>

    <Swiper className="testomonial__container"
    loop={true}
    grabCursor={true}
    spaceBetween={24}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    }}
    modules={[Pagination]}>
      {Data.map(({id,image,title,discription})  => {
      return (
        <SwiperSlide className="testomonial__card" key={id}>
          <img src={image} alt="" className="testomonial__image" />
          <h3 className="testomonial__name">{title}</h3>
          <p className="testomonial__description">{discription}</p>
        </SwiperSlide>
      )
      })}
    </Swiper>
    </section>
  );
}

export default testomonial
