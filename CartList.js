import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const CartList = ({ cartItems, setCartItems }) => {
  const removeFromCart = (id) => {
    const filtered = cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(filtered)
  }

  const pay = () => {
    setCartItems([])
  }
  const cartPrices = cartItems.map((cartItem) => cartItem.price)
  const cartTotal = cartPrices.reduce((a, b) => a + b, 0)

  return (
    <div className='cartList__container'>
      <h3 className='cartList__title'>Your Cart</h3>
      <h4 className='cartList__total'>{`Total: $${cartTotal}.00 USD`}</h4>
      <Button
        className='cartList__pay'
        variant='contained'
        color='primary'
        onClick={pay}
      >
        {`Pay $${cartTotal}`}
      </Button>
      <h5 className='cartList__empty'>
        {cartItems.length === 0 ? (
          <div>
            <h5>Your cart is empty </h5>
            <h5>
              To add products click
              <Link to='/products'>
                <span className='cartList__here'>here</span>{' '}
              </Link>
            </h5>
          </div>
        ) : (
          ''
        )}
      </h5>

      <ul className='cartListproducts__byCollection'>
        {cartItems.map((cartItem) => (
          <li className='products__item' key={cartItem.id}>
            <img
              className='cartListproducts__images'
              src={cartItem.image}
              alt={`cart item ${cartItem.id}`}
            />
            <Button
              className='cartListproducts__button'
              variant='contained'
              color='secondary'
              disableElevation
              onClick={() => removeFromCart(cartItem.id)}
            >
              {`remove from cart`}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartList
