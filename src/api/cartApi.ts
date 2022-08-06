import axios from "axios";
import { BasketItem, Product } from "../interfaces/IProductList";



export const cartApi = axios.create({
    baseURL: "https://localhost:7121/api/basket",
})

export const getCart = async (userSub:string | undefined) => {
    const response = await cartApi.get("",{params: {userId:userSub}});
    return response.data;
}

export const addToCart = async (userSub:string | undefined, product: BasketItem) => {
    try{
        console.log(userSub, product);
        const response = await cartApi.post("",product, {params: {userId:userSub}});
        return response.data;
    }
    catch (e){
        console.log(e);
    }
}