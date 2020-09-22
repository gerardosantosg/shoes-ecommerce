import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import FavList from './components/FavList'
import CartList from './components/CartList'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [favItems, setFavItems] = useState([])

  return (
    <Router>
      <div className='App'>
        <Nav cartItems={cartItems} favItems={favItems} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path='/products'
            render={(props) => (
              <Products
                {...props}
                favItems={favItems}
                setFavItems={setFavItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            )}
          />

          <Route path='/contact' component={Contact} />
          <Route
            path='/favorites'
            render={(props) => (
              <FavList
                {...props}
                favItems={favItems}
                setFavItems={setFavItems}
              />
            )}
          />
          <Route
            path='/cart'
            render={(props) => (
              <CartList
                {...props}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
