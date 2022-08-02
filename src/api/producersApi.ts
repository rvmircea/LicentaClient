import axios from "axios";
import { Producer } from "../interfaces/IProductList";

export const producersApi = axios.create({
    baseURL: "https://localhost:7121/api/producer/",
});

export const getProducers = async ():Promise<Producer[]> => {
    const response = await producersApi.get("");
    return response.data;
}