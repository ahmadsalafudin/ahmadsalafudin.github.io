import React from 'react'
import './testimonial.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda eius reprehenderit asperiores enim pariatur debitis repudiandae provident sed at? Iusto nostrum omnis non aspernatur. Labore hic adipisci incidunt atque?'
  },
  {
    avatar: AVTR2,
    name: 'Kania Show',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda eius reprehenderit asperiores enim pariatur debitis repudiandae provident sed at? Iusto nostrum omnis non aspernatur. Labore hic adipisci incidunt atque?'
  },
  {
    avatar: AVTR3,
    name: 'Lera Show',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda eius reprehenderit asperiores enim pariatur debitis repudiandae provident sed at? Iusto nostrum omnis non aspernatur. Labore hic adipisci incidunt atque?'
  },
  {
    avatar: AVTR4,
    name: 'Zidan Show',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda eius reprehenderit asperiores enim pariatur debitis repudiandae provident sed at? Iusto nostrum omnis non aspernatur. Labore hic adipisci incidunt atque?'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial_container"
        modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial