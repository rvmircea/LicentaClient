import axios from "axios";
import { Basket } from "../interfaces/IProductList";

export const orderApi = axios.create({
    baseURL: "https://localhost:7121/api/order",
})

export const getOrderByUser = async (userId: string | undefined) => {
    try{

        const response = await orderApi.get("", {
            params:{
                userId: userId,
            }
        });
        return response.data;
    }
    catch (e){
        if(axios.isAxiosError(e)){
            console.error(e.message, e.response);
        }
    };
}

export const createOrder = async(userId: string | undefined, basket: Basket | undefined) => {
    console.log(basket);
    try{
        const response = await orderApi.post("", basket, {
            params:{
                userId: userId,
            }
        });
        return response.data;
    }
    catch (e){
        if(axios.isAxiosError(e)){
            console.error(e.message, e.response);
        }
    };
    
}