import { Product } from "./IProductList";

export interface OrderItem {
    id:number;
    productId: number;
    product:Product;
}

export interface Order{
    id:number;
    userId: string;
    timeCreated: Date;
    totalPrice: number;
    orderItems: OrderItem[];
}