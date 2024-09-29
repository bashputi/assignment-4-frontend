import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    return (
        <div  className="bg-gray-50">
        <div  className="container mx-auto px-4 py-4">
         
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large item */}
            <div data-aos="fade-right" data-aos-duration="2000"  className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://images.ctfassets.net/7mmwp5vb96tc/113343/9155b6ae5fce3bf21e7212fd67ad5879/senja-norway-hgr-146868_1920-photo_shutterstock.jpg?q=75&w=3840&fm=webp"
                alt="Nature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
                  <p className="text-white">
                    Discover the beauty of the natural world
                  </p>
                </div>
              </div>
            </div>
            {/* Two small items */}
            <div data-aos="fade-left" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://plus.unsplash.com/premium_photo-1676140636629-42d644a91125?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9uZmlyZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Bonfire"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Bonfire</h4>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.exploresquamish.com/site/assets/files/14819/scott-goodwill-359336-unsplash.2400x1364.webp"
                alt="camping"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Camping</h4>
                </div>
              </div>
            </div>
            {/* Three medium items */}
            <div data-aos="fade-left" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.safesplash.com/hubfs/camping%20kids.jpg"
                alt="quallity time"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Quality Time</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.reserveamerica.com/articles/wp-content/uploads/2024/07/8bda6803-a139-48c5-b1b8-fec14ebbfdfc.jpg"
                alt="Relaxation"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Alone Time
                  </h4>
                </div>
              </div>
            </div>
            {/* bottom cards */}
            <div data-aos="fade-up" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://thebestcamps.com/camp-admin/camp-images/594-large.jpg?1726329095.0381"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Swimming</h4>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TOix8jSxkbw02kpwvgNFpXzF63-b8hGMYWfBcaLi3fUnGeG6nNWeB02Z2GDdusp5Oyo&usqp=CAU"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Climbing</h4>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mxMVFCFb3cjd2mmoqLPnXeK1gOBG6PO6zA&s"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Kayaking</h4>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000"  className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.ryanmoodyfishing.com/wp-content/uploads/2024/04/Ryan_Fishlift_Barra_PortClinton_Trolling_DeepDiver-6.jpg"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Fishing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default BannerTwo;