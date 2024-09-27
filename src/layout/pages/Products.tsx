import { ChangeEvent } from "react";
import { clearFilters, selectfilters, selectProducts, selectSearchQuery, setSearchQuery, setSort } from "../../Redux/features/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { TProductProps } from "../../types/types";
import { Link } from "react-router-dom";


const Products = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const filters = useAppSelector(selectfilters);

    const searchProductQuery = useAppSelector(selectSearchQuery);
    
    const handleInputSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        dispatch(setSearchQuery(event.target.value));
      };

      const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
       const value = event.target.value;
        if (value === "low") {
            dispatch(setSort("low-to-high"));
        } else if (value === "high") {
            dispatch(setSort("high-to-low")); 
        } else {
            dispatch(clearFilters());
        }
      };

 const searchProduct = products.products
    ?.filter((product: TProductProps) =>
      product.title.toLocaleLowerCase().includes(searchProductQuery.toLocaleLowerCase()) || 
    product.description.toLocaleLowerCase().includes(searchProductQuery.toLocaleLowerCase())
    )
    .filter(
      (product: TProductProps) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    )
    .sort((a, b) => {
      if (filters.sort === "low-to-high") {
        return a.price - b.price;
      } else if (filters.sort === "high-to-low") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    console.log(searchProduct)
    
    return (
        <div className="pb-8 md:pb-12 lg:pb-16 px-4 md:px-8">
            {/* heading  */}
            <h1 className="text-center py-8 md:py-12 lg:py-16 text-2xl md:text-4xl font-semibold ">Feature Products</h1>

     <div className="">
           {/* filter section  */}
              <div className="flex justify-between">
                {/* search box  */}
                   <div>
                    <p className="mb-3  font-semibold">Search by name or description</p>
                   <div className="relative">
                    <input
                        type="text"
                        className="h-12 pr-8 pl-5 rounded border border-gray-400 focus:shadow focus:outline-none"
                        placeholder="Search anything..."
                        onChange={handleInputSearchQuery}
                        />
                    </div>
                   </div>
            
                {/* sorting*/}
                <div className="w-40 mt-5 md:mt-8 font-semibold">
                <select onChange={handleSortChange} className="block  w-sm text-sm font-medium transition duration-75 border border-bg-[#003856a] rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
                <option>Sorting</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
                <option value="reset">Reset All</option>
                </select>
                </div>
            
                </div>
                
                {/* card section  */}
                <div className="pt-4 md:pt-8 max-w-screen-xl mx-auto">
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        
                    {/* CARD */}
                    {
                        searchProduct?.map((product: TProductProps) => (
                            <div key={product?._id} className="rounded bg-white overflow-hidden shadow-lg flex flex-col">
                            <a href="#" />
                            <div className="relative">
                                <a href="#">
                                <img
                                    className="w-full h-56"
                                    src= {product?.image}
                                    alt="Sunset in the mountains"
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                </a>
                                <Link to={`/products/${product?._id}`}>
                                <button className="text-xs absolute top-0 right-0 bg-[#003856] px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                   Details
                                </button>
                                </Link>
                            </div>
                            <div className="px-6 py-4 mb-auto">
                                <a
                                href="#"
                                className="font-medium text-lg hover:text-[#003856] transition duration-500 ease-in-out inline-block mb-2"
                                >
                                {product?.title}
                                </a>
                                <p className="text-gray-500 text-sm">
                                {product?.description?.length > 100 ? product.description.slice(0, 100) + " ... ... ..." : product.description}
                                </p>
                            </div>
                            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                <span
                                
                                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                                >
                                
                                <span className="ml-1">{product?.rating} Ratings</span>
                                </span>
                                <span
                                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                                >
                                
                                <span className="ml-1">{product?.price}</span>
                                </span>
                            </div>
                            </div>
                        ))
                    }
                </div>
                </div>

     </div>
        </div>
    );
};

export default Products;