
import Banner from "../../component/home/Banner";
import Category from "../../component/home/Category";
import Feature from "../../component/home/Feature";
import Recomended from "../../component/home/Recomended";
import Testimonial from "../../component/home/Testimonial";
import Other from "../../component/home/Other";
import BannerTwo from "../../component/home/BannerTwo";


export default function Home() {
  return (
    <div className="mx-auto container">
    <BannerTwo /> 
   <div className="relative">
   <div className="sticky top-0 flex flex-col bg-gray-200">
  <Category />
  </div>
  <div className="sticky top-0  flex flex-col bg-[#849E8A] ">
  <Recomended />
  </div>
 
</div>


  <div className="bg-gray-50">
  <Feature />
  </div>
  
  <div className=" flex flex-col bg-gray-500">
  <Testimonial />
  </div>
  <div className="  flex flex-col  ">
  <Other />
  </div>
   
   

    </div>
  );
}