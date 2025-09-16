function Watch() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
  {/* Watch Section */}
  <div className="bg-[#f5f5f7] text-black text-center p-8">
    <div className="flex justify-center items-center gap-2">
      <img src="./images/apple-logo.png" alt="AppleLogo" className="h-10 w-10" />
      <h1 className="text-4xl font-bold">WATCH SE 3</h1>
    </div>
    <h3 className="text-xl mt-2">Walk it. Talk it. Track it. Love it.</h3>
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
      <img src="./images/watch4.jpg" alt="Apple Watch" className="max-h-72 object-contain" />
    </div>
  </div>


  {/* Watch Section */}
  <div className="bg-black text-white text-center p-8">
    <div className="flex justify-center items-center gap-2">
      <img src="./images/appleicons.png" alt="AppleLogo" className="h-10 w-10 " />
      <h1 className="text-4xl font-bold">WATCH ULTRA 3</h1>
    </div>
    <h3 className="text-xl mt-2">Personal beast.</h3>
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
      <img src="./images/watch3.jpg" alt="Apple Watch" className="max-h-72 object-contain" />
    </div>
  </div>
</div>

    )
}


export default Watch;