import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/features/productsApi";


const ProductManage = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  console.log(data)

    return (
        <div className="flex mt-5 gap-5">
          {/* create product button  */}
          <div>
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
        Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Email
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Role
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Status
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Action
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
      <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
      <td className="px-6 py-4 whitespace-nowrap">Admin</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
          Edit
        </button>
        <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
          Delete
        </button>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
      <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
      <td className="px-6 py-4 whitespace-nowrap">User</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          Inactive
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
          Edit
        </button>
        <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

            </div>
        </div>
    );
};

export default ProductManage;