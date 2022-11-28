import React from 'react'
import LogoUSM from '../assets/usm.png'
import NavBar from '../components/nav_bar'

export const HomePage = () => {
  return (
    <div className='page'>
      <div className='header img'>
        <img src={LogoUSM} alt='logo usm' />
      </div>
      <NavBar />
      <h2>Página de Inicio</h2>
    </div>
  )
}

export default HomePage
