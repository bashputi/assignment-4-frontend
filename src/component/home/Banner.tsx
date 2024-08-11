

export default function Banner() {
  return (
<div className="">
  <div className="bg-[#D7CFA1] flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    <h1 className="text-3xl font-bold leading-none lg:text-6xl">Explore the
        <span className=""> Wilderness</span> with Confidence
      </h1>
      <p className="mt-6 mb-8 text-lg lg:mb-12">Gear up for your next adventure with top-quality camping essentials.
       Discover tents, backpacks, and all the tools you need to conquer the great outdoors.
      </p>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
      <div className="flex gap-4">
  <a
    className="px-6 py-2 min-w-[120px] text-center text-white bg-[#003856] border border-[#003856] rounded active:text-[#003856] hover:bg-transparent hover:text-[#003856] "
    href="/download"
  >
    Download
  </a>
  <a
className="px-6 py-2 min-w-[120px] text-center text-[#003856] border border-[#003856] rounded hover:bg-[#003856] hover:text-white active:bg-[#003856] "
    href="/download"
  >
    view
  </a>
</div>
      </div>
    </div>
    <div className="flex-1 p-6 mt-8 lg:mt-0 lg:h-auto lg:max-w-2xl">
      <img src="../../../public/assets/banner.png" alt="" className="object-cover w-full h-full" />
    </div>
  </div>
</div>


  )
}
