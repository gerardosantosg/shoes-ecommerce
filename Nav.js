import React from 'react'
import ShopCart from './ShopCart'
import Favs from './Favs'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Nav = ({ cartItems, favItems }) => {
  return (
    <nav className='nav__nav'>
      <div className='nav__logo'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h2 className='nav__logoText'>
            Nice Shoes{' '}
            <span role='img' aria-label='bag'>
              🛍️
            </span>
          </h2>
        </Link>
      </div>
      <div className='nav__right'>
        <Link to='/products' style={{ textDecoration: 'none' }}>
          <Button size='large'>Products</Button>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <Button size='large'>Contact</Button>
        </Link>
        <Link to='/favorites' style={{ textDecoration: 'none' }}>
          <Favs favItems={favItems} />
        </Link>
        <Link to='/cart' style={{ textDecoration: 'none' }}>
          <ShopCart cartItems={cartItems} />
        </Link>
      </div>
    </nav>
  )
}

export default Nav
