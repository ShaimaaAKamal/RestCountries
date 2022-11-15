import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../Home/Home';
import CountryDetails from '../CountryDetails/CountryDetails' 
import CountryCard from '../CountryCard/CountryCard';
import './App.css';


function App() {
  let routes=createBrowserRouter([{
    path:'',element:<MasterLayout/>,children:[
      {index:true,element: <Home/>},
      {path:'details',element: <CountryDetails/>}
    ]
  }])
  return (
    <div className="App">
         <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
