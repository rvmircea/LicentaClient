import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getCart, removeFromCart } from '../api/cartApi';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import { LoginButton } from '../components/LoginButton';
import { RegisterButton } from '../components/RegisterButton';
import { Basket, BasketItem } from '../interfaces/IProductList';
import 'react-toastify/dist/ReactToastify.min.css';
const ShoppingCart = () => {

    const notify = () => toast('Produsul a fost sters din coș', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });


    const { user, isAuthenticated } = useAuth0();
    const { data, isFetched, refetch } = useQuery<Basket>("GetCart", async () => await getCart(user?.sub));

    // console.log(data);
    console.log(user?.sub);

    const handleRemove = async (basketItemId: number) => {
        await removeFromCart(basketItemId);
        refetch();
        notify();
    }

    if (!isAuthenticated) {
        return (
            <main className='flex items-center justify-center my-32 lg:my-48'>
                <article>
                    <div >
                        <h1>Intra in cont/Creaza un cont nou pentru a vizualiza coșul de cumpărături!</h1>
                    </div>
                    <LoginButton style='mx-2' />
                    <RegisterButton style='mx-2' />
                </article>
            </main>
        )
    }

    return (
        <>
            <main className='font-semibold'>
                <section className='px-6 lg:px-12 py-4 lg:py-8 bg-zinc-50 min-h-[94vh]'>
                    <div className='lg:mx-32'>
                        <article className='flex justify-between md:pt-6'>
                            <h1 className='text-sm md:text-lg font-bold'>Cosul tau de cumpărături:</h1>
                            <button className='p-1 text-xs md:text-lg lg:p-2 hover:bg-red-600 hover:text-white rounded-md shadow-md border text-red-600 hover:shadow-lg transition-all duration-150'>
                                Goleste cosul
                            </button>
                        </article>
                        {data && data?.basketItems.map((produs: BasketItem) => {
                            return (
                                <div className='my-2 md:my-6 p-2 flex items-center border border-zinc-200 shadow-sm rounded-md bg-white hover:bg-zinc-100 hover:shadow-md transition-all duration-150' key={produs?.id}>
                                    <div className='h-16 w-16 md:h-28 md:w-28 lg:h-32 lg:w-32 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                                        <Link to={`/products/${produs?.productId}`}>
                                            <img className='w-full h-full object-center object-cover lg:w-full lg:h-full hover:opacity-80 transition-all duration-100' src={produs?.product?.imgUrl} />
                                        </Link>
                                    </div>
                                    <p className='px-4 lg:px-10 text-xs md:text-lg self-center flex flex-col'>
                                        <span className='hover:underline'>
                                            <Link to={`/products/${produs?.productId}`}>
                                                {produs?.product?.name}
                                            </Link>
                                        </span>
                                        <span>
                                            Bucati: {produs?.quantity}
                                        </span>
                                        <span>Pret: <span className='text-orange-700'>{produs?.product?.price} RON</span></span>
                                    </p>
                                    <div className="ml-auto">
                                        <button className='lg:mx-4 text-xs md:text-lg p-1 bg-zinc-50 hover:bg-zinc-100 text-white rounded-md shadow-md hover:shadow-lg' onClick={() => handleRemove(produs?.id!)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 stroke-red-600 hover:stroke-red-500 transition-all duration-150" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            )
                        })}
                        <div className='flex items-center '>
                            <div>
                                <p>Produse în coș: {data?.totalItems} total</p>
                                <p>Pret total: <span className='text-orange-700 font-bold'>{data?.totalPrice} RON</span></p>
                            </div>
                            <button className='flex ml-auto md:p-2 text-white bg-orange-600 rounded-md shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-150'>
                                <span>Trimite comanda</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-[0.3rem]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <ToastContainer
                    toastStyle={{ color: "white", backgroundColor: "#dc2626" }}
                    theme="colored"
                    position="bottom-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </main>
        </>

    )
}

export default ShoppingCart



