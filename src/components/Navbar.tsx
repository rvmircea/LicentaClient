import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const unactiveStyle = "lg:mx-8 hover:text-orange-600 hover:text-zinc-600  mx-1 px-3"
const activeStyle = "lg:mx-8 hover:text-orange-600 mx-2 text-orange-700 transition transition-color duration-150 border-b-2 border-b-orange-600"
const Navbar = () => {
  return (
    <nav className='bg-gray-50 flex align-middle justify-between lg:justify-start lg:text-2xl border-b-2 border-b-zinc-100 text-xl py-2'>
      <NavLink to="/" className={({ isActive }) =>
        isActive ? activeStyle : unactiveStyle
      } >Artizanalii</NavLink>
      <div className='hidden sm:flex align-middle'>
        <NavLink to="/products" className={({ isActive }) =>
          isActive ? activeStyle : unactiveStyle
        }>Produse</NavLink>
        <NavLink to="/categories" className={({ isActive }) =>
          isActive ? activeStyle : unactiveStyle
        }>Categorii</NavLink>
        <NavLink to="/producers" className={({ isActive }) =>
          isActive ? activeStyle : unactiveStyle
        }>Producatori</NavLink>
        <NavLink to="/api" className={({ isActive }) =>
          isActive ? activeStyle : unactiveStyle
        }>API</NavLink>
      </div>
      <div className='visible sm:invisible self-end'>
        <Menu as="div">
          <div className='mr-6'>
            <Menu.Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="flex flex-col space-y-1 absolute right-0 mt-2 mr-2 min-w-[8rem]  origin-top-right bg-white shadow-md border-2 border-zinc-200 text-right z-10">
              <Menu.Item>
                <NavLink to="/products" className="p-2 text-md hover:text-orange-600">Produse</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/categories" className="p-2 text-md hover:text-orange-600">Categorii</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/producers" className="p-2 text-md hover:text-orange-600">Producatori</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/api" className="p-2 text-md hover:text-orange-600">API</NavLink>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar