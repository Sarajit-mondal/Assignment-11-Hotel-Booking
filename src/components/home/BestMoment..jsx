
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import moment from 'moment';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';

export default function BestMoment() {
const [allMoment,setAllMoment] = useState([])
const [imagePreview,setImagePreview] = useState()
const [image,setImage] = useState()


const handleImage = (image) =>{
  setImage(image)
  setImagePreview(URL.createObjectURL(image))
}

// imageUpload
const imageUpload = async() =>{
 try {
  if(image){
    const formData = new FormData();
    formData.append('image',image)

   const {data} =await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`,
   formData
   )
   console.log(data.data.display_url)
   const momentImage = data.data.display_url

   //set database 
  
   const momentData = {
      date : moment().format('YYYY-MM-DD'),
      image : momentImage,
      timeStamp : Date.now()
   }
   await axios.post(`${import.meta.env.VITE_API_URL}/bestMoment`,momentData)

  }
 } catch (error) {
  console.log(error)
 }
}

console.log(allMoment)


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
      <div className='flex flex-col md:flex-row'>
        {/* image upload */}
        <div className=' w-60'>
           <form action="">
           <input type="file" name="file" id="" onChange={(e)=>handleImage(e.target.files[0])}/>
           <button type="button" value="Upload" className='border-2 rounded-xl my-2 px-2 ' onClick={imageUpload}>Upload</button>
           </form>
           <img src={imagePreview} alt="" className='w-full max-h-40  my-5' />
        </div>
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
  
    </div>
  );
}

