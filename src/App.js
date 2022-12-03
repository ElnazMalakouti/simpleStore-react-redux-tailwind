import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  
  return (
    <div className='App flex justify-center items-center'>
      <div className="w-full h-full bg-white bg-opacity-40 flex justify-center items-center">
        <ProductCard/>
      </div>
    </div>
  );
}

export default App;