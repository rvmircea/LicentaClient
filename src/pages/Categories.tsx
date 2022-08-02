import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <main className="bg-white z-0 flex align-middle justify-center p-8">
      <div className="max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-6 border-t-2 border-t-zinc-100 shadow-md">
        <section className="md:grid space-y-2 grid-cols-1 grid-rows-1  md:grid-cols-2  gap-y-2 gap-x-4 sm:grid-cols-2 xl:gap-x-4 xl:grid-rows-4 font-semibold">
          <article className='col-start-1 row-span-2 text-center'>
          <h1 className='text-6xl lg:text-xl font-semibold'>Beri.</h1>
            <Link to="/products/category/1">
              <img
                src="https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Produse din cateogria bere"
                className='hover:opacity-80 rounded-md lg:w-[64rem] lg:h-[22rem] transition-all duration-100 ease-in-out' />
            </Link>
          </article>
          <article className='col-start-2 row-span-1 bg-zinc-100 rounded-md'>
            <h1 className='text-md p-4 text-orange-700'>Berea este una dintre cele mai consumate băuturi din lume. Cu o istorie ce datează încă din vremea Mesopotamiei Antice, reușește să se păstreze în cele mai bune locuri din topul alegerii consumatorilor. Totuși, trebuie să știm că berile sunt fie lager, fie ale, și acest lucru este determinat de tipul de drojdie folosit în timpul procesului de fermentație. </h1>
          </article>
          <article className='col-start-2 row-start-2 row-span-2 text-center'>
            <h1 className='text-2xl  lg:text-xl font-semibold'>Vinuri.</h1>
            <Link to="/products/category/2">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Produse din cateogria bere"
                className='hover:opacity-90 rounded-md lg:w-[64rem] lg:h-[22rem] transition-all duration-100 ease-in-out' />
            </Link>
          </article>
          <article className='col-start-2 row-start-4 bg-zinc-100 rounded-md h-fit'>
            <h1 className='text-md p-4 text-orange-700'>Vinul, cunoscut ca bautura alcoolica de foarte multa vreme este unul dintre produsele alimentare cu larga circulatie. Prin vin se intelege bautura alcoolica rezultata din fer­mentarea completa sau partiala a strugurilor proaspeti sau a mustului de struguri proaspeti.</h1>
          </article>
          <article className='col-start-1 row-start-3 row-span-2 text-center'>
            <h1 className='text-2xl lg:text-xl font-semibold'>Pahare bere/vin. Halbe. Coastere.</h1>
            <Link to="/products/category/3">
              <img
                src="https://images.unsplash.com/photo-1594063835597-7806ade59614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgxfHxlbXB0eSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Produse din cateogria bere"
                className='hover:opacity-80 rounded-md lg:w-[64rem] lg:h-[22rem] transition-all duration-100 ease-in-out' />
            </Link>
          </article> 
        </section>
      </div>
    </main>
  )
}

export default Categories