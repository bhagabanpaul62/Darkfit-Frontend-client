import React from 'react'
import HeroSection from './HeroSection'
import Heder from './Heder'
import Products from '../products/Products'
function Home() {
  return (
    <div>
        <Heder/>
        <HeroSection/>
        <Products/>
    </div>
  )
}

export default Home