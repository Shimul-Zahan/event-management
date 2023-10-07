import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { BiPhoneCall } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const EventDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const clickeEvent = services.find(service => service.id == id);
    const samePackages = services.filter(service => service.quality == clickeEvent.quality)
    console.log(samePackages)
    // absolute bottom - 0 

    return (
        <div className='min-h-[760px] container mx-auto grid grid-cols-1 lg:grid-cols-3 mb-20 gap-10'>
            <div className=' col-span-2'>
                <div className='relative'>
                    <img src={clickeEvent?.image} alt="" className='lg:h-[600px] w-full' />
                </div>
                <p className='text-xl mt-5 font-medium'>{clickeEvent?.long_description}</p>
            </div>
            <div className='bg-base-100'>
                <div>
                    <div className='flex justify-between mb-10'>
                        <h1 className='text-3xl font-bold py-4 w-full'>{clickeEvent?.title}</h1>
                        <h1 className='text-2xl font-bold text-right text-yellow-500 py-4 w-full'>${clickeEvent?.price}</h1>
                    </div>
                    <h1 className='text-xl font-bold mb-5'>Our Main Focus On Your Event</h1>
                    {
                        clickeEvent.focus.map(item => <h1 className='text-xl font-bold mb-3'><span className='text-green-400 mr-2'>►</span>{item}</h1>)
                    }
                </div>
                <div>
                    <h1 className='text-xl font-bold text-yellow-400 mb-10'>Package: {clickeEvent?.quality}</h1>
                </div>
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
                <div className='mt-10'>
                    <h1 className='text-xl font-bold mb-3'>Your Same Packages</h1>
                    <div className="card w-96 md:w-80 lg:w-[450px] lg:h-[500px]">
                        <div className='relative'>
                            <figure>
                                <img src={samePackages[1]?.image} alt="image" className='w-full h-80 rounded-tr-xl rounded-tl-xl' />
                            </figure>
                            <h1 className='text-xl border-2 font-bold bg-opacity-60 bg-blend-overlay py-2 absolute top-2 left-2 px-2 text-yellow-500 rounded-lg shadow-xl'>{samePackages[1]?.quality}</h1>
                            <Link to={`/event-details/${samePackages[1]?.id}`} className='absolute bottom-0 px-5 py-3 right-0 bg-yellow-500 rounded-tl-3xl transition-all duration-[250ms] ease-out hover:bg-green-400'>
                                <BsArrowRight className='text-5xl font-bold' />
                            </Link>
                        </div>
                        <div className="space-y-4 px-2 mb-2">
                            <div className='flex justify-between gap-2'>
                                <h2 className="text-xl font-bold text-yellow-500 mt-4">{samePackages[1]?.title}</h2>
                                <h2 className="text-xl font-bold mt-4">${samePackages[1]?.price}</h2>
                            </div>
                            <p className='text-base font-medium'>{samePackages[1]?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails