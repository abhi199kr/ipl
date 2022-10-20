import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swipe = () => {
  return (
    <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

        breakpoints={{
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  }}
      >
  {/* breakpoints={{
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  }} */}
    <SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
    <SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
    <SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
    <SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
    <SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
<SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
<SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
<SwiperSlide> <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white w-64 h-fit">
    <a href="#!" className='bg-purple-600'>
      <img className="rounded-t-lg h-52 hover:scale-105 bg-purple-900" src="https://scores.iplt20.com/ipl/playerimages/10.png"

       alt=""/>
    </a>
    <div className="p-6 hover:bg-black hover:text-white text-center">
    <h1 className='font-bold'>Yuzvendra Chahal</h1>
    <h1 className='font-bold text-2xl'>27</h1>
    <p className='font-bold'>WICKETS</p>
    <p className='pt-10 font-bold'>View full list</p>
      
    </div>
  </div>
</div></SwiperSlide>
  </Swiper>
  )
}

export default Swipe
