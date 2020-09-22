import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const FavList = ({ favItems, setFavItems }) => {
  const removeFromFav = (id) => {
    const filtered = favItems.filter((favItem) => favItem.id !== id)
    setFavItems(filtered)
  }

  return (
    <div className='favList__container'>
      <h3 className='favList__title'>Your Favorites</h3>
      <div className='cartList__empty'>
        {favItems.length === 0 ? (
          <div>
            <h5>Your favorites list is empty </h5>
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
      </div>

      <ul className='cartListproducts__byCollection'>
        {favItems.map((favItem) => (
          <li className='products__item' key={favItem.id}>
            <img
              className='cartListproducts__images'
              src={favItem.image}
              alt={`cart item ${favItem.id}`}
            />
            <Button
              className='cartListproducts__button'
              variant='contained'
              color='secondary'
              disableElevation
              onClick={() => removeFromFav(favItem.id)}
            >
              {`remove from favs`}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavList
