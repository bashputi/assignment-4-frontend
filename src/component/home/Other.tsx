

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
            src="https://www.campingwithstyle.co.uk/wp-content/uploads/2024/02/luxury-camping-worlds-most-expensive-camping-gear-700x700.png"
            alt="Camping tents"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-2 relative">
          <img
            className="rounded-lg"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230902/pngtree-the-stars-are-visible-at-night-at-a-camp-tent-image_13124753.jpg"
            alt="camping lantern"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-2 relative">
          <img
            className="rounded-sm"
            src="https://sp.apolloboxassets.com/vendor/product/productImages/2022-05-30/Fpr26Array_15.jpg"
            alt="asperagas"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-3 relative">
          <img
            className="rounded-md"
            src="https://truckvault.com/sites/default/files/styles/max_1300x1300/public/inline-images/psNUC6BUGo4o7pfRDgqPMz3d3ZVDqG0Wh1Xn9XSTTNXRF77X2t.jpg?itok=k1cKjp9P"
            alt="camping track"
          />
        </div>
        <div className="h-64 col-span-4 sm:col-span-1 relative">
          <img
            className="rounded-md"
            src="https://s3.us-east-1.amazonaws.com/images.gearjunkie.com/uploads/2024/07/AirCore-Hood.jpg"
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
