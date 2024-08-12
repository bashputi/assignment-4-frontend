
import Banner from "../../component/home/Banner";
import Category from "../../component/home/Category";
import Feature from "../../component/home/Feature";
import Recomended from "../../component/home/Recomended";
import Testimonial from "../../component/home/Testimonial";
import Other from "../../component/home/Other";


export default function Home() {
  return (
    <div className="mx-auto container">
   <Banner />
   <div className="relative">
  {/* <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#849E8A] ">
  <Recomended />
  </div>
  <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#6c7355] text-white">
  <Category />
  </div>
  <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#D9C5BC]">
  <Feature />
  </div>
  <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#989e8f]">
  <Testimonial />
  </div>
  <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#c1c9cd] ">
  <Other />
  </div> */}
</div>

  
   
   

    </div>
  );
}