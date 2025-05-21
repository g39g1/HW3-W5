import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

function NavBar() {
  return (
<nav className= "bg-gray-800 text-white flex items-center justify-between px-6 py-3 font-custom">

      
      <div className="flex items-center ">
       
        <ul className="flex space-x-4 font-semibold ml-30 ">
          <li className="cursor-pointer hover:underline">Book </li>
          <li className="cursor-pointer hover:underline">My trips </li>
          <li className="cursor-pointer hover:underline">Travel info </li>
          <li className="cursor-pointer hover:underline">MileagePlus</li>
          <li className="cursor-pointer hover:underline">Deals </li>
          <li className="cursor-pointer hover:underline">Help </li>
        </ul>
      </div>

      
      <div className="flex items-center gap-5  mr-40">
          <span>English - US $</span>

        <li  className="hover:text-gray-300 list-none">
          <CiSearch size={20} />
        </li>

       
        <li  className="hover:text-gray-300 list-none">
          <FaUser size={20} />
        </li>

        
        <li className="hover:text-gray-300 list-none">
          <CiShoppingCart size={20} />
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
