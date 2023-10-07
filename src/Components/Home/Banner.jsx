import React from 'react'
import BgImage from '../../../public/Images/full-shot-gamer-sitting-chair.jpg'
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className='max-h-screen absolute w-full top-0 -z-10 bg-black bg-blend-overlay bg-opacity-80'
            style={{
                backgroundImage: `url(${BgImage})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className='container mx-auto flex justify-center flex-col h-screen items-center space-y-10 lg:mt-20'>
                <h1 className='text-5xl text-center md:text-7xl font-bolder text-yellow-500'>Tech and Gaming Events</h1>
                <p className='text-white font-medium text-xl text-center md:max-w-[750px]'>At <span className='text-yellow-500 font-bold'>AlgoWebBot</span>, we are passionate about creating unforgettable moments in the world of technology and gaming. Whether you're an avid gamer, a tech enthusiast, or a visionary developer, we've got something extraordinary for you.</p>

                <Marquee>
                    <div className="carousel carousel-end rounded-box space-x-20 hidden lg:flex">
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
                <div className='pb-5'>
                    <button className='btn bg-yellow-500 capitalize px-8'>Call Us Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner