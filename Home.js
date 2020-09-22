import React from 'react'
import { Link } from 'react-router-dom'
import SportPic from '../images/home-sport.jpg'
import ElegancePic from '../images/home-elegance.jpg'
import CasualPic from '../images/home-casual.jpg'
import BeachPic from '../images/home-beach.jpg'

const Home = () => {
  const linkStyles = {
    textDecoration: 'none',
    color: '#000',
  }
  return (
    <div className='home__container'>
      <div className='home__imageContainer'>
        <img className='home__images' src={SportPic} alt='sport' />
        <div className='home__description'>
          <Link to='/products' style={linkStyles}>
            <h3 className='home__collection'>SPORTS COLLECTION</h3>
            <h4>BUY NOW!</h4>
          </Link>
        </div>
      </div>
      <div className='home__imageContainer'>
        <img className='home__images' src={BeachPic} alt='beach' />
        <div className='home__description'>
          <Link to='/products' style={linkStyles}>
            <h3 className='home__collection'>BEACH COLLECTION</h3>
            <h4>BUY NOW!</h4>
          </Link>
        </div>
      </div>

      <div className='home__imageContainer'>
        <img className='home__images' src={CasualPic} alt='casual' />
        <div className='home__description'>
          <Link to='/products' style={linkStyles}>
            <h3 className='home__collection'>CASUAL COLLECTION</h3>
            <h4>BUY NOW!</h4>
          </Link>
        </div>
      </div>
      <div className='home__imageContainer'>
        <img className='home__images' src={ElegancePic} alt='elegance' />
        <div className='home__description'>
          <Link to='/products' style={linkStyles}>
            <h3 className='home__collection'>ELEGANCE COLLECTION</h3>
            <h4>BUY NOW!</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
