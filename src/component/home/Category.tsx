import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="pb-8 md:pb-20">
            
            <h1 className=" text-xl md:text-3xl font-bold text-center mt-[10vh]">Shop By Category</h1>
          

            <div className="mt-8 md:mt-12 lg:mt-16">
            <section className="">
            <div className="py-4 px-2 mx-auto max-w-screen-2xl sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                    <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Wines
                    </h3>
                    </a>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
                    <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Gin
                    </h3>
                    </a>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                    <a
                        href=""
                        className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                    >
                        <img
                        src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Whiskey
                        </h3>
                    </a>
                    <a
                        href=""
                        className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                    >
                        <img
                        src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Vodka
                        </h3>
                    </a>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
                    <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Brandy
                    </h3>
                    </a>
                </div>
                </div>
            </div>
            </section>

            </div>

            <div className="text-center mt-6 md:mt-12 lg:mt-16">
            <Link
            to="/category"
            className="animate-bounce focus:animate-none hover:animate-none inline-flex text-lg bg-[#003856] px-4 md:px-6 py-2 md:py-4 rounded-lg tracking-wide text-white"
            >
            <span className="ml-2 flex">Browse all Categories <FaArrowRightLong  className="mt-1.5 ml-2"/></span>
            </Link>
            </div>
        </div>
    );
};

export default Category;