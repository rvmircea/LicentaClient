import axios, { AxiosError } from "axios";
import { BasketItem, Product } from "../interfaces/IProductList";



export const cartApi = axios.create({
    baseURL: "https://localhost:7121/api/basket",
})

export const getCart = async (userSub:string | undefined) => {
    try{
        
    const response = await cartApi.get("",{params: {userId:userSub}});
    return response.data;
    }
    catch(e){
        if(axios.isAxiosError(e)){
            console.error(e.message, e.response);
        }
    }

}

export const addToCart = async (userSub:string | undefined, product: BasketItem) => {
    try{
        console.log(userSub, product);
        const response = await cartApi.post("",product, {params: {userId:userSub}});
        return response.data;
    }
    catch (e){
        if(axios.isAxiosError(e)){
            console.error(e.message, e.response);
        }
    }
}

export const removeFromCart = async(basketItemId:number) => {
try{
    const response = await cartApi.delete(`${basketItemId}`);
    return response;
}
catch(e){
    if(axios.isAxiosError(e)){
        console.error(e.message, e.response);
    }
}
}