import React from 'react'
import { NavLink } from 'react-router-dom'

const unactiveStyle = "xl:mx-16 hover:text-orange-600 hover:text-zinc-600 md:mx-8 mx-2 "
const activeStyle = "xl:mx-16 hover:text-orange-600 md:mx-8 mx-2 text-orange-700 transition transition-color duration-150"
const Navbar = () => {
  return (
    <nav className='flex xl:py-4 align-middle lg:space-x-4 lg:text-2xl border-b-2 border-b-zinc-600 text-xl md: py-6'>
      <NavLink to="/" className={unactiveStyle} >Artizanalii</NavLink>
      <NavLink to="/products" className={({ isActive }) =>
        isActive ? activeStyle : unactiveStyle
      }>Produse</NavLink>
      <NavLink to="/categories" className={({ isActive }) =>
        isActive ? activeStyle : unactiveStyle
      }>Categorii</NavLink>
      <NavLink to="/producers" className={({ isActive }) =>
        isActive ? activeStyle : unactiveStyle
      }>Producers</NavLink>
      <NavLink to="/api" className={({ isActive }) =>
        isActive ? activeStyle : unactiveStyle
      }>API</NavLink>
      
    </nav>
  )
}

export default Navbar