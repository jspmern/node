import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import PrivateRoute from './components/private/PrivateRoute'

function App() {
  return (
    <div className='relative min-h-screen'>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App