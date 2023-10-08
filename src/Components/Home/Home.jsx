import React from 'react'
import Banner from './Banner'
import Services from './Services'
import WhyCHooseUs from './WhyCHooseUs'
import FactsFigures from './FactsFigures/FactsFigures'
import LatestDeal from './LatestDeal'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    AOS.init({
        duration: "500"
    });

    return (
        <div>
            <div >
                <Banner />
            </div>
            <div className='py-10 lg:py-10' data-aos="fade-up-right">
                <h1 className='text-5xl font-bold text-center mb-20'>Our Services</h1>
                <Services />
            </div>
            <div data-aos="fade-up-right">
                <LatestDeal />
            </div>
            <div data-aos="fade-up-right">
                <WhyCHooseUs />
            </div>
            <div data-aos="fade-up-right">
                <FactsFigures />
            </div>
        </div>
    )
}

export default Home