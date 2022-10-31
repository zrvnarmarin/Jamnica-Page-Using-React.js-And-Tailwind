import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OffersGrid from './components/OffersGrid'
import WaterBlessings from './components/WaterBlessings'
import Specials from './components/Specials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OffersGrid />
      <WaterBlessings />
      <Specials />
      <Footer />
    </div>
  )
}

export default App
