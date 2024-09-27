import { useEffect } from "react";
import { getSingleProduct, singleProductFormState } from "../../Redux/features/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { TProductProps } from "../../types/types";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(getSingleProduct(id)
  )
  }, [dispatch, id]);

  const product = useAppSelector(singleProductFormState) as TProductProps;

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
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-[#003856] hover:bg-[#02588a] text-white py-2 px-4 rounded-full font-bold ">
              Add to Cart
            </button>
          </div>
         
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {product?.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {product?.description}
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <span className="text-gray-600 dark:text-gray-300 ">${product?.price}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Availability:
            </span>
            <span className="text-gray-600 dark:text-gray-300">{product?.stock}</span>
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
         {product?.description}
         {product?.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default ProductDetails;