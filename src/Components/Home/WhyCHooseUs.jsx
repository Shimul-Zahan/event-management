import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";


const WhyCHooseUs = () => {

    const [choose, setChoose] = useState([]);
    useEffect(() => {
        fetch('/WhyCohooseUs.json')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])

    return (
        <div className='container mx-auto mb-20'>
            <h1 className='text-5xl text-center font-bold mb-20'>Why Choose Us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start'>
                {
                    choose?.map((item, index) => <div className={`${index % 2 === 1 ? 'border-l-2' : ''} flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4`}>
                        <img src={item?.image} className='h-36 w-36 rounded-full'/>
                        <div>
                            <h1 className='text-xl lg:text-2xl font-bold mb-2'>{item?.title}</h1>
                            <p className='text-sm lg:text-lg font-thin'>{item?.description.slice(0, 299) }</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
// ${ index !== 5 ? 'border-b-2' : '' }

export default WhyCHooseUs