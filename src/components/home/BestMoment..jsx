
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';

export default function BestMoment() {
const [allMoment,setAllMoment] = useState([])


useEffect(()=>{
axios.get(`${import.meta.env.VITE_API_URL}/bestMoment/sort`)
.then(res =>{
    setAllMoment(res.data)
})
.catch(error => {
    console.log(error.code || error.message)
})
},[])

  return (
    <div data-aos="fade-right" className='mb-20'>
      <h2 className='text-4xl font-bold my-10'>Share your Best Moment</h2>
      <Swiper
        effect={'coverflow'}
        slidesPerView ={4}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
     
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
       {
        allMoment.map((moment,inx) =>  <SwiperSlide key={inx}>
            <img className ="w-full  h-56" src={moment.image} />
          </SwiperSlide>)
       }
       
      </Swiper>
    </div>
  );
}

