import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/user1.png'
import AVTR2 from '../../assets/user1.png'
import AVTR3 from '../../assets/user1.png'
import AVTR4 from '../../assets/user1.png'

// import Swiper core and required modules 
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'This was a very good and excellent service that Cefnar Auyon provided'
    },
    {
        avatar: AVTR2,
        name: 'Tina Snow',
        review: 'This was a very good and excellent service that Cefnar Auyon provided'
    },
    {
        avatar: AVTR3,
        name: 'Tina Snow',
        review: 'This was a very good and excellent service that Cefnar Auyon provided'
    },
    {
        avatar: AVTR4,
        name: 'Tina Snow',
        review: 'This was a very good and excellent service that Cefnar Auyon provided'
    },




]






const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                 modules={[Pagination]}
                 spaceBetween={40}
                 slidesPerView={1}
                 pagination={{ clickable: true }}
            
            
            
            >

           


                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar one" />
                     
                    </div>
                    <h5 className="client__name">Carlos Soto</h5>
                    <small className="client__review">
                        this is a review of an excellent project and support i receivved 
                        from Cefnar Auyon
                    </small>

                </SwiperSlide>

                {
                         data.map (({avatar, name, review}, index )=> {
                            return (
                                <SwiperSlide key={index}  className="testimonial">
                                    <div className="client__avatar">
                                        <img src={avatar} alt={name} />
                                    
                                    </div>
                                    <h5 className="client__name">{name}</h5>
                                    <small className="client__review">
                                        {review}
                                    </small>
        
                                </SwiperSlide>





                            )


                         })
                            




                }




            </Swiper>



        </section >
    )
}

export default Testimonials