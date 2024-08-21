import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateProductsMutation } from "../../Redux/features/productsApi";

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

const CreateProduct = () => {
    // const [ createProducts, { isLoading, isError } ] = useCreateProductsMutation();
    const { register, handleSubmit } = useForm<TFormInput>();

    const onSubmit: SubmitHandler<TFormInput>  = async(data) => {
       
console.log(data)
        // const res = await createProducts(data);
        // console.log(res)
    }

    return (
        <div className="mb-12">
            <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="text-2xl py-4 px-6 text-white bg-[#003856] hover:bg-[#02588a] border border-[#003856] rounded text-center font-bold uppercase">
    Create A Product
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
        {...register("title", { required: true })}
        required
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
        placeholder="Enter Image Link"
        {...register("image", { required: true })}
        required
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
        {...register("price", { required: true })}
        required
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
        {...register("category", { required: true })}
        required
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
        {...register("brand", { required: true })}
        required
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
        {...register("stock", { required: true })}
        required
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
        {...register("rating", { required: true })}
        required
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
        {...register("description", { required: true })}
        required
      />
    </div>
    <div className="flex items-center justify-center mb-4">
      <button
        className="text-white font-semibold bg-[#003856] hover:bg-[#02588a] border border-[#003856] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Create
      </button>
    </div>
  </form>
</div>

        </div>
    );
};

export default CreateProduct;