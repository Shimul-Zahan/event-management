import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Service from './Service';

const Services = () => {

    const services = useLoaderData();
    // console.log(services)
    

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20 px-2'>
                {
                    services?.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    )
}

export default Services