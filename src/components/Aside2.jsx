
function Trade() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  {/* iPad Section */}
  <div className="bg-gradient-to-b from-[#d5e9f8] to-[#f5f5f7] text-black text-center p-10">
    {/* Title */}
    <div className="flex justify-center items-center gap-2">
      <h1 className="text-6xl font-bold">iPad</h1>
      <h1 className="text-6xl text-pretty from-neutral-50 font-sans text-[#0066cc]"><i>air</i></h1>
    </div>
    <h3 className="text-xl mt-2">Now supercharged by the M3 chip.</h3>

    {/* Buttons */}
    <div className="flex justify-center gap-6 mt-6">
      <button className="px-6 py-2 bg-[#0071e3] text-white rounded-full hover:bg-blue-700 transition">
        Learn more
      </button>
      <button className="px-6 py-2 text-[#0071e3] border-2 border-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition">
        Buy
      </button>
    </div>

    {/* Image */}
    <div className="flex justify-center mt-10">
      <img src="./images/ipad.jpg" alt="iPad" className="max-h-72 object-contain" />
    </div>
  </div>

  {/* Trade In Section */}
  <div className="bg-[#f5f5f7] text-black text-center p-10">
    {/* Title */}
    <div className="flex justify-center items-center gap-2">
      <img src="./images/apple-logo.png" alt="Apple Logo" className="h-8 w-8" />
      <h1 className="text-4xl font-bold">Trade In</h1>
    </div>
    <h3 className="text-xl mt-2">Upgrade and save.</h3>
    <h3 className="font-sans">Its that easy.</h3>

    {/* Button */}
    <div className="flex justify-center mt-6">
      <button className="px-6 py-2 bg-[#0071e3] text-white rounded-full hover:bg-blue-700 transition">
        Get your estimate
      </button>
    </div>

    {/* Image */}
    <div className="flex justify-center mt-10">
      <img src="./images/Tradein.png" alt="Trade In" className="max-h-72 object-contain" />
    </div>
  </div>
</div>


    )
}

export default Trade;