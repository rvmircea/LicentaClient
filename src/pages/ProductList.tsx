import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom';
import { getProducts, getProductsPerPage } from '../api/productsApi';
import CategoryPicker from '../components/CategoryPicker';
import LoadingBar from '../components/LoadingBar';
import { Product } from '../interfaces/IProductList';

const ProductList = () => {

  const [page, setPage] = useState(1);
  const queryClient = useQueryClient()

  const query = useQuery<Product[]>('products', getProducts);

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<Product[]>(['products', page], () => getProductsPerPage(page),
    { keepPreviousData: true });

  //   return (
  //     <div className='flex flex-col'>
  //         <CategoryPicker/>
  //         <ul className='grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>   
  //             {query && query.data ? query.data.map(product => (
  //                 <li key={product.id}>
  //                         <div className="min-h-fit min-w-max flex flex-col justify-center text-center space-y-2 my-2 border-2 border-amber-600 mx-12">
  //                             <span>{product.name} - {product.price} Lei</span>
  //                             <img src={product.imgUrl} alt={"img produs"} className="h-48 w-64 hover:scale-95 m-auto" />
  //                         </div> 
  //                 </li>
  //             ))
  //         :
  //         <div>Listing products ...</div>
  //         }
  //         </ul>
  //     </div>
  //   )

  if (isLoading || isFetching) {
    return <LoadingBar />
  }

  if (isError) {
    console.error(error);
    return <div>
      <h1>Eroare la primirea datelor</h1>
    </div>
  }

  return (
    <div className="bg-white">
      <CategoryPicker />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-t-2 border-t-zinc-100 shadow-md">
        <div className="-mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data ? data.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imgUrl}
                  alt={product.imgUrl}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
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
            <div> Nu au fost gasite produse </div>
          }
        </div>
      </div>
      <div className='flex justify-center align-middle my-6 inset-x-0 bottom-0'>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className="mx-2 text-orange-700 disabled:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={() => {
          if (!isPreviousData) {
            setPage(prev => prev + 1)
          }
        }} disabled={isPreviousData || (data!.length  < 8)} className="mx-2 text-orange-700 disabled:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )

}

export default ProductList