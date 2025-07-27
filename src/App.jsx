import { lazy, Suspense } from 'react';
import { Routes, BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './pages/listing';


const Home = lazy(() => import('./pages/Home'));


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


                
              </Routes>
           </Suspense>
           <Footer />
        </>

    )
}

export default App