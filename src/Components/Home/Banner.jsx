import React from 'react'
import BgImage from '../../../public/Images/full-shot-gamer-sitting-chair.jpg'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='max-h-screen absolute w-full top-0 -z-10 bg-black bg-blend-overlay bg-opacity-80'
            style={{
                backgroundImage: `url(${BgImage})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className='container mx-auto flex justify-center flex-col h-screen items-center space-y-10 lg:mt-20'>
                <Marquee>
                    <h1 className='text-5xl h-24 text-center md:text-7xl font-bolder text-yellow-500'>Tech and Gaming Events</h1>
                </Marquee>
                <p className='text-white font-medium text-xl text-center md:max-w-[750px]'>At <span className='text-yellow-500 font-bold'>AlgoWebBot</span>, we are passionate about creating unforgettable moments in the world of technology and gaming. Whether you're an avid gamer, a tech enthusiast, or a visionary developer, we've got something extraordinary for you.</p>

                <div className='pb-5'>
                    <Link to='/contact'>
                        <button className='btn bg-yellow-500 cursor-pointer capitalize px-8'>Call Us Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner