


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
function Banner() {
  return (
    <div className="text-center">
    <Swiper
      navigation={true}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Autoplay, FreeMode, Pagination]}
      loop={true}
       autoplay={{ delay: 7000 }}
      spaceBetween={30}
      className="mySwiper"
    >
     <SwiperSlide>
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #0ea5e933, #54545433),url(https://i.postimg.cc/D0HfySBZ/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tek.jpg)'
    }}>
    </div>
     </SwiperSlide>
     <SwiperSlide>
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #0ea5e933, #54545433),url(https://i.postimg.cc/JhkCY27D/woman-talking-with-hotel-receptionist-lobby.jpg)'
    }}>
    </div>
     </SwiperSlide>
     <SwiperSlide>
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #0ea5e933, #54545433),url(https://img.freepik.com/premium-photo/resort-bed-beautiful-light-effect-wonderful-resort_456341-1007.jpg?w=1060)'
    }}>
    </div>
     </SwiperSlide>
      
    </Swiper>
  </div>
  )
}

export default Banner
