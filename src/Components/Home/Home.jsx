import React from 'react'
import Banner from './Banner'
import Services from './Services'
import WhyCHooseUs from './WhyCHooseUs'
import FactsFigures from './FactsFigures/FactsFigures'
import Caurosel from './Caurosel/Caurosel'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='mt-[510px] lg:mt-[760px] py-10 lg:py-10'>
                <Caurosel />
                <h1 className='text-5xl font-bold text-center mb-20'>Our Services</h1>
                <Services />
            </div>
            <WhyCHooseUs />
            <FactsFigures />
            {/* <Caurosel /> */}
        </div>
    )
}

export default Home