
import { NavLink } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center">
         <div>
        
          
        
        <div className="text-center font-bold text-xl lg:text-3xl">Oops! Something's Went Wrong...</div>
       <div className="flex justify-center">
       <div className=" my-10 btn text-white bg-amber-600 py-2 px-4 rounded font-semibold"><button><NavLink to="/">Go Back</NavLink></button></div>
       </div>
         </div>
    
     </div>
        
    );
};

export default NotFound;