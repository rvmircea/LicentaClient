import React from 'react'
import { NavLink } from 'react-router-dom'


const CategoryPicker = () => {

    const activeStyle = "border-2 border-transparent border-b-orange-700 hover:text-zinc-600 transition transition-color transition-border-color ease-in-out duration-150";
    const unactiveStyle = "text-black border-2 border-transparent hover:text-zinc-600 transition transition-color duratio-300";

    return (
        <div className="flex justify-center align-middle space-x-6 my-4 text-xl mx-4 pt-4">
            <NavLink to={'/products/category/1'}
                className={({ isActive }) =>
                    isActive ? activeStyle : unactiveStyle
                }
            >
                <span>Bere</span>
            </NavLink>
            <span className='mx-2 border border-zinc-700'></span>
            <NavLink to={'/products/category/2'}
                className={({ isActive }) =>
                    isActive ? activeStyle : unactiveStyle
                }>
                <span>Vin</span>
            </NavLink>
            <span className='mx-2 border border-zinc-700'></span>
            <NavLink to={'/products/category/3'}
                className={({ isActive }) =>
                    isActive ? activeStyle : unactiveStyle
                }>
                <span>Altele</span>
            </NavLink>
        </div>
    )
}

export default CategoryPicker