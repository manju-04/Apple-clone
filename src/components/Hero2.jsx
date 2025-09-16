function Phone17() {
    return (
        <nav className="bg-[#f5f5f7] text-black mt-3">
  <div className="p-5">
    <h1 className="text-center text-6xl font-bold">iPhone 17</h1>
    <h3 className="text-center text-3xl mt-1">Magichromatic.</h3>
    <h3 className="text-center text-3xl mt-1">Available from 19 Sep.</h3>
  </div>

  {/* Buttons */}
  <div className="flex justify-center items-center gap-7 mt-4">
    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
      Learn More
    </button>
    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
      Pre-Order
    </button>
  </div>

  {/* Image */}
  <div className="flex justify-center mt-10">
    <img
      src="./images/Header3.webp"
      alt="Header"
      className="h-auto object-cover rounded-xl"
    />
  </div>
</nav>

    )
}

export default Phone17;