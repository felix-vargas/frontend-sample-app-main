import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Postulacion from '../pages/postulacion'
import ProfilePage from '../pages/profile'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/postulacion' element={<Postulacion />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
