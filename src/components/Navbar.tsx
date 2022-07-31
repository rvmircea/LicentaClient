import { Menu, Transition } from '@headlessui/react'
import { useAuth0 } from "@auth0/auth0-react";
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'
import { RegisterButton } from './RegisterButton'

const unactiveStyle = "lg:mx-6 hover:text-orange-600 mx-2"
const activeStyle = "lg:mx-6 hover:text-orange-600 mx-2 text-orange-700 transition transition-color duration-150 border-b-2 border-b-orange-600"
const Navbar = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <nav className='bg-gray-50 flex align-middle justify-between lg:justify-around lg:text-2xl border-b-2 border-b-zinc-100 text-xl py-2'>
      <button className='justify'>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? activeStyle : unactiveStyle
        } >Artizanalii</NavLink>
      </button>

      <div className='hidden sm:flex'>
        <button>
          <NavLink to="/products" className={({ isActive }) =>
            isActive ? activeStyle : unactiveStyle
          }>Produse</NavLink>
        </button>
        <button>
          <NavLink to="/categories" className={({ isActive }) =>
            isActive ? activeStyle : unactiveStyle
          }>Categorii</NavLink>
        </button>
        <button>
          <NavLink to="/producers" className={({ isActive }) =>
            isActive ? activeStyle : unactiveStyle
          }>Producatori</NavLink>
        </button>
        <button>
          <NavLink to="/api" className={({ isActive }) =>
            isActive ? activeStyle : unactiveStyle
          }>API</NavLink>
        </button>

      </div>
      <div className='hidden md:flex pb-1'>
        {!isAuthenticated && (
          <div>
            <LoginButton style='lg:mx-4 hover:text-orange-600 mx-1 px-3' />
            <RegisterButton style="lg:mx-4 hover:text-orange-600 mx-1 px-3" />
          </div>
        )}
        {isAuthenticated && (
          <>
            <NavLink to="/profile" className="mx-4 hover:text-orange-600">
              Profil
            </NavLink>
            <LogoutButton style='hover:text-orange-600 mx-1 px-3' />
          </>
        )}
      </div>
      <div className='visible sm:hidden self-end'>
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
                <NavLink to="/products" className="p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">Produse</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/categories" className="p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">Categorii</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/producers" className="p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">Producatori</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/api" className="p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">API</NavLink>
              </Menu.Item>
              {isAuthenticated && (
                <>
                  <Menu.Item>
                    <NavLink to="/profile" className="p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">Profil</NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100'>
                      <LogoutButton style='p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100' />
                    </div>
                  </Menu.Item>
                </>
              )}
              {
                !isAuthenticated && (
                  <>
                    <Menu.Item>
                      <div className="text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">
                        <LoginButton style='p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100' />
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div className="text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100">
                        <RegisterButton style='p-2 text-md hover:text-gray-100 hover:bg-orange-700 transition-color duration-100' />
                      </div>
                    </Menu.Item>
                  </>
                )
              }
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar