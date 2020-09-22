import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'

// import images
import SportsPic1 from '../images/sport1.jpg'
import SportsPic2 from '../images/sport2.jpg'
import BeachPic1 from '../images/beach1.jpg'
import BeachPic2 from '../images/beach2.jpg'
import CasualPic1 from '../images/casual1.jpg'
import CasualPic2 from '../images/casual2.jpg'
import ElegancePic1 from '../images/elegant1.jpg'
import ElegancePic2 from '../images/elegant2.jpg'

const Products = ({ favItems, setFavItems, cartItems, setCartItems }) => {
  const sportItems = [
    { image: SportsPic1, price: 120, id: Math.random() },
    { image: SportsPic2, price: 100, id: Math.random() },
  ]
  const beachItems = [
    { image: BeachPic1, price: 90, id: Math.random() },
    { image: BeachPic2, price: 70, id: Math.random() },
  ]
  const casualItems = [
    { image: CasualPic1, price: 80, id: Math.random() },
    { image: CasualPic2, price: 110, id: Math.random() },
  ]
  const eleganceItems = [
    { image: ElegancePic1, price: 130, id: Math.random() },
    { image: ElegancePic2, price: 140, id: Math.random() },
  ]

  const addToCart = (image, price, id) => {
    setCartItems((prevItems) => {
      return [
        ...prevItems,
        {
          image: image,
          price: price,
          id: id,
        },
      ]
    })
  }

  const addToFavs = (image, price, id) => {
    setFavItems((prevItems) => {
      for (let prevItem of prevItems) {
        if (prevItem.price === price) {
          return [...prevItems]
        }
      }

      return [
        ...prevItems,
        {
          image: image,
          price: price,
          id: id,
        },
      ]
    })
  }

  return (
    <div className='products__container'>
      <h2 className='products__title'>Our Products</h2>
      <div className='products__collectionContainer'>
        <h3 className='products__collectionTitle'>Sports Collection</h3>
        <ul className='products__byCollection'>
          {sportItems.map((sportItem) => (
            <li className='products__item' key={sportItem.id}>
              <img
                className='products__images'
                src={sportItem.image}
                alt={`sport ${sportItem.id}`}
              />
              <Button
                className='products__button'
                variant='contained'
                color='secondary'
                disableElevation
                onClick={() =>
                  addToCart(sportItem.image, sportItem.price, sportItem.id)
                }
              >
                {`add to cart $${sportItem.price}`}
              </Button>
              <IconButton
                aria-label='favorite'
                color='secondary'
                className='products__fav'
                onClick={() =>
                  addToFavs(sportItem.image, sportItem.price, sportItem.id)
                }
              >
                <FavoriteIcon style={{ fontSize: '30' }} />
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      <div className='products__collectionContainer'>
        <h3 className='products__collectionTitle'>Beach Collection</h3>
        <ul className='products__byCollection'>
          {beachItems.map((beachItem) => (
            <li className='products__item' key={beachItem.id}>
              <img
                className='products__images'
                src={beachItem.image}
                alt={`beach ${beachItem.id}`}
              />
              <Button
                className='products__button'
                variant='contained'
                color='secondary'
                disableElevation
                onClick={() =>
                  addToCart(beachItem.image, beachItem.price, beachItem.id)
                }
              >
                {`add to cart $${beachItem.price}`}
              </Button>
              <IconButton
                aria-label='favorite'
                color='secondary'
                className='products__fav'
                onClick={() =>
                  addToFavs(beachItem.image, beachItem.price, beachItem.id)
                }
              >
                <FavoriteIcon style={{ fontSize: '30' }} />
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      <div className='products__collectionContainer'>
        <h3 className='products__collectionTitle'>Casual Collection</h3>
        <ul className='products__byCollection'>
          {casualItems.map((casualItem) => (
            <li className='products__item' key={casualItem.id}>
              <img
                className='products__images'
                src={casualItem.image}
                alt={`casual ${casualItem.id}`}
              />
              <Button
                className='products__button'
                variant='contained'
                color='secondary'
                disableElevation
                onClick={() =>
                  addToCart(casualItem.image, casualItem.price, casualItem.id)
                }
              >
                {`add to cart $${casualItem.price}`}
              </Button>
              <IconButton
                aria-label='favorite'
                color='secondary'
                className='products__fav'
                onClick={() =>
                  addToFavs(casualItem.image, casualItem.price, casualItem.id)
                }
              >
                <FavoriteIcon style={{ fontSize: '30' }} />
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      <div className='products__collectionContainer'>
        <h3 className='products__collectionTitle'>Elegance Collection</h3>
        <ul className='products__byCollection'>
          {eleganceItems.map((eleganceItem) => (
            <li className='products__item' key={eleganceItem.id}>
              <img
                className='products__images'
                src={eleganceItem.image}
                alt={`elegance ${eleganceItem.id}`}
              />
              <Button
                className='products__button'
                variant='contained'
                color='secondary'
                disableElevation
                onClick={() =>
                  addToCart(
                    eleganceItem.image,
                    eleganceItem.price,
                    eleganceItem.id
                  )
                }
              >
                {`add to cart $${eleganceItem.price}`}
              </Button>
              <IconButton
                aria-label='favorite'
                color='secondary'
                className='products__fav'
                onClick={() =>
                  addToFavs(
                    eleganceItem.image,
                    eleganceItem.price,
                    eleganceItem.id
                  )
                }
              >
                <FavoriteIcon style={{ fontSize: '30' }} />
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products
