import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TProductProps } from "../../types/types";
import { useState } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import Swal from 'sweetalert2'
import { removeFromCart } from "../../Redux/features/CartSlice";


interface SingleCardProps {
    product: TProductProps
}

const SingleCart = ({ product }: SingleCardProps) => {
    const [quantity, setQuantity] = useState(product.selectedQuantity);
    const [updateCard, setUpdateCard] = useState(false);
    const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          dispatch(removeFromCart(product._id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Cart has been deleted.",
          icon: "success"
        });
      }
    });
  }

    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img
            src={product.image}
            alt="Black Leather Purse"
            className="h-full object-center object-cover md:block hidden"
          />      
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

          <div className="flex items-center justify-between w-full">
            <p className="text-base font-black leading-none text-gray-800">
              {product.title}
            </p>
          <button onClick={handleRemoveFromCart}> <MdDelete className="w-5 h-5 text-red-600"/></button>
          </div>
          <div className="flex justify-evenly font-semibold mt-2">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">Price: ${product.price}</p>
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">Total Price: ${product.price * quantity}</p>
        </div>
          <p className="text-xs leading-3 text-gray-600 py-4">Rating: {product.rating}</p>
          <p className="w-96 text-sm leading-3 text-gray-600">
           Available Quantity: {product.quantity - quantity}
          </p>
          <div className="flex items-center justify-between pt-5">
            <div className="flex itemms-center">
            {
     quantity === 0 ? (
       <p className="bg-white rounded-l border text-gray-100 px-2 py-1">
        <FaMinus/>
        </p>) : (
       <button onClick={() => setQuantity(quantity - 1 )} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
        <FaMinus/>
        </button>)
    }
  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
    {quantity}
  </div>
    {
      product.quantity === quantity ? (
        <p className="bg-white rounded-r border text-gray-100  px-2 py-1">
        <FaPlus />
        </p>
      ) : (
        <button onClick={() => setQuantity(quantity + 1)} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
        <FaPlus />
        </button>
      )
    }
            </div>
            <div>
    <button className="bg-green-600 px-2 font-semibold hover:bg-green-500 py-2 text-sm text-white ">Update Item</button>
  </div>
          </div>
        </div>
      </div>
    );
};

export default SingleCart;