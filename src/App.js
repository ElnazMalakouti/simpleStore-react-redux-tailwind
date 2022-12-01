import { useState } from "react";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Layout from "./layout";
import DynamicLayout, { loader } from "./layout/dynamicLayout";
// import {useDispatch} from "react-redux"

function App() {

  const [inputVal , setInputVal] = useState("")

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/first",
          element : 
          <div>
            <p style={{color:"red" , fontSize : "80px"}}>first page</p>
            <input value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <Link to={`/first/${inputVal}`}>
              <button>dynamic number</button>
            </Link>
          </div>
        },
        {
          path : "/first/:number",
          element: <DynamicLayout/>,
          loader : loader
        }
      ]
    }
  ])

  // const dispatch = useDispatch()
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;