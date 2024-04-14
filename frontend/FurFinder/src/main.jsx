import './index.css'   
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import Home from './Pages/Home.jsx'               //* Home Page
import FindAPet from './Pages/FindAPet.jsx'       //* Find a Pet Page
import PetProfile from './Pages/PetProfile.jsx'   //* Pet Profile Page
import Login from './Pages/Login.jsx'             //* Login Page

import AddPet from './Pages/AddPet.jsx'             //* Add Pet Page
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  { 
  path: '/', 
  element: <Home/>,
  errorElement: <div>404 Not Found</div>
  },
  {
    path: '/FindAPet',
    element: <FindAPet/>
  },
  {
    path: '/PetProfile',
    element: <PetProfile/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/AddPet',
    element: <AddPet/>
  }

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
