import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../api/productsApi';
import { Product } from '../interfaces/IProductList';

const ProductPage = () => {
    
    const queryClient = useQueryClient()
    const param = useParams();
    const query = useQuery<Product>('singleProduct', () => getSingleProduct(+param.productId!));

    if (query && query.data) {
        return <div>Product {query.data.name}</div>
    }
    else {
        return <div>Not found</div>
    }
}

export default ProductPage