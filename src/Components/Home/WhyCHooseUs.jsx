import React from 'react'
import Marquee from "react-fast-marquee";


const WhyCHooseUs = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-7xl text-center font-bold mb-20'>Why Choose Us</h1>
            <Marquee>
                <div className="carousel carousel-end rounded-box space-x-20 lg:flex">
                    <div className="carousel-item bg-yellow-500 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/311820-P8PQDL-893.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Hackathon</h1>
                    </div>
                    <div className="carousel-item bg-yellow-500 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/ralston-smith-zc9pWsPZd4Y-unsplash.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-white left-2">Conference</h1>
                    </div>
                    <div className="carousel-item bg-yellow-500 p-2 rounded-lg relative cursor-pointer">
                        <img src="/public/Images/150Z_2208.w017.n001.10A.p18.10.jpg" alt="Drink" className='w-72 h-80 rounded-lg' />
                        <h1 className="text-xl font-bold text-center absolute bottom-5 pl-2 text-black left-2">E-Gaming</h1>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default WhyCHooseUs