import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Country } from './pages/Country'
import { About } from './pages/About'
import { AppLayout } from './components/Layout/AppLayout'
import { ErrorPage } from './pages/ErrorPage'
import { CountryDetails } from './components/Layout/countryDetails'

const App=()=>{

  const x = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"country",
          element:<Country/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"country/:id",
          element:<CountryDetails/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router={x}></RouterProvider>
  )
}

export default App;