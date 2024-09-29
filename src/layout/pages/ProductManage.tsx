import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TProductProps } from "../../types/types";
import Swal from 'sweetalert2'
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { deleteProduct, selectProducts } from "../../Redux/features/ProductSlice";



const ProductManage = () => {
  const Item = useAppSelector(selectProducts);
  const cartProduct = Item.products || [];

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const limit = 8;

  const totalPages =  Math.ceil(cartProduct?.length / limit);
  const currentPage = cartProduct.slice((page -1) * limit, page * limit);

  useEffect(() => {
    if(page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page])

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          dispatch(deleteProduct(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

    return (
      <>
        <div className="flex mt-5 gap-5 md:gap-8 justify-evenly">
          {/* create product button  */}
          <div className="mt-8">
          <Link
          to="/create-product">
          <button className="px-6 py-2 min-w-[120px] text-center text-white bg-[#003856] hover:bg-[#02588a] border border-[#003856] rounded"
        >
          Create Product
          </button>
        </Link>
          </div>

            {/* all added products  */}
            <div>
            <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Image
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Title
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Price
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Category
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Edit
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Delete
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
      {
      currentPage?.map((product: TProductProps) => (
  <tr data-aos="fade-right" data-aos-duration="3000"
   key={product._id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <img src={product?.image} alt="image"  className="w-8 h-8 md:w-12 md:h-12 bg-gray-800 rounded-full"/>
          </td>
        <td className="px-6 py-4 whitespace-nowrap">{product?.title}</td>
        <td className="px-6 py-4 whitespace-nowrap">{product?.price}</td>
        <td className="px-6 py-4 whitespace-nowrap">{product?.category}</td>
        <td className="px-6 py-4 whitespace-nowrap">
        <Link to={`/edit-product/${product?._id}`}>
        <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
            Edit
          </button>
        </Link>
          </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <button onClick={() => handleDelete(product._id)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
            Delete
          </button>
          </td>
  </tr>
       ))
      }
  </tbody>
</table>
            </div>
        </div>
         <div>
         {/* pagination  */}
         
      <nav className="my-8 md:my-12 flex justify-center space-x-4" aria-label="Pagination">
      <span className="rounded-lg border border-[#003856] px-2 py-2 text-gray-700">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}  ><IoIosArrowBack className="mt-2"/></button>
      </span>
  
      
      {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index +1;
          return (
            <a key={pageNumber} className={`rounded-lg border border-[#003856] px-4 py-2.5 
              ${pageNumber === page ? 'bg-[#003856] text-white' : 'text-gray-700'}`}
              href="#" onClick={(e) => {e.preventDefault(); setPage(pageNumber)}}>{pageNumber}</a>
          );
        })}
      
      <span className="rounded-lg border border-[#003856] px-2 py-2 text-gray-700">
      <button onClick={() => setPage((prev) => Math.max(prev + 1))} disabled={page === totalPages}><IoIosArrowForward className="mt-2"/></button>
      </span>
      </nav>

      </div>
      </>
    );
};

export default ProductManage;