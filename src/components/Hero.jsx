function Hero() {
    return (
        <nav className="bg-black text-white ">
            <div className="p-5">
                <h1 className="text-center text-6xl font-bold">iPhone 17 Pro</h1>
                <h3 className="text-center text-3xl mt-1 ">All out Pro</h3>
                <h4 className="text-center text-xl text-gray-600 mt-1">Available from 19 Sep</h4>
            </div>
            <div className="flex justify-center items-center gap-7 mt-1">
                <button className="px-6 py-2 bg-blue-700 text-white border-2 rounded-full border-blue-700">Learn More</button>
                <button className="px-6 py-2 hover:bg-blue-700 text-white border-2 rounded-full border-blue-700">Pre-Order</button>
            </div>
            <div className="flex justify-center mt-10 border-none bg-black">
                <img
                    src="./images/Header.jpg"
                    alt="Header"
                    className="w-[800px] h-auto object-cover rounded-xl"
                />
            </div>

        </nav>
    )
}

export default Hero;