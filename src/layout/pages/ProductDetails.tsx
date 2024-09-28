import { useState } from "react";
import { getSingleProduct, singleProductFormState } from "../../Redux/features/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { TProductProps } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from "../../Redux/features/CartSlice";
import { FaMinus } from "react-icons/fa";



const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  dispatch(getSingleProduct(id as string));
  const [cardBtn, setCartBtn] = useState(false);
  const [count, setCount] = useState(0);

  const product = useAppSelector(singleProductFormState) as TProductProps;

  const totalQuantity = product?.quantity - count || 0;

  const handleAddToCart = (product: TProductProps) => {
    toast("This product successfully added to cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      dispatch(addToCart({ product, quantity: count }));
      setCartBtn(true);
  };

    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img
            className="w-full h-full object-cover"
            src={product?.image}
            alt="Product Image"
          />
        </div>
        <div className=" -mx-2 mb-4">
          <div className="flex gap-5 px-2">
          <div className="inline-flex items-center mt-2">

      {
        count === 0 ? (
         <p className="bg-white rounded-l border text-gray-100 px-2 py-1">
          <FaMinus/>
          </p>) : (
         <button onClick={() => setCount(count - 1 )} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
          <FaMinus/>
          </button>)
      }
    <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
      {count}
    </div>
      {
        product.quantity === count ? (
          <p className="bg-white rounded-r border text-gray-100  px-2 py-1">
          <FaPlus />
          </p>
        ) : (
          <button onClick={() => setCount(count + 1)} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
          <FaPlus />
          </button>
        )
      }

    </div>
    {
      cardBtn ? ( <Link to="/carts"> <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full font-bold ">
        Cart Page
      </button></Link>) : (
      <button onClick={() => handleAddToCart(product)} className="w-full bg-[#003856] hover:bg-[#02588a] text-white py-2 px-4 rounded-full font-bold ">
      Add to Cart
    </button>
      )
    }      
          </div>

        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {product?.title}
        </h2>
       
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <span className="text-gray-600 dark:text-gray-300 ">${product?.price}</span>
          </div>
          <div>
         
            { totalQuantity === 0 ? (
              <h1><span className="font-bold text-gray-700">Available Quantity:</span> <span className="font-bold text-red-500">Out of Stock</span></h1>
            ) : ( <h1><span className="font-bold text-gray-700">Available Quantity:</span> <span>{totalQuantity} pics</span></h1> )} 
           
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">
            Brand: 
          </span>
          {product?.brand}
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">
            Category:
           </span>
          {product?.category}
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Product Description:
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
         {product?.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default ProductDetails;