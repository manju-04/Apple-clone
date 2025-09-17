

function Aside() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
      {/* AirPods Section */}
      <div className="bg-[#f5f5f7] text-black text-center p-8">
        <h1 className="text-4xl font-bold">AirPods Pro 3</h1>
        <h3 className="text-xl mt-2">The world’s best in-ear</h3>
        <h3 className="text-xl">Active Noise Cancellation.</h3>
        <h4 className="text-gray-600 mt-2">Available from 19 Sep</h4>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Learn More
          </button>
          <button className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
            Pre-order
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-6">
          <img src="./images/airpod.jpg" alt="AirPods" className="max-h-72 object-contain" />
        </div>
      </div>

      {/* Watch Section */}
      <div className="bg-[#f5f5f7] text-black text-center p-8">
        <div className="flex justify-center items-center gap-2">
          <img src="./images/apple-logo.png" alt="AppleLogo" className="h-10 w-10" />
          <h1 className="text-4xl font-bold">WATCH SERIES 11</h1>
        </div>
        <h3 className="text-xl mt-2">The ultimate watch</h3>
        <h3 className="text-xl">for a healthy life.</h3>
        <h4 className="text-gray-600 mt-2">Available from 19 Sep</h4>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Learn More
          </button>
          <button className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
            Pre-order
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-10">
          <img src="./images/watch.jpg" alt="Apple Watch" className="max-h-72 object-contain" />
        </div>
      </div>
    </div>

  )
}



export default Aside;