import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from "./pages/about/About"
import { createBrowserRouter,
  RouterProvider, Outlet} from "react-router-dom"
import Footer from './components/footer/Footer'
import Menu from './pages/menu/Menu'
import Pizza from './pages/pizza/Pizza'
import Cart from './pages/cart/Cart'

  const Layout = () => {
    return <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  }

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/pizza/:id",
    element: <Pizza />
  },
  {
    path: "/cart",
    element: <Cart />
  }
  ]
  }])

function App() {

  return (
    <div className='root'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
