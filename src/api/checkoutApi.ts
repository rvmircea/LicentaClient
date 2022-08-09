import axios from "axios";
import { Basket } from "../interfaces/IProductList";

export const cartApi = axios.create({
    baseURL: "https://localhost:7121/create-payment-intent",
})

export const postPaymentIntent = async (basket: Basket | undefined, token:string | undefined) => {
    console.log(basket);
    
    const reponse = await cartApi.post('',basket, {headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }});
    console.log(reponse);
    return reponse.data;
}

