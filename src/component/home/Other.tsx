

const Other = () => {
  return (
    <div className="">
     
   
      <div className="max-w-7xl mx-auto py-6 px-6  lg:px-12 lg:py-28">
    <div className="flex flex-col lg:flex-row">
      <div
        className="w-full lg:w-1/3 p-10"
      >
        <h1 className="text-7xl text-gray-600 leading-tight">
         Camping Essentials
        </h1>
        <h1 className="text-3xl text-gray-600">TENTS</h1>
        <h1 className="text-3xl text-gray-600">BACKPACKS</h1>
        <h1 className="text-7xl text-gray-600">Survival Gear</h1>
        <p className="text-2xl text-gray-600 font-light mt-8 leading-relaxed">
       Our top-quality camping gear is designed to make your outdoor adventures safe,
      comfortable, and unforgettable. From durable tents to lightWeight cooking
       equipment, we've got everything you need to embrace the great out doors. 
       Gear up and make your next camping trip the best one yet!
        </p>
        <div className="mt-8 inline-flex gap-x-6 pt-2">
        </div>
      </div>
      <div
        className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-4"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay={100}
      >
        <div className="h-64 col-span-4 sm:col-span-4 relative">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1573426667638-18ccdd988a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="fresh beets"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-2 relative">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            alt="red veggies"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-2 relative">
          <img
            className="rounded-sm"
            src="https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="asperagas"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-3 relative">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="carrots"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-1 relative">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="tomato tomato"
          />
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Other
