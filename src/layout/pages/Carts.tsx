import { Link } from "react-router-dom";
import { cartProduct } from "../../Redux/features/CartSlice";
import { useAppSelector } from "../../Redux/hooks";
import { FaArrowLeft } from "react-icons/fa";
import SingleCart from "../../component/cart/SingleCart";



const Carts = () => {
  const cartItems = useAppSelector(cartProduct);
  console.log(cartItems)
 
    return (
        <div>
            <div className="container mx-auto mt-10">
  <div className="sm:flex  my-10">
    <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
      <div className="flex justify-between pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
      </div>
<div>
      {/* cart item that added  */}
      {
      cartItems.length > 0 ? (
        cartItems.map((product) => (
         <SingleCart key={product._id} product={product}></SingleCart>
        ))
      ) : (
        <div> No  Item in the cart</div>
      )
    }

   
</div>
      
      <Link to="/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
      <FaArrowLeft className="mt-1 mr-2"/>
        Continue Shopping
      </Link>
    </div>
    <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items 3</span>
        <span className="font-semibold text-sm">590$</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>$600</span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Carts;