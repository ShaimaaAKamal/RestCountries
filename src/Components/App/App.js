import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../Home/Home';
import CountryDetails from '../CountryDetails/CountryDetails' ;
import NotFound from '../Notfound/NotFound';
import './App.css';
import { useState } from 'react';


function App() {
  let [mode,setMode]=useState('light')
  let routes=createBrowserRouter([{
    path:'',element:<MasterLayout/>,errorElement:<NotFound/>,children:[
      {index:true,element: <Home mode={mode} setMode={setMode}/>},
      {path:'details',element: <CountryDetails mode={mode} setMode={setMode}/>}
    ]
  }])
  return (
    <div className="App">
         <RouterProvider router={routes} />
    </div>
  );
}

export default App;
