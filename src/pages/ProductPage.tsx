import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct } from '../api/productsApi';
import LoadingBar from '../components/LoadingBar';
import { Product } from '../interfaces/IProductList';
import { Disclosure, Transition } from '@headlessui/react';
import BackButton from '../components/BackButton';
import { useAuth0 } from '@auth0/auth0-react';
import { addToCart } from '../api/cartApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ProductPage = () => {

    const notify = () => toast('Produsul a fost adaugat in coș', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const param = useParams();

    const { user, isAuthenticated } = useAuth0();

    const { data, isLoading, isError, error } = useQuery<Product>('singleProduct', () => getSingleProduct(+param.productId!));

    if (isLoading) {
        return <LoadingBar />
    }

    if (isError) {
        console.error(error);
        return <div>
            <h1>Eroare la primirea datelor</h1>
        </div>
    }

    const addToCartButton = async () => {
        const response = await addToCart(user?.sub, {userId: user?.sub, quantity: 1, productId: data?.id, product: data})
        // const response = true;   
        if (response) {
            notify();
        }
    }

    return (
        <div className='backgroundCustom border-2 border-b-zinc-600'>
            <section className='bg-white/80 my-16 mx-16 border-t border-t-zinc-200 shadow-md p-2 rounded-md'>
                <BackButton />
                <div className='flex justify-center align-middle max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <article className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='rounded-md border border-t-zinc-200 shadow-md'>
                            <img src={data?.imgUrl} alt={"Imagine produs"} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div className='bg-white flex justify-start flex-col align-middle space-y-6 p-2 border-2 border-t-zinc-200 shadow-md'>
                            <div className='flex justify-between text-md sm:text-2xl lg:text-3xl p-2'>
                                <span>
                                    {data?.name}
                                </span>
                                <span className='text-orange-700'>
                                    {data?.price} RON
                                </span>
                            </div>
                            <div className='flex justify-between text-md sm:text-xl lg:text-2xl p-2'>
                                <span>
                                    {data?.description} / <span className='text-md sm:text-xl text-gray-600'>{data?.abv}% ABV</span>
                                </span>
                                <span className='text-zinc-600 text-sm md:text-md md:text-xl sm:mx-4'>
                                    {data?.stockQuantity ? data?.stockQuantity > 10 ? "In stoc" : "Stoc limitat" : "Stoc Epuizat"}
                                </span>
                            </div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="p-2 flex  justify-between border-2 border-gray-200 bg-zinc-100 hover:bg-zinc-100/50">
                                            <span className='text-xl text-orange-700'>Detalii producator</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? `rotate-180` : `text-zinc-600`} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                            </svg>
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform opacity-0"
                                        >
                                            <Disclosure.Panel className="flex flex-col p-2 text-gray-600 bg-zinc-50">
                                                <div className='flex flex-col'>
                                                    <span>Denumire: {data?.producer.name} - {data?.producer.description}</span>
                                                    <span>Fondat: {data?.producer.yearFounded}</span>
                                                    <span>Adresa: {data?.producer.producerAddress.address} {data?.producer.producerAddress.city}</span>
                                                </div>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            {isAuthenticated ? (
                                <>
                                    <button onClick={addToCartButton}
                                        className='flex mx-auto justify-center align-middle p-2 w-1/2 lg:w-1/3 bg-orange-700 hover:bg-orange-600 text-white border-2 border-zinc-200 '>
                                        <span className='md:text-md lg:text-xl'>
                                            Adauga in coș
                                        </span>
                                    </button>
                                </>
                            ) : (
                                <p className='text-lg font-bold mx-2'>Va rugam autentificati-va pentru a putea aduga produse in coș.</p>
                            )}

                        </div>
                        <ToastContainer
                        toastStyle={{color: "white", backgroundColor:"#ea580c"}}
                        theme="colored"
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                    </article>
                </div>
               
            </section>
        </div>
    )
}

export default ProductPage

