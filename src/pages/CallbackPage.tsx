import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css';
import { MdOutlineCelebration } from "react-icons/md"
import { getCart, removeAllFromCart, removeItemsFromCart } from '../api/cartApi';
import { useAuth0 } from '@auth0/auth0-react';
import { createOrder } from '../api/orderApi';
import { useQuery } from 'react-query';
import { Basket } from '../interfaces/IProductList';

let url = document.URL;
const CallbackPage = () => {

  const { user } = useAuth0();
  const status = url.toLowerCase().includes("succeeded");
  console.log(status)
  const [res, setRes] = useState();
  useEffect(() => {
    const remove = async () => {

      const data = await getCart(user?.sub);
      const order = await createOrder(user?.sub, data);
      setRes(order);
      // await removeItemsFromCart(data?.id)
      await removeAllFromCart(user?.sub);
    }
    remove();
  }, []);

  return (
    <>
      {status ?
        <main className='flex flex-col items-center justify-center space-y-6 mt-40 md:mt-64'>
          <p className='mx-2 text-center text-lg  md:text-2xl lg:text-3xl'>Transactia a avut loc cu succes. Va multumim!</p>
          <Link to="/" className='md:text-2xl lg:text-xl font-semibold text-orange-600 underline'>
            Inapoi la pagina principala
          </Link>
          <div className='inline-flex'>
            <span><MdOutlineCelebration size={50} /></span><span><MdOutlineCelebration size={50} /></span><span><MdOutlineCelebration size={50} /></span>
          </div>
          {JSON.stringify(res)}
        </main>
        :
        <main>
          <p className='text-xl lg:text-3xl'>Transactia nu a avut loc. Incercati mai tarziu.</p>
            <Link to="/" className='text-lg lg:text-xl font-semibold text-orange-600 underline'>
              Inapoi la pagina principala
            </Link>
        </main>}
    </>
  )
}

export default CallbackPage