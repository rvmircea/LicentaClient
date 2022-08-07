import React from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css';
import { MdOutlineCelebration } from "react-icons/md"

const CallbackPage = () => {

  return (
    <main className='flex flex-col items-center justify-center space-y-6 mt-40 md:mt-64'>
      <p className='text-xl lg:text-3xl'>Transactia a avut loc cu succes. Va multumim!</p>
      <Link to="/" className='text-lg lg:text-xl font-semibold text-orange-600 underline'>
        Inapoi la pagina principala
      </Link>
      <div className='inline-flex'>
        <span><MdOutlineCelebration size={50} /></span><span><MdOutlineCelebration size={50} /></span><span><MdOutlineCelebration size={50} /></span>
      </div>
    </main>
  )
}

export default CallbackPage