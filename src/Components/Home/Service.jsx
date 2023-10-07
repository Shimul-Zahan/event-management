import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, image, title, description, quality } = service;

    return (
        <div className='w-96 lg:w-[450px] relative'>
            <div className="card w-96 lg:w-[450px] bg-base-100 shadow-xl border-2 lg:h-[570px]">
                <div className='relative'>
                    <figure>
                        <img src={image} alt="image" className='w-full h-80' />
                    </figure>
                    <h1 className='text-xl font-bold bg-yellow-500 bg-opacity-60 bg-blend-overlay py-2 text-center absolute bottom-0 w-full'>{quality}</h1>
                </div>
                <div className="space-y-4 px-2 mb-2">
                    <h2 className="text-2xl font-bold mt-4">{title}</h2>
                    <p className='text-lg font-medium'>{description}</p>
                </div>
            </div>
            <div className=' absolute bottom-0 w-full opacity-0 hover:opacity-80 hover:transition-all'>
                <Link to={`/event-details/${id}`}>
                    <button className='btn w-full h-16 bg-yellow-500'>
                        <BsArrowRight className='text-5xl font-bold' />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Service