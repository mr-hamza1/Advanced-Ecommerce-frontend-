import { lazy, Suspense } from 'react';
import { Routes, BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './pages/listing';


const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));


const App = () => {
  return (
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
  )
}

const MainLayout = ()=>{
    return (
        <>
          <Header/>
          <Suspense>
              <Routes>
                    <Route path="/"  element={<Home/>} />
                    <Route path="/search"  element={<Listing/>} />
                    <Route path="/ProductDetails/:id"  element={<ProductDetails/>} />
                    <Route path="/cart"  element={<Cart/>} />


                
              </Routes>
           </Suspense>
           <Footer />
        </>

    )
}

export default App