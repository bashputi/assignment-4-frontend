

const Feature = () => {
    return (
        <div className="py-8">
            {/* heading  */}
             <h1 className=" text-xl md:text-3xl font-bold text-center mt-[5vh]">Featured Products</h1>
            
            {/* card section  */}
            <div className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
  <div className="mx-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start ">
    {/* card  */}
    <div className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
      <img
        src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
        alt=""
      />
    
      <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        incidunt!
      </p>
      <h2 className="font-semibold mb-5">$29.99</h2>
      <button className="p-2 px-6 bg-[#003856] text-white rounded-md hover:bg-[#02588a]">
        Add To Cart
      </button>
    </div>

    
  </div>
</div>

        </div>
    );
};

export default Feature;