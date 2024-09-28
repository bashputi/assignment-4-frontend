import { Link } from "react-router-dom";
import { cartProduct, selectTotalPrice } from "../../Redux/features/CartSlice";
import { useAppSelector } from "../../Redux/hooks";


const CartSummary = () => {
    const cartItems = useAppSelector(cartProduct);
    const cartTotalPrice = useAppSelector(selectTotalPrice);
    console.log( cartTotalPrice)

    return (
        <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items </span>
          <span className="font-semibold text-sm">{cartItems?.length}</span>
        </div>
       
      
        
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${cartTotalPrice}</span>
          </div>
          <Link to="/checkout"><button className="bg-amber-500 font-semibold hover:bg-amber-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button></Link>
        </div>
      </div>
    );
};

export default CartSummary;