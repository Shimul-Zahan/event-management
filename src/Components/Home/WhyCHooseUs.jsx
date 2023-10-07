import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";


const WhyCHooseUs = () => {

    const [choose, setChoose] = useState([]);
    useEffect(() => {
        fetch('/data/WhyCohooseUs.json')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])

    return (
        <div className='mb-10 container mx-auto'>
            <h1 className='text-7xl text-center font-bold mb-20'>Why Choose Us</h1>
            <div>
                {
                    choose?.map(item => <div>
                        <img src={item.image} className='h-40 w-40 rounded-full'/>
                        <div>
                            <h1>{ item.title }</h1>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WhyCHooseUs