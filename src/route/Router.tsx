import { createBrowserRouter } from "react-router-dom";
import MainLayOut from '../layout/MainLayOut.tsx'
import NotFound from '../pages/notFound/NotFound.tsx'
import Checkout from "../component/cart/Checkout.tsx";
import Success from "../component/cart/Success.tsx";
import Home from "../pages/home/Home.tsx";
import About from "../pages/about/About.tsx";
import Products from "../pages/product/Products.tsx";
import CreateProduct from "../pages/product/CreateProduct.tsx";
import EditProduct from "../pages/product/EditProduct.tsx";
import Carts from "../pages/cart/Carts.tsx";
import ProductDetails from "../pages/product/ProductDetails.tsx";
import ProductManage from "../pages/product/ProductManage.tsx";


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
          path: "/edit-product/:id",
          element: <EditProduct />,
        },
        {
          path: "/products/:id",
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
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      
      ]
    },
  ]);

export default router;