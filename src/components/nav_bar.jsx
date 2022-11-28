import React from 'react'
import { NavLink } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';


export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        < CalendarViewMonthIcon />

      </NavLink>
    <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
    >
        < AccountCircleRoundedIcon />

    </NavLink>
    


    </nav>
  )
}

export default NavBar
