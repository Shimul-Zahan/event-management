import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


const WhyCHooseUs = () => {
    return (
        <div className='py-20'>
            <h1 className='text-7xl text-center font-bold mb-20'>Why Choose Us</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide className=''>
                    <div className="bg-yellow-500 w-72 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/311820-P8PQDL-893.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Hackathon</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-yellow-500 w-72 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/311820-P8PQDL-893.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Hackathon</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-yellow-500 w-72 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/311820-P8PQDL-893.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Hackathon</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-yellow-500 w-72 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/311820-P8PQDL-893.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Hackathon</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-yellow-500 w-72 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/311820-P8PQDL-893.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Hackathon</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default WhyCHooseUs