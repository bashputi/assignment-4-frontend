import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGetAllProductsQuery } from "../../Redux/features/productsApi";
import { TProductProps } from "../../types/types";
import { useAppDispatch } from "../../Redux/hooks";
import { setProducts } from "../../Redux/features/ProductSlice";
import { useEffect } from "react";

const Recomended = () => {
    
    const {  data, isLoading } = useGetAllProductsQuery(undefined);
    const dispatch = useAppDispatch();
   
 
useEffect(() => {
    const Item = data?.data?.products;
    dispatch(setProducts(Item));
}, [data, dispatch])

    const products = data?.data?.products.slice(0, 8);
  
    return (
        <div className="max-w-screen-xl mx-auto pb-16">
            {/* heading section  */}
          <div className="text-white font-semibold pt-5 md:pt-10 flex justify-between">
          <h1 className=" text-xl md:text-3xl"> Best Selling</h1>  
            <div className="mt-2">
            <Link to="/products">  
                <p className="text-lg flex gap-2">
                See All    <FaArrowRightLong className="mt-1.5"/>
                </p></Link>
            </div>
          </div>
          {/* card section */}
          <div  className="pt-4 md:pt-8 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         {
          products?.map((item:  TProductProps) => (
                <div key={item?._id}>
                             {/* CARD */}
                <div  className="rounded bg-white overflow-hidden shadow-lg flex flex-col">
                  
                   <div className="relative">
                       <Link to="/products">
                       <img
                           className="w-full"
                           src={item?.image}
                       />
                       <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                       </Link>

                   </div>
                   <div className="px-6 py-4 mb-auto">
                       <Link to="/products"
                       className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                       >
                       {item?.title}
                       </Link>
                    
                   </div>
                   <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                       <span
                       
                       className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                       >
                       
                       <span className="ml-1">${item?.price}</span>
                       </span>
                       <span
                       className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                       >
                       
                       <span className="ml-1">{item?.category}</span>
                       </span>
                   </div>
                   </div>
                </div>
            ))
         }

          </div>
          </div>
          </div>
    );
};

export default Recomended;