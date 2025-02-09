import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <>
     <Home/>
      </>
    },
    {
      path:"/about",
      element:<><About></About></>
    },{
      path:"/contact",
      element:<><Contact></Contact></>
    },{
      path:"/login",
      element:<><Login></Login></>
    }
  ])

  return (
   <RouterProvider router = {router} />
  )
}

export default App
