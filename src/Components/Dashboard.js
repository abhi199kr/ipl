import React from 'react'
import Carousel from './Carousel'
import Leader from './Leader'
import News from './News'
import Sponsor from './Sponsor'
import Swipe from './Swipe'

const Dashboard = () => {
  return (
    <div className='bg-gray-100'>
      <Carousel/>
      <News/>
      <Leader/>
      <Sponsor/>
      <Swipe/>
    </div>
  )
}

export default Dashboard
