import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Postulacion from '../pages/postulacion'
import ProfilePage from '../pages/profile'
import RamoPage from '../pages/ramo'
import Ramobdd from '../pages/ramobdd'
import Ramolp from '../pages/ramolp'
import Ramoestaca from '../pages/ramoestaca'
import Ramoedd from '../pages/ramoedd'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/postulacion' element={<Postulacion />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/ramo' element={<RamoPage />} />
        <Route path='/ramobdd' element={<Ramobdd />} />
        <Route path='/ramoedd' element={<Ramoedd />} />
        <Route path='/ramolp' element={<Ramolp />} />
        <Route path='/ramoestaca' element={<Ramoestaca />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
