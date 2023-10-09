import React from 'react'
import { Link } from 'react-router-dom'

const LatestDeal = () => {
    return (
        <div className='container mx-auto my-10 md:my-20 p-2'>
            <h1 className='text-3xl md:text-5xl font-bold mb-10 text-center'>Get Your Latest Deal</h1>
            <div className='flex justify-start flex-col-reverse lg:flex-row rounded-xl gap-5 lg:gap-20 bg-base-200'>
                <div className='h-[450px] w-full lg:w-1/2 p-4'>
                    <img src="/cardImage/gaming-tournaments.jpg" className='w-full h-full rounded-xl' />
                </div>
                <div className='bg-gray p-4 flex justify-center flex-col space-y-3 lg:space-y-6 text-center'>
                    <h1 className='text-xl lg:text-3xl font-bold mb-2'>Gaming Conventions and Tournaments</h1>
                    <h1 className='text-2xl lg:text-5xl font-bold mb-2 input input-bordered border-black h-10 lg:h-14'>
                        <span className='rounded-xl'>01 Days</span>
                        <span className='rounded-xl'> 23 Hours</span>
                        <span className='rounded-xl'> 56 Mins</span></h1>
                    <h1 className='text-xl lg:text-2xl font-bold text-center'>Latest Deal From Us <br />Our 33<sup>th</sup> Anniversary</h1>
                    <div className='text-base lg:text-xl font-thin space-y-2'>
                        <p>🎉 Celebrating 33 Years of Innovation with Algowebbot Tech! 🎉</p>
                        <p>🚀 Limited-Time Offer: Unleash the Power of Algowebbot Technology</p>
                        <p>🎁 Exclusive Anniversary Bundles</p>
                    </div>
                    
                    <div className='flex justify-center items-center gap-10'>
                        <h1 className='text-xl lg:text-3xl font-bold text-yellow-500'>33% DISCOUNT</h1>
                        <Link to='/contact'>
                            <button className='btn bg-yellow-500 text-lg font-thin hover:bg-yellow-500'>🎉 Make a Deal</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestDeal