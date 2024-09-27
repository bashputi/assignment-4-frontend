import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { useEffect } from 'react';
import { getSingleProduct, singleProductFormState, updateProductIntoState } from '../../Redux/features/ProductSlice';
import { useParams } from 'react-router-dom';
import { TProductProps } from '../../types/types';

type TFormInput = {
    title: string;
    image: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    rating: number;
    description: string;
};

const EditProduct = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(id)
    )
    }, [dispatch, id]);

    const product = useAppSelector(singleProductFormState) as TProductProps;


    const { register, handleSubmit, reset } = useForm<TFormInput>();
    const onSubmit: SubmitHandler<TFormInput>  = async(data) => {
    
        dispatch(updateProductIntoState({...product, ...data}));
      
          toast("Product Edited successfully!!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
           
        
    }

    return (
        <div className="mb-12">
        <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
<div className="text-2xl py-4 px-6 text-white bg-[#003856] hover:bg-[#02588a] border border-[#003856] rounded text-center font-bold uppercase">
Edit Product
</div>
<form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 " action="" method="POST">

<div className="mb-4 ">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
   Title
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="title"
    type="text"
    placeholder="Enter A Title"
    defaultValue={product?.title}
    {...register("title")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
    Image
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="image"
    type="text"
    defaultValue={product?.image}
    placeholder="Enter Image Link"
    {...register("image")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
    Price
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="price"
    type="number"
    min="0"
    placeholder="Enter Price"
    defaultValue={product?.price}
    {...register("price")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
    Category
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="category"
    type="text"
    placeholder="Enter Category"
    defaultValue={product?.category}
    {...register("category")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
    Brand
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="brand"
    type="text"
    placeholder="Enter Brand Name"
    defaultValue={product?.brand}
    {...register("brand")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
    Stock
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="stock"
    type="number"
    min="0"
    defaultValue={product?.stock}
    {...register("stock")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
    Ratings
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="rating"
    type="number"
    min="0"
    max="5"
    defaultValue={product?.rating}
    {...register("rating")}
  
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
    Description
  </label>
  <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="description"
    rows={4}
    placeholder="Enter additional information"
    defaultValue={product?.description}
    {...register("description")}
  
  />
</div>
<div className="flex items-center justify-center mb-4">
  <button
    className="text-white font-semibold bg-[#003856] hover:bg-[#02588a] border border-[#003856] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Edit Product
  </button>
</div>
</form>
</div>
<ToastContainer />
    </div>
    );
};

export default EditProduct;