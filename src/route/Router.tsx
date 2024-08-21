import { createBrowserRouter } from "react-router-dom";
import MainLayOut from '../layout/MainLayOut.tsx'
import NotFound from '../layout/NotFound.tsx'
import Home from '../layout/home/Home.tsx'
import About from "../layout/pages/About.tsx";
import Products from "../layout/pages/Products.tsx";
import ProductDetails from "../layout/pages/ProductDetails.tsx";
import Carts from "../layout/pages/Carts.tsx";
import Wishlist from "../layout/pages/Wishlist.tsx";
import ProductManage from "../layout/pages/ProductManage.tsx";
import CreateProduct from "../layout/pages/CreateProduct.tsx";
import EditProduct from "../layout/pages/EditProduct.tsx";


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
          path: "/create-product",
          element: <CreateProduct />,
        },
        {
          path: "/edit-product",
          element: <EditProduct />,
        },
        {
          path: "/products/id",
          element: <ProductDetails />,
        },
        {
          path: "/product_manage",
          element: <ProductManage />,
        },
        {
          path: "/carts",
          element: <Carts/>,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      
      ]
    },
  ]);

export default router;