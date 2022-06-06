import React from 'react'

import banner from '../assets/food.jpeg'
import {Link} from 'react-router-dom'

import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${banner})`}}>
        <div className="headerContainer">
            <h1 style={{ fontWeight: "bold" }}>Food Mello</h1>
            <p>DESI FOOD AT A CLICK</p>
            <Link to="/menu">
                <button>Explore Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home