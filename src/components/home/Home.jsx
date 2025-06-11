import React from 'react'
import HeroSection from './HeroSection'
import Heder from './Heder'
import Products from '../products/Products'
import { Reviews } from '../review/Review'
import Contact from '../contact/Contact'
function Home() {
  return (
    <div>
        <Heder/>
        <HeroSection/>
        <Products/>
        <Reviews/>
        <Contact/>
    </div>
  )
}

export default Home