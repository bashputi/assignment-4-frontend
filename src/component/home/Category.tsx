import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="pb-8 md:pb-20">
            
            <h1 className=" text-xl md:text-3xl font-bold text-center mt-[10vh]">Shop By Category</h1>
            <div className="mt-8 md:mt-12 lg:mt-16">
            <section className="">
            <div data-aos="zoom-out" data-aos-duration="2500"  className="py-4 px-2 mx-auto max-w-screen-2xl sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                    <div
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                    >
                    <img
                        src="https://www.thisbigadventure.com/wp-content/uploads/2017/07/Rocky-Mountain-House-National-Historic-Site-1.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                       Tents
                    </h3>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
                    <div
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                    >
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/031/870/321/large_2x/lantern-mountain-the-night-the-mountains-hd-wallpaper-ai-generated-free-photo.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Lantern
                    </h3>
                    </div>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                    >
                        <img
                        src="https://image.made-in-china.com/226f3j00sarfNgKlgtbv/Outdoor-Hiking-Shoes-Outdoor-Hiking-Boots-Mountain-Climbing-Sneaker-Tripper-Shoes-Suede-Leather-Hiking-Shoes.webp"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Shoes
                        </h3>
                    </div>
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                    >
                        <img
                        src="https://cdn.thewirecutter.com/wp-content/media/2023/01/sleepingbags-2048px-33.jpeg?auto=webp&quality=75&width=1024"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        Sleeping Bag
                        </h3>
                    </div>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
                    <div
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                    >
                    <img
                        src="https://ae01.alicdn.com/kf/He0786a6c43eb47588fd02dfeb76547dck.jpg_640x640q90.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                       Bagpacks
                    </h3>
                    </div>
                </div>
                </div>
            </div>
            </section>

            </div>

            <div className="text-center mt-6 md:mt-12 lg:mt-16">
            <Link
            to="/products"
            className="animate-bounce focus:animate-none hover:animate-none inline-flex text-lg bg-[#003856] px-4 md:px-6 py-2 md:py-4 rounded-lg tracking-wide text-white"
            >
            <span className="ml-2 flex">Browse all Categories <FaArrowRightLong  className="mt-1.5 ml-2"/></span>
            </Link>
            </div>
        </div>
    );
};

export default Category;