import { Link } from "react-router-dom";
import { cartProduct } from "../../Redux/features/CartSlice";
import { useAppSelector } from "../../Redux/hooks";
import { FaArrowLeft } from "react-icons/fa";
import SingleCart from "../../component/cart/SingleCart";
import CartSummary from "../../component/cart/CartSummary";



const Carts = () => {
  const cartItems = useAppSelector(cartProduct);
 
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
   <CartSummary />
  </div>
</div>

        </div>
    );
};

export default Carts;