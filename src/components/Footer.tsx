import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-50 text-black flex align-middle justify-end space-x-2 px-2 fixed inset-x-0 bottom-0'>
        <a href="https://github.com/rvmircea">
            <span className='underline hover:text-orange-600'>Github</span>
        </a>
        <a href="https://localhost:7121/swagger/index.html">
            <span className='underline hover:text-orange-600'>Open API</span>
        </a>
    </footer>
  )
}

export default Footer