import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';
import ProductCategory from './pages/ProductCategory';
import ProductList from './pages/ProductList';
import { ProducersPage } from './pages/ProducersPage';

const queryClient = new QueryClient()

interface CategoryContextInterface {
  productType: string;
  setProductType(type: string): void;
}

export const CategoryContext = createContext({} as CategoryContextInterface);


function App() {
  const [productType, setProductType] = useState("");

  return (
    <CategoryContext.Provider value={{ productType, setProductType }}>
      <QueryClientProvider client={new QueryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path='/producers' element={<ProducersPage/>} />
            <Route path="/products/category/:categoryId" element={<ProductCategory />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CategoryContext.Provider>
  )
}

export default App
