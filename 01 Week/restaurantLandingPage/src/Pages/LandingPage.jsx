import React from 'react'
import HeroSection from '../Components/HeroSection'
import BestSeller from '../Components/BestSeller'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <BestSeller/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default LandingPage