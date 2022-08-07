import React from 'react'
import { ToastContainer } from 'react-toastify'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>  
        <Cta />
        <ToastContainer/>
        <Footer/>
    </>
  )
}

export default Home