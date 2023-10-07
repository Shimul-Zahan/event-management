import React from 'react'
import Banner from './Banner'
import Services from './Services'
import WhyCHooseUs from './WhyCHooseUs'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='mt-[510px] lg:mt-[800px]'>
                <h1 className='text-7xl font-bold text-yellow-500 text-center my-20'>Our Services</h1>
                <Services />
            </div>
            <WhyCHooseUs />
        </div>
    )
}

export default Home