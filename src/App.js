import './App.css';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ShoppingCart from './components/ShoppingCart';
import ProductCard from './components/ProductCard';
import { useSelector } from "react-redux"
import ProductPage from './components/ProductPage';
import LandingPage from "./components/LandingPage"
import { FiHeart } from "react-icons/fi"
import { CgShoppingBag } from "react-icons/cg"

function App() {

  const productList = useSelector(state => state.products.Products)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <div className='w-full max-h-[100vh] bg-[#F9F9F9] pb-2 flex flex-col'>
        <div className="headerBorderShadow w-full h-[7rem] bg-white flex flex-row justify-between border-b-2 pb-2">
          <div className="w-[20%] h-[90%] ml-[6rem] mt-2">
            <Link to="/products"><button className='w-auto h-full'><img className="w-auto h-full" alt="" src="pics/logo2.png"/></button></Link>
          </div>

          <div className="h-full flex justify-center items-center text-[#035972] font-[AmazonLight] text-[22px]">
            <p>Coctail dresses midi length womens dresses evening party formal</p>
          </div>

          <div className="w-[20%] h-full flex flex-row justify-center items-center gap-[1.5rem] font-[AmazonLight]">
            <div className="flex flex-col justify-center items-center text-[#035972]">
              <button className="text-[26px]"><><FiHeart /></></button>
              <p className="text-[16px]">Favorites</p>
            </div>
            <div className="flex flex-col justify-center items-center text-[#035972]">
              <Link to="/shoppingCart"><button className="text-[26px]"><><CgShoppingBag /></></button></Link>
              <p className="text-[16px]">Shopping Cart</p>
            </div>
          </div>
        </div>
        <div className='scrollBar w-full h-full gap-2 pb-2 pt-3 flex flex-row justify-center flex-wrap overflow-auto'>
          {
            productList && productList.map(item => {
              return <ProductCard
                key={item.dressId}
                dressName={item.dressName}
                dressDescription={item.dressDescription}
                dressImage={item.dressImage}
                dressScore={item.dressScore}
                dressPrice={item.dressPrice}
              />
            })
          }
        </div>
        <Outlet/>
        </div>
      ,
      children : [
       {
        path : "/products/:dressName",
        element : <ProductPage/>
       } 
      ]
    },
    {
      path : "/shoppingCart",
      element : <div className='w-full h-full flex flex-col'>
        <div className="headerBorderShadow w-full h-[7rem] bg-white flex flex-row justify-between border-b-2 pb-2">
          <div className="w-[20%] h-[90%] ml-[6rem] mt-2">
            <Link to="/products"><button className='w-auto h-full'><img className="w-auto h-full" alt="" src="pics/logo2.png"/></button></Link>
          </div>

          <div className="h-full flex justify-center items-center text-[#035972] font-[AmazonLight] text-[22px]">
            <p>Coctail dresses midi length womens dresses evening party formal</p>
          </div>

          <div className="w-[20%] h-full flex flex-row justify-center items-center gap-[1.5rem] font-[AmazonLight]">
            <div className="flex flex-col justify-center items-center text-[#035972]">
              <button className="text-[26px]"><><FiHeart /></></button>
              <p className="text-[16px]">Favorites</p>
            </div>
            <div className="flex flex-col justify-center items-center text-[#035972]">
              <Link to="/shoppingCart"><button className="text-[26px]"><><CgShoppingBag /></></button></Link>
              <p className="text-[16px]">Shopping Cart</p>
            </div>
          </div>
        </div>
        <ShoppingCart/>
      </div>
    }
  ])



  return (

    <>
      <RouterProvider router={router} />
    </>


        // {
        //   <ProductPage
        //   dressImage={"pics/OTEN.png"}
        //   dressName={"LYANER"}
        //   dressScore={3.5}
        //   dressDescription={"Women's Satin Ruffle One Shoulder Ruched Split Wrap Front Cocktail Midi Bodycon Dress"}
        //   dressSizes={["S" , "L"]}
        //   dressColors={[
        //     {
        //         id: 1,
        //         name: "gray",
        //         code:"#A1A1A1"
        //     },
        //     {
        //         id: 2,
        //         name: "black",
        //         code:"#000000"
        //     },
        //     {
        //         id: 3,
        //         name: "red",
        //         code:"#EC0D0D"
        //     },
        //     {
        //         id: 4,
        //         name: "crimson",
        //         code:"#4A0F20"
        //     },
        // ]}
        //   dressPrice={69.12}
        //   dressAttributes={[
        //     "Imported",
        //     "Zipper closure",
        //     "Machine washable with cold water in a delicate cycle.",
        //     "This summer slimming mini dress is made of 95% Polyamide and 5% Spandex.",            
        //     "This elegant party dress is very form fitting, it will hug all of your curves."
        // ]}
        //   />
        // }
  )
      }
export default App;