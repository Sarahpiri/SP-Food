import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import PopularFoods from './PapularFoods/PopularFoods'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'

const Home = () => {
  return (
    <div className='overflow-hidden'>
     <Hero />
     <Feature />
     <PopularFoods />
     <Delivery />
     <Team />
     <Reservation />
    </div>
  )
}

export default Home
