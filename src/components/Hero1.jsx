function Thin() {
    return (
        <nav className="bg-[#f5f5f7] text-black mt-4">
            <div className="p-5">
                <h1 className="text-center text-6xl font-bold">iPhone Air</h1>
                <h3 className="text-center text-3xl mt-1 ">The Thinnest iPhone ever.</h3>
                <h3 className="text-center text-3xl mt-1 ">With the power of pro inside.</h3>
            
            </div>
            <div className="flex justify-center mt-10 border-none">
                <img
                    src="./images/Header2.jpg"
                    alt="Header"
                    className=" h-auto object-cover rounded-xl"
                />
            </div>
            <div className="flex flex-col items-center mt-3">
                 <button className="px-6 py-2 bg-blue-700 text-white border-2 rounded-full border-blue-700">Pre-Order</button>
                 <h3 className="text-lg">From ₹119900.00* or ₹19150.00/mo. for 6 mo.‡</h3>
                 <h5 className="text-gray-600">Available from 19 Sep</h5>
            </div>
            

        </nav>
    )
}

export default Thin;