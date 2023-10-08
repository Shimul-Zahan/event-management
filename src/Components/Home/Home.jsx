import React from 'react'
import Banner from './Banner'
import Services from './Services'
import WhyCHooseUs from './WhyCHooseUs'
import FactsFigures from './FactsFigures/FactsFigures'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='mt-[510px] lg:mt-[760px] py-10 lg:py-10'>
                <h1 className='text-5xl font-bold text-center mb-20'>Our Services</h1>
                <Services />
            </div>
            <WhyCHooseUs />
            <FactsFigures/>
        </div>
    )
}

export default Home