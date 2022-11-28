import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const RamoPage = () => {
  return (
    <div className='page'>
      <div className='header img'>
        <img src={LogoUSM} alt='logo usm' />
      </div>
      <NavBar />
      <h2>Página Interna</h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default RamoPage
