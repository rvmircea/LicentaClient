import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useQuery } from 'react-query';
import { getCart } from '../api/cartApi';
import { LoginButton } from '../components/LoginButton';
import { RegisterButton } from '../components/RegisterButton';
import { Basket, BasketItem } from '../interfaces/IProductList';
import {v4 as uuidv4} from 'uuid';

const ShoppingCart = () => {

    const {user, isAuthenticated} = useAuth0();
    const {data, isFetched} = useQuery<Basket>("GetCart", async () =>  await getCart(user?.sub));

    // console.log(data);
    console.log(user?.sub);
    
    
    if(!isAuthenticated){
        return (
            <main className='flex items-center justify-center my-32 lg:my-48'>
                <article>
                    <div >
                        <h1>Intra in cont/Creaza un cont nou pentru a vizualiza coșul de cumpărături!</h1>
                    </div>
                    <LoginButton style=''/>
                    <RegisterButton style=''/>
                </article>
            </main>
        )
    }

  return (
    <>
    <main>
        {data && data?.basketItems.map((produs: BasketItem) => {
            return (
                <li key={uuidv4()}>
                    {produs?.id}
                    - {produs?.product?.name} - {produs?.quantity}
                    {/* <img src={produs?.product?.imgUrl} /> */}
                </li>
            )
        })}
        <div>
            <p>Produse în coș: {data?.totalItems}</p>
            <p>Pret total: {data?.totalPrice} RON</p>
        </div>
    </main>
    </>

  )
}

export default ShoppingCart



