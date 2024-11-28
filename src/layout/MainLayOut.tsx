import { Outlet } from "react-router-dom";
import Navbar from "../component/home/Navbar";
import Footer from "../component/home/Footer";
import usePageRefresh from "../hook/UsePageRefresh";



const MainLayOut = () => {
    usePageRefresh();
    return (
        <div className=" flex flex-col min-h-[100vh]">
         <div className="flex-grow">
         <Navbar></Navbar>
           <div className="container mx-auto"> <Outlet></Outlet></div>
         </div>
            <div className="flex-shrink-0">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayOut;