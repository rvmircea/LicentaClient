import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { useAuth0 } from '@auth0/auth0-react';
import { getCart } from '../api/cartApi';
import { postPaymentIntent } from '../api/checkoutApi';
import "../App.css";
import { Basket } from '../interfaces/IProductList';

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
        <div className='App flex flex-col-reverse space-y-6 md:grid grid-cols-2 mt-24 md:mt-40 '>
            {clientSecret && (
                <>
                <div className='flex flex-col mx-auto justify-center h-fit p-8 mt-12 lg:mt-36 font-medium border border-zinc-100 shadow-md rounded-md'>
                    <p>Numar total produse: {basket?.totalItems}</p>
                    <p>Pret total: <span className='text-orange-600'>{basket?.totalPrice} RON</span></p>
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