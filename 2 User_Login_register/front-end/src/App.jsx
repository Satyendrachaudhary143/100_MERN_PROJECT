import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Register from './Component/Register'
import Login from './Component/Login';
import Forgot from './Component/Forgot';
import Home from './Component/Home';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState(false);
  const abc = (e) => {
    setUserName(e);
  }
  const router = createBrowserRouter([
    
    {
      path: "/resgister",
      element:<Register/>
},  
    {
      path: "/login",
      element: <Login  />
    }
    ,
    {
      path: "/forgot",
      element:<Forgot/>
    },
    {
      path: "/home",
      element:userName ? <Home/>:<Login/>
    }


  ]);

  return <RouterProvider router={router}/>
}

export default App
