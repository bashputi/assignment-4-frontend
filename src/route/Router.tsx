import { createBrowserRouter } from "react-router-dom";
import MainLayOut from '../layout/MainLayOut.tsx'
import NotFound from '../layout/NotFound.tsx'
import Home from '../layout/home/Home.tsx'
import About from "../layout/pages/About.tsx";
import Products from "../layout/pages/Products.tsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/carts",
          element: <Products />,
        },
        {
          path: "/wishlist",
          element: <Products />,
        },
      ]
    },
  ]);

export default router;