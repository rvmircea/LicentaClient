import { useQuery, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom';
import { getProducts } from '../api/productsApi';
import CategoryPicker from '../components/CategoryPicker';
import { Product } from '../interfaces/IProductList';

const ProductList = () => {

    const queryClient = useQueryClient()

    const query = useQuery<Product[]>('products', getProducts);

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
return (
    
    <div className="bg-white">
    <CategoryPicker/>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="-mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {query && query.data ? query.data.map((product) => (
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
                  <p className="mt-1 text-sm text-gray-500">{product.producerId}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
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

export default ProductList