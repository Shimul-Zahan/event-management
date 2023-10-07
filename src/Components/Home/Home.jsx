import React from 'react'
import Banner from './Banner'
import Services from './Services'
import WhyCHooseUs from './WhyCHooseUs'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='mt-[510px] lg:mt-[760px] py-10 lg:py-10'>
                <h1 className='text-7xl font-bold text-[#0F0D27] text-center mb-20'>Our Services</h1>
                <Services />
            </div>
            <WhyCHooseUs />
        </div>
    )
}

export default Home