import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Recomended = () => {
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
          <div className="pt-4 md:pt-8 max-w-screen-xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    
                {/* CARD */}
                <div className="rounded bg-white overflow-hidden shadow-lg flex flex-col">
                <a href="#" />
                <div className="relative">
                    <a href="#">
                    <img
                        className="w-full"
                        src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href="#">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                    </div>
                    </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                    <a
                    href="#"
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                    >
                    Why to eat salad?
                    </a>
                    <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                    </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                    <span
                    
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
                    
                    <span className="ml-1">16 hours ago</span>
                    </span>
                    <span
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
                    
                    <span className="ml-1">9 Comments</span>
                    </span>
                </div>
                </div>
             

            </div>
            </div>

          </div>
    );
};

export default Recomended;