import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default AllRoutes