import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const NotFound = () => {
    return (
        <>
        <main className='bg-zinc-100 w-fit mx-auto  p-16  rounded-lg shadow-md flex justify-center items-center mt-16 lg:mt-64 h-full'>
            <article>
                <h1 className='text-6xl font-bold'>
                    Oops! Pagina accesata nu exista!
                </h1>
                <div className='flex justify-evenly items-center mt-24 text-xl font-bold'>
                    <Link to="/">
                        <button className='bg-orange-600 px-12 py-3 text-white rounded-md shadow-md hover:bg-orange-600/80 hover:shadow-lg transition-all duration-150'>
                            Inapoi la pagina principală
                        </button>
                    </Link>
                    <Link to="/products">
                        <button className='bg-orange-50 px-6 py-3 rounded-md shadow-md text-orange-600 hover:bg-orange-100'>
                            Catalog produse
                        </button>
                    </Link>
                </div>

            </article>
        </main>
        <Footer/>
        </>
    )
}

export default NotFound