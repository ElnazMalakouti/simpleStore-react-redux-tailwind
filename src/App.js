import './App.css';
import {useDispatch} from "react-redux"
import {add} from "./redux/reducers/ProductsReducer/ProductsReducer"

function App() {
  const dispatch = useDispatch()
  
  return (
    <div>
      <button onClick={()=> dispatch(add())}>reducer test</button>
    </div>
  );
}

export default App;