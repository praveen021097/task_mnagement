import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Homepage'
import SingleTask from './SingleTask'
const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/single-task/:id' element={<SingleTask />} />
   </Routes>
  )
}

export default MainRoutes
