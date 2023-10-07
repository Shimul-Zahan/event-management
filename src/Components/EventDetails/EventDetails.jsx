import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { BiPhoneCall } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

const EventDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const clickeEvent = services.find(service => service.id == id);

  return (
      <div className='min-h-[760px] container mx-auto'>
          <div className='relative'>
              <img src={clickeEvent?.image} alt="" className='lg:h-[600px] w-full' />
              <h1 className='text-5xl font-bold absolute bottom-0 py-4 text-center px-2 bg-yellow-500 bg-blend-overlay bg-opacity-50 w-full'>{clickeEvent?.title}</h1>
          </div>
          <p className='text-xl mt-5 text-center font-medium'>{clickeEvent?.long_description}</p>
          <div className='flex justify-center items-center mt-5 gap-10'>
              <Link to='/'>
                  <button className='btn btn-outline bg-yellow-500 px-10'>
                      <span className='text-2xl'><BsArrowLeft /></span>
                      Back to Home</button>
              </Link>
              <Link to='/contact'>
                  <button className='btn btn-outline bg-yellow-500 px-10'>
                      <span className='text-2xl'><BiPhoneCall /></span>
                      Call us now</button>
              </Link>
          </div>
    </div>
  )
}

export default EventDetails