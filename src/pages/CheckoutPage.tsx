import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { useAuth0 } from '@auth0/auth0-react';
import { getCart } from '../api/cartApi';
import { postPaymentIntent } from '../api/checkoutApi';
import "../App.css";
import { Basket } from '../interfaces/IProductList';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe("pk_test_51KcmBYD7EKw07oOmfOjEvKefyJXp2iXEwpzfCNEq8aqavclZnqGi2RXU199SdBxl4RTNBtN9nTlUFqP4bnhSBuE600mUKhdJdS");

 type appearanceType = {
    theme: "stripe";
}



const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState("");
    const { user, getAccessTokenSilently } = useAuth0();
    
    const [basket, setBasket] = useState<Basket | undefined>();

    useEffect(() => {
        const getBasket = async () => {
            const data = await getCart(user?.sub);
            setBasket(data);
            const secret = await postPaymentIntent(data, await getAccessTokenSilently());
            setClientSecret(secret.clientSecret);
        }
        getBasket();
    }, []);

    const appearance:appearanceType = {
        theme: 'stripe',
    };

    

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className='App flex flex-col-reverse space-y-6 md:grid grid-cols-2 my-8 md:mt-40 '>
            {clientSecret && (
                <>
                <div className='flex flex-col mx-auto justify-center h-fit p-8 mt-12 lg:mt-32 font-medium border border-zinc-100 shadow-md rounded-md'>
                    <span>Comanda:</span>
                    {basket && basket.basketItems.map(item => {
                        return (
                            
                            <div key={item.id} className="flex p-3 space-x-4 my-2 justify-start bg-zinc-50 border border-zinc-200 rounded-md shadow-sm">
                                <Link to={`/products/${item?.productId}`} className="underline">
                                <span>{item.product?.name}</span>
                                </Link>
                                <p className='text-orange-600'>
                                    {item.product?.price} RON
                                </p>
                            </div>
                        )
                    })}

                    <p>Numar total produse: {basket?.totalItems}</p>
                    <p>Pret total: <span className='text-orange-600'>{basket?.totalPrice} RON</span></p>
                    <Link to={"/cart"} className="mt-4 text-xs underline"><p>Inapoi la cos</p></Link>
                </div>
                {/* //@ts-ignore */}
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
                </>
            )}
        </div>
    )
}

export default CheckoutPage