import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectTotalPrice } from "../../Redux/features/CartSlice";

type Inputs = {
    name: string;
    email: string;
    number: number;
    address: string;
};

const Checkout = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const dispatch = useAppDispatch();
    const cartTotalPrice = useAppSelector(selectTotalPrice);
    const totalPrice = cartTotalPrice + 5;

    

    return (
         <div className="my-8">
         <form  className="py-4 px-6 flex justify-center gap-5" action="" method="POST">
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

<div className="flex-1">


<div className="flex items-center justify-center mb-4">
      <button
        className="text-white font-semibold bg-[#003856] hover:bg-[#02588a] border border-[#003856] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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