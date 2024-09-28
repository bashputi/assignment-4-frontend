import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { cartProduct, clearCart, selectTotalPrice } from "../../Redux/features/CartSlice";
import Swal from "sweetalert2";

type Inputs = {
    name: string;
    email: string;
    phone: number;
    address: string;
    COD: boolean;
};

const Checkout = () => {
    const navigate = useNavigate();
    const cartItems = useAppSelector(cartProduct);
    const { register, handleSubmit } = useForm<Inputs>();
    const dispatch = useAppDispatch();
    const cartTotalPrice = useAppSelector(selectTotalPrice);
    const totalPrice = cartTotalPrice + 5;

    const onSubmit = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order has been placed successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch(clearCart());
          navigate("/success");
    };

    return (
         <div className="my-8">
         <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 flex justify-center gap-5" action="" method="POST">
        <div className="flex-1 border border-gray-600 p-5 rounded">
        <div className="mb-4 ">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
       Full Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter Your Full Name"
        {...register("name", { required: true })}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Enter Valid Email"
        {...register("email", { required: true })}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="number"
        placeholder="Enter Your Phone Number"
        {...register("phone", { required: true })}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
        Delivery Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        type="text"
        placeholder="Enter Your Delivery Address"
        {...register("address", { required: true })}
        required
      />
    </div>
        </div>

<div className="flex-1 border border-gray-600 p-5 rounded">
<div>
    <h1 className="uppercase border-b border-amber-600 pb-3 font-semibold text-xl mb-5">Card Summery</h1>
   <div className="flex justify-between">Total Items: <span>{cartItems.length}</span></div>
   <div className="flex justify-between my-2">Total Price: <span>${cartTotalPrice}</span></div>
   <div className="flex justify-between border-b border-amber-600 pb-3">Shipping fee: <span>$5</span></div>
   <div className="flex justify-between mt-4">Total: <span>${totalPrice}</span></div>
   <div className="my-5">
        <input type="checkbox"  {...register("COD", { required: true })}
        required name="COD" id="COD" /> <span> Cash On Delivery</span>
   </div>
</div>

<div className="flex justify-center pt-8">
     <button
        className="text-white font-semibold bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded"
        type="submit">
       Place Order
      </button>
    </div>
</div>
  </form>
         </div>
    );
};

export default Checkout;