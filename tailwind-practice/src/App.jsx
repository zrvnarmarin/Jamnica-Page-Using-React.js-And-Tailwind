import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OffersGrid from './components/OffersGrid'
import WaterBlessings from './components/WaterBlessings'
import Specials from './components/Specials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OffersGrid />
      <WaterBlessings />
      <Specials />
    </div>
  )
}

export default App
