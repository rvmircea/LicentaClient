import axios from "axios";
import { Product } from "../interfaces/IProductList";

export const productsApi = axios.create({
    baseURL: "https://localhost:7121/api/product",
})

export const getProducts = async () => {
    const response = await productsApi.get("");
    return response.data;
}

export const getProductsAuth = async (bearer: string) => {
    console.log(bearer);
    
    const response = await productsApi.get("", {
        headers: {
            Authorization: `Bearer ${bearer}`
        }
    });

    return response.data;
}

export const getSingleProduct = async (productId: number = 1): Promise<Product> => {
    const response = await productsApi.get(`/${productId}`);
    return response.data;
}

export const getProductByCategory = async (categoryId: number) => {
    const response = await productsApi.get(`/category/${categoryId}`);
    return response.data;
}

export const getProductsPerPage = async (pageNum: number) => {
    const response = await productsApi.get(`/page/${pageNum}`);
    return response.data;
}