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
import NotFound from './pages/NotFound';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingBar from './components/LoadingBar';
import CallbackPage from './pages/CallbackPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  
  const { isLoading } = useAuth0();

  if(isLoading) {
    return <LoadingBar/>
  }

  return (

      <QueryClientProvider client={new QueryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path='/producers' element={<ProducersPage/>} />
            <Route path="/products/category/:categoryId" element={<ProductCategory />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile}/>} />
            <Route path="/cart" element={<ShoppingCart/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        
      </QueryClientProvider>

  )
}

export default App
