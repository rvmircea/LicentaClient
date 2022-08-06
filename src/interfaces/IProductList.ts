export interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    msrp: number;
    imgUrl: string;
    categoryId: number;
    producerId: number;
    stockQuantity: number;
    abv: number;
    producer: Producer;
    category: Category;
}

export interface Producer{
    id: number;
    name:string;
    description: string;
    yearFounded: number;
    producerAddressId: number;
    producerAddress: ProducerAddress;
}

export interface Category{
    id: number;
    name: string;
}

export interface ProducerAddress{
    id: number;
    city: string;
    address: string;
    addressNumber: number;
    zipCode: number;
}

export interface BasketItem{
    id?: number;
    userId: string | undefined;
    quantity: number | undefined;
    productId: number | undefined;
    product: Product | undefined;
}

export interface Basket{
    id: number;
    userId: string;
    basketItems: BasketItem[];
    totalItems: number;
    totalPrice: number;
}