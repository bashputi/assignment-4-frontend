import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

return (
<div className="">
  <div className="container mx-auto">
    <nav className="bg-[#84869B] py-2.5 rounded-sm shadow-xl top-0 ">
      <div className="flex flex-wrap items-center justify-between px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            className="h-6 pl-6 pr-3 sm:h-9"
            alt="Trail Hunter Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Trail Hunter
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[white]" : "" }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[white]" : "" }
                aria-current="page"
              >
                About US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[white]" : "" }
                aria-current="page"
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product_manage"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[white]" : "" }
                aria-current="page"
              >
                Manage Product
              </NavLink>
            </li>
            <li className="mt-1 mb-2 md:mb-0">
              <NavLink
                to="/carts"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[white]" : "" }
                aria-current="page"
              >
                <FaShoppingCart />
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                to="/wishlist"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[white]" : "" }
                aria-current="page"
              >
                <IoBookmarksSharp />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>

);
};

export default Navbar;