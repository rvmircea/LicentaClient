import React from 'react'
import "../index.css"
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { getProductByCategory } from '../api/productsApi';
import CategoryPicker from '../components/CategoryPicker';
import { Product } from '../interfaces/IProductList';
import LoadingBar from '../components/LoadingBar';

const ProductCategory = () => {

    const param = useParams();
    let query;
    switch (param.categoryId) {
        case "1":
            query = useQuery<Product[]>('beerProducts', () => getProductByCategory(+param.categoryId!));
            break;
        case "2":
            query = useQuery<Product[]>('wineProducts', () => getProductByCategory(+param.categoryId!));
            break;
        case "3":
            query = useQuery<Product[]>('otherProducts', () => getProductByCategory(+param.categoryId!));
            break;
        default:
            console.log("Nothing here");
    }

    if (query?.isLoading) {
        return <LoadingBar />
    }

    if (query?.data?.length) {
        return (
            <div className="bg-white mb-4 z-0">
                <CategoryPicker />
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-t-2 border-t-zinc-100 shadow-md">
                    <div className="-mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {query && query.data ? query.data.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.imgUrl}
                                        alt={"Produs imagine" + product.imgUrl}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={`/products/${product.id}`}>
                                                <span className="absolute inset-0" />
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.producer.name}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900"><span className='text-orange-700 text-lg'>{product.price} RON</span></p>
                                </div>
                            </div>
                        ))
                            :
                            <div> Nothing </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <CategoryPicker />
                <section className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-t-2 border-t-zinc-100 shadow-md'>
                    <article className='flex justify-center align-middle '>
                        <h1 className='text-4xl'>
                            Nici un produs momentan
                        </h1>
                    </article>
                </section>
            </>

        )
    }

}

export default ProductCategory