


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
function Banner() {
  return (
    <div className="text-center z-0">
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
     <SwiperSlide className="z-0 relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #0ea5e933, #54545433),url(https://i.postimg.cc/D0HfySBZ/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tek.jpg)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center font-bold text-skyBlue-300 space-y-8">
      <h2 className="text-4xl ">Welcome to Out Peaceful Hotel</h2>
      <p className="text-xl">We are delighted to have you as our guest and are committed to providing you with a comfortable and memorable stay</p>
    </div>
     </SwiperSlide>
     <SwiperSlide className="relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #0ea5e933, #54545433),url(https://i.postimg.cc/JhkCY27D/woman-talking-with-hotel-receptionist-lobby.jpg)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center font-bold text-skyBlue-300 space-y-8">
      <h2 className="text-4xl ">Welcome to Out Peaceful Hotel</h2>
      <p className="text-xl">We are delighted to have you as our guest and are committed to providing you with a comfortable and memorable stay</p>
    </div>
     </SwiperSlide>
     <SwiperSlide className="relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #0ea5e933, #54545433),url(https://img.freepik.com/premium-photo/resort-bed-beautiful-light-effect-wonderful-resort_456341-1007.jpg?w=1060)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center font-bold text-skyBlue-300 space-y-8">
      <h2 className="text-4xl ">Welcome to Out Peaceful Hotel</h2>
      <p className="text-xl">We are delighted to have you as our guest and are committed to providing you with a comfortable and memorable stay</p>
    </div>
     </SwiperSlide>
      
    </Swiper>
  </div>
  )
}

export default Banner
