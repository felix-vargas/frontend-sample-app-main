import React from 'react'
import { NavLink } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
              <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        < HomeIcon />
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/postulacion'
      >
        < MenuBookIcon/>

      </NavLink>
    <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/profile'
      >
        < AccountCircleRoundedIcon />
      </NavLink>

    </nav>
  )
}

export default NavBar
