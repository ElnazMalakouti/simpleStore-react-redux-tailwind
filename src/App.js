import './App.css';
// import ProductCard from './components/ProductCard';
// import { useSelector } from "react-redux"
import ProductPage from './components/ProductPage';

function App() {

  // const productList = useSelector(state => state.products.Products)

  return (
    <div className='App flex items-center'>
      <div className="w-full h-full bg-white bg-opacity-40 flex items-center">
        <ProductPage/>
        {/* <div className='products w-[90%] max-h-[100vh] gap-2 pt-2 pb-2 flex flex-row justify-center flex-wrap overflow-auto'>
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
        </div> */}
      </div>
    </div>
  );
}

export default App;