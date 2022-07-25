import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
    return (
        <main className=' flex items-center justify-center h-screen lg:px-32 -mt-14 pt-36 mx-auto overflow-hidden bg-transparent -z-10'>
            <div className='flex flex-col items-center'>
                <div>
                    <section className='grid grid-cols-4 p-4 bg-slate-100 md:bg-transparent'>
                        <div className='col-span-4 lg:col-span-2'>
                            <article className='text-3xl'>
                                <h1>
                                    Magazinul online cu produse artizanale, 100% din Romania.
                                </h1><h2 className='text-2xl'>Intra in contact cu producatorii autohtoni.</h2>
                            </article>
                            <div className='flex mt-12 space-x-12 '>
                                <button className='text-xl text-center p-2 text-white rounded-md shadow-md bg-orange-600 hover:bg-orange-500 w-1/2'>
                                    <Link to="/products">
                                        Catalog Produse
                                    </Link>
                                </button>
                                <button className='flex items-center justify-center text-xl text-center text-orange-600 rounded-md shadow-md bg-orange-50/90 hover:bg-orange-100  w-1/2'>
                                    <Link to="/producers" className='flex items-center justify-center'>
                                        Producatori
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className='hidden lg:items-center lg:flex ml-16 px-4 w-max'>
                            <Link to="/products/2">
                                <img className='invisible sm:visible md:object-fit max-h-80 max-w-80 md:mt-8 lg:-mt-24 rounded-md hover:opacity-80'
                                    src="https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt='Artsy image' />
                            </Link>
                            <Link to="/products/3">
                                <img className='invisible sm:visible md:object-fit max-h-96 max-w-96 md:mt-8 lg:-mt-24 mx-2 rounded-md hover:opacity-80'
                                    src="https://images.unsplash.com/photo-1597930715511-bc6248bba27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='Artsy image' />
                            </Link>
                            <Link to="/products/1">
                                <img className='invisible sm:visible md:object-fit max-h-80 max-w-80 md:mt-8 lg:-mt-24 lg:rounded-md hover:opacity-80'
                                    src="https://images.unsplash.com/photo-1630446070374-df1ec648ac65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt='Artsy image' />
                            </Link>
                        </div>
                    </section>
                </div>

            </div>

        </main>
    )
}

export default Cta