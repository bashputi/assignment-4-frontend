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

    if (isLoading) return (<div className="flex justify-center" aria-label="Loading..." role="status">
        <svg className="h-12 w-12 animate-spin stroke-gray-500" viewBox="0 0 256 256">
          <line
            x1={128}
            y1={32}
            x2={128}
            y2={64}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={224}
            y1={128}
            x2={192}
            y2={128}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={128}
            y1={224}
            x2={128}
            y2={192}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={32}
            y1={128}
            x2={64}
            y2={128}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          ></line>
        </svg>
      </div>)
  
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
                <div  data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0" key={item?._id}>
                             {/* CARD */}
                <div  className="rounded bg-white overflow-hidden shadow-lg flex flex-col">
                  
                   <div className="relative">
                       <Link to="/products">
                       <img
                           className="w-full h-44"
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