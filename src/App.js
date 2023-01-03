import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ShoppingCart from './components/ShoppingCart';
import LandingPage from "./components/LandingPage"
import DressPage , { loader } from './layout/DressPage';
import Layout from './layout';
import ProductsList from './components/ProductsList';
import FavoritesList from './components/FavoritesList';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <><Outlet/></>
      ,
      children : [
        {
          path : "/products/",
          element : <div className='w-full max-h-[100vh] bg-[#F9F9F9] pb-2 flex flex-col'>
          <Layout><ProductsList/></Layout>
          </div>
        },
        {
        path : "/products/:id",
        element : <Layout><DressPage/></Layout>,
        loader : loader
       } 
      ]
    },
    {
      path : "/shoppingCart",
      element : <div className='w-full h-full flex flex-col'>
        <Layout><ShoppingCart/></Layout>
      </div>
    },
    {
      path : "/favorites",
      element : <div className='w-full h-full flex flex-col'>
      <Layout><FavoritesList/></Layout>
    </div>
    }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
      }
export default App;