import React from 'react'
import HeroSection from '../Components/HeroSection'
import BestSeller from '../Components/BestSeller'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import Statistics from '../Components/Statistics'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <BestSeller/>
        <Statistics/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default LandingPage