import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Courseone from './Pages/Courseone'

function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/:id' element={<Courseone/>} />
        </Routes>
    </BrowserRouter>
    
  )
}


export default MyRoutes