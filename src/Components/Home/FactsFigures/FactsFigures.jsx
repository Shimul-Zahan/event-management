import React from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const FactsFigures = () => {
    return (
        <div className='container mx-auto my-40'>
            <div className='flex justify-center items-center relative'>
                <hr className='w-3/5 bg-black h-[4px]' />
                <h1 className="text-5xl font-bold absolute -top-7 bg-white px-4">Facts & Figures</h1>
            </div>
            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-4 my-20 md:my-32 gap-16'>
                <div className='flex justify-center items-center flex-col space-y-2 md:space-y-4'>
                    <img src="/icon/customer.png" className='h-28 w-28' />
                    <p className='text-3xl md:text-7xl font-thin text-gray-400'>79690</p>
                    {/* <CountUp sttext-xl md:art={100} end={5970} delay={0} duration={5}></CountUp> */}
                    <h1 className='text-3xl font-thin text-gray-700'>Clients</h1>
                </div>
                <div className='flex justify-center items-center flex-col space-y-4'>
                    <img src="/icon/pancake.png" className='h-28 w-28' />
                    <p className=' text-3xl md:text-7xl font-thin text-gray-400'>16</p>
                    <h1 className='ttext-xl md:ext-3xl font-thin text-gray-700'>Branch</h1>
                </div>
                <div className='flex justify-center items-center flex-col space-y-4'>
                    <img src="/icon/rocket.png" className='h-28 w-28' />
                    <p className='text-3xl md:text-7xl font-thin text-gray-400'>66799</p>
                    <h1 className='text-xl md:text-3xl font-thin text-gray-700'>Total Projects</h1>
                </div>
                <div className='flex justify-center items-center flex-col space-y-4'>
                    <img src="/icon/good-feedback.png" className='h-28 w-28' />
                    <p className='text-3xl md:text-7xl font-thin text-gray-400'>66776</p>
                    <h1 className='text-xl md:text-3xl font-thin text-gray-700'>Successfull Projects</h1>
                </div>
            </div>
        </div>
    )
}

export default FactsFigures