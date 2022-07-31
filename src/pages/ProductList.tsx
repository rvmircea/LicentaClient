import React, { SyntheticEvent, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom';
import { getProducts, getProductsPerPage } from '../api/productsApi';
import CategoryPicker from '../components/CategoryPicker';
import LoadingBar from '../components/LoadingBar';
import { Product } from '../interfaces/IProductList';

const ProductList = () => {

  const [sortType, setSortType] = useState("Pret descrescator");
  const [page, setPage] = useState(1);
  // const queryClient = useQueryClient()

  // const query = useQuery<Product[]>('products', getProducts);

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<Product[]>(['products', page], () => getProductsPerPage(page),
    { keepPreviousData: true });

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setSortType(e.target.value);
  }


  const handleSort = (prodOne: Product, prodTwo: Product) => {
    if(sortType === "Data aparitiei"){
      return prodOne.id - prodTwo.id;
    }

    if (sortType === "Pret crescator") {
      return prodOne.price - prodTwo.price;
    }
    return prodTwo.price - prodOne.price;
  }

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
    <div className="bg-white z-0">
      <CategoryPicker />
      <div className='flex items-center justify-end text-md font-normal mr-2 md:mr-16 xl:mr-[19rem]'>
        <label>
          Sorteaza dupa:
        <select name="sortOptions" value={sortType} onChange={e => handleSelect(e)} className="mx-2">
          <option value="Pret descrescator">Pret descrescator</option>
          <option value="Pret crescator">Pret crescator</option>
          <option value="Data aparitiei">Data aparitiei</option>
        </select>
        </label>
        </div>
      <div className=" max-w-2xl mt-2 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-t-2 border-t-zinc-100 shadow-md">
        <div className="bg-white p-2 -mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
          {data ? data.sort(handleSort).map((product) => (
            <div key={product.id} className="group relative shadow-lg rounded-md border-2 border-t-zinc-100 p-2">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none transition-all duration-50 ease-in-out">
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
            <div> Nu au fost gasite produse</div>
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
        }} disabled={isPreviousData || (data!.length < 8)} className="mx-2 text-orange-700 disabled:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )

}

export default ProductList;