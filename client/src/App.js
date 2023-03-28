import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
// import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import ProfileScreen from './pages/ProfileScreen'
import ShippingScreen from './pages/ShippingScreen'
import PaymentScreen from './pages/PaymentScreen'
import PlaceOrderScreen from './pages/PlaceOrderScreen'
import OrderScreen from './pages/OrderScreen'
import UserListScreen from './pages/UserListScreen'
import UserEditScreen from './pages/UserEditScreen'
import ProductListScreen from './pages/ProductListScreen'
import ProductEditScreen from './pages/ProductEditScreen'
import OrderListScreen from './pages/OrderListScreen'

// PAGE LAYOUTS
import { NavBar } from './layout/NavBar'
import SearchBar from './layout/SearchBar'

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <NavBar />
      <main className='py-3 main-section'>
        <Route render={({ history }) => <SearchBar history={history} />} />
        <Route path='/order/:id' component={OrderScreen} exact />
        <Route path='/shipping' component={ShippingScreen} exact />
        <Route path='/payment' component={PaymentScreen} exact />
        <Route path='/placeorder' component={PlaceOrderScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/profile' component={ProfileScreen} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        <Route path='/cart/:id?' component={CartScreen} exact />
        <Route path='/admin/userlist' component={UserListScreen} exact />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} exact />
        <Route path='/admin/productlist' component={ProductListScreen} exact />
        <Route
          path='/admin/productlist/:pageNumber'
          component={ProductListScreen}
          exact
        />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/page/:pageNumber' component={HomeScreen} exact />
        <Route
          path='/search/:keyword/page/:pageNumber'
          component={HomeScreen}
          exact
        />
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
