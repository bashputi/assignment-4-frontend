import { useGetAllProductsQuery } from "../../Redux/features/productsApi";
import { TProductProps } from "../../types/types";


const Feature = () => {
  const {  data, isLoading } = useGetAllProductsQuery(undefined);

const products = data?.data?.products.slice(9, 13);

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
        <div className="py-8">
            {/* heading  */}
             <h1 className=" text-xl md:text-3xl font-bold text-center mt-[5vh]">Featured Products</h1>
            
            {/* card section  */}
            <div className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
  <div className="mx-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start ">
    {/* card  */}
    {
       products?.map((product:  TProductProps) => (
        <div key={product._id} className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
      <img
        src={product.image}
        alt=""
      />
    
      <h1 className="text-3xl my-5">{product.title}</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        incidunt!
      </p>
      <h2 className="font-semibold mb-5">${product.price}</h2>
      <button className="p-2 px-6 bg-[#003856] text-white rounded-md hover:bg-[#02588a]">
        Add To Cart
      </button>
    </div>
      ))
    }

    
  </div>
</div>

        </div>
    );
};

export default Feature;