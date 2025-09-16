import { Search, ShoppingBag } from "lucide-react";

const navLink = [
  { src: "./images/appleic.png" },
  { name: "Store" },
  { name: "Mac" },
  { name: "iPad" },
  { name: "iPhone" },
  { name: "Watch" },
  { name: "AirPods" },
  { name: "TV & Home" },
  { name: "Entertainment" },
  { name: "Accessories" },
];

function Navbar() {
  return (
    <nav className="bg-[#1d1d1f] items-center text-white p-5 cursor-pointer sticky top-0">
      <div>
        <ul className="flex space-x-6 justify-center items-center">
          {navLink.map((link, index) => (
            <li key={index} className="flex items-center">
              {link.src && (
                <img
                  src={link.src}
                  alt={link.name || "icon"}
                  height={25}
                  width={25}
                  className="object-contain"
                />
              )}
              {link.name && (
                <span className="hover:text-gray-300 text-sm font-medium">
                  {link.name}
                </span>
              )}
            </li>
          ))}

          {/* Right Side: Search + Bag */}
          <li className="flex items-center gap-4 ml-6">
            <button className="hover:text-gray-400">
              <Search size={18} />
            </button>
            <button className="hover:text-gray-400">
              <ShoppingBag size={18} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
