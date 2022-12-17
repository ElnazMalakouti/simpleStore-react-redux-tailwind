import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import ShoppingCart from './components/ShoppingCart';
// import ProductCard from './components/ProductCard';
// import { useSelector } from "react-redux"
// import ProductPage from './components/ProductPage';
import LandingPage from "./components/LandingPage"

function App() {

  const router = createBrowserRouter([
  {
    path : "/",
    element : <LandingPage/>
  }
  ])

  // const productList = useSelector(state => state.products.Products)

  return (

    <>
    <RouterProvider router={router} />
    </>


    // <div className='App flex items-center'>
    //   <div className="w-full h-full bg-white bg-opacity-40 flex items-center">
    //     <ShoppingCart/>
    //     {/* {
    //       <ProductPage
    //       dressImage={"pics/OTEN.png"}
    //       dressName={"LYANER"}
    //       dressScore={3.5}
    //       dressDescription={"Women's Satin Ruffle One Shoulder Ruched Split Wrap Front Cocktail Midi Bodycon Dress"}
    //       dressSizes={["S" , "L"]}
    //       dressColors={[
    //         {
    //             id: 1,
    //             name: "gray",
    //             code:"#A1A1A1"
    //         },
    //         {
    //             id: 2,
    //             name: "black",
    //             code:"#000000"
    //         },
    //         {
    //             id: 3,
    //             name: "red",
    //             code:"#EC0D0D"
    //         },
    //         {
    //             id: 4,
    //             name: "crimson",
    //             code:"#4A0F20"
    //         },
    //     ]}
    //       dressPrice={69.12}
    //       dressAttributes={[
    //         "Imported",
    //         "Zipper closure",
    //         "Machine washable with cold water in a delicate cycle.",
    //         "This summer slimming mini dress is made of 95% Polyamide and 5% Spandex.",            
    //         "This elegant party dress is very form fitting, it will hug all of your curves."
    //     ]}
    //       />
    //     } */}
    //     {/* <div className='products w-[90%] max-h-[100vh] gap-2 pt-2 pb-2 flex flex-row justify-center flex-wrap overflow-auto'>
    //       {
    //         productList && productList.map(item => {              
    //           return <ProductCard
    //             key={item.dressId}
    //             dressName={item.dressName}
    //             dressDescription={item.dressDescription}
    //             dressImage={item.dressImage}
    //             dressScore={item.dressScore}
    //             dressPrice={item.dressPrice}
    //           />
    //         })            
    //       }          
    //     </div> */}
    //   </div>
    // </div>
  );
}

export default App;