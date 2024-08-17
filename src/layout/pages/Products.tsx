

const Products = () => {
    return (
        <div className="pb-8 md:pb-12 lg:pb-16">
            {/* heading  */}
            <h1 className="text-center py-8 md:py-12 lg:py-16 text-2xl md:text-4xl font-semibold ">Feature Products</h1>

     <div className="md:flex gap-2 lg:gap-4 px-2 lg:px-0">
           {/* filter section  */}
              <div>
                {/* search box  */}
                   <div>
                    <p className="mb-3  font-semibold">Search by name or description</p>
                   <div className="relative">
                    <input
                        type="text"
                        className="h-12 pr-8 pl-5 rounded border border-gray-400 focus:shadow focus:outline-none"
                        placeholder="Search anything..."
                        />
                    </div>
                   </div>
                {/* filter by category*/}
                <div className="w-40 mt-5 md:mt-8 font-semibold">
                    <p>Filter by Category</p>
                <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
                    <input
                    type="checkbox"
                    id="htmlCheckbox"
                    name="languageCheckbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                    />
                    <label htmlFor="htmlCheckbox" className="flex w-full space-x-2 text-sm">
                    
                    HTML
                    </label>
                </div>
                </div>
             
                {/* sorting*/}
                <div className="w-40 mt-5 md:mt-8 font-semibold">
                    <p>Sorting by price</p>
                <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
                    <input
                    type="checkbox"
                    id="htmlCheckbox"
                    name="languageCheckbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                    />
                    <label htmlFor="htmlCheckbox" className="flex w-full space-x-2 text-sm">
                    
                    HTML
                    </label>
                </div>
                </div>

                {/* clear button  */}
                    <button className="p-2 px-6 bg-[#003856] mt-6 text-white rounded-md hover:bg-[#02588a]">Clear All</button>
                </div>
                
    
                {/* card section  */}
                <div className="pt-4 md:pt-8 max-w-screen-xl mx-auto">
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        
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
                        <a href="#!">
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
            {/* pagination  */}
            <nav className="mt-8 md:mt-12 flex justify-center space-x-4" aria-label="Pagination">
            <span className="rounded-lg border border-teal-500 px-2 py-2 text-gray-700">
                <span className="sr-only">Previous</span>
                <svg
                className="mt-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
                </svg>
            </span>
            <span className="rounded-lg border border-teal-500 bg-teal-500 px-4 py-2 text-white">
                1
            </span>
            <a
                className="rounded-lg border border-teal-500 px-4 py-2 text-gray-700"
                href="/page/2"
            >
                2
            </a>
            <a
                className="rounded-lg border border-teal-500 px-4 py-2 text-gray-700"
                href="/page/3"
            >
                3
            </a>
            <a
                className="rounded-lg border border-teal-500 px-2 py-2 text-gray-700"
                href="/page/2"
            >
                <span className="sr-only">Next</span>
                <svg
                className="mt-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                ></path>
                </svg>
            </a>
            </nav>

        </div>
    );
};

export default Products;