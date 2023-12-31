import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, image, title, description, quality, price, discount } = service;

    return (
        <div className='w-96 md:w-80 lg:w-[450px] relative'>
            <div className="card w-96 md:w-80 lg:w-[450px] lg:h-[500px]">
                <div className='relative'>
                    <figure>
                        <img src={image} alt="image" className='w-full h-80 rounded-tl-[50px] rounded-br-[40px]' />
                    </figure>
                    <h1 className='text-xl border-2 font-bold bg-opacity-60 bg-blend-overlay py-2 absolute top-2 left-2 px-4 text-yellow-500 rounded-lg shadow-xl rounded-tl-[50px]'>{quality}</h1>
                    {
                        discount && <h1 className='text-sm font-bold absolute top-0 right-0 bg-yellow-500 h-10 w-10 flex justify-center items-center rounded-full'>{ discount }%</h1>
                    }
                    <Link to={`/event-details/${id}`} className='absolute bottom-0 px-5 py-3 right-0 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-orange-500 rounded-tl-3xl rounded-br-[40px] transition-all duration-[250ms] ease-out hover:bg-green-400'>
                        <BsArrowRight className='text-5xl font-bold' />
                    </Link>
                </div>
                <div className="space-y-2 lg:space-y-4 px-2 mb-2">
                    <div className='flex justify-between gap-2'>
                        <h2 className="text-lg lg:text-xl font-bold mt-4">{title}</h2>
                        <h2 className="text-lg lg:text-xl font-bold mt-4">${price}</h2>
                    </div>
                    <p className='text-small font-thin lg:text-lg font-base'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Service