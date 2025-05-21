import React from 'react';
import { CiWifiOn, CiPlane, CiShoppingCart, CiMoneyBill } from 'react-icons/ci';
import { FaPaw, FaHeadset } from 'react-icons/fa';
import { GiWineGlass } from 'react-icons/gi';

function Section2() {
  return (
    <div style={{ backgroundColor: '#002244' }}>
      <div className="flex justify-center gap-96 py-6">
        <h1 className='text-2xl text-white'>Popular topics</h1>
        <div className="flex items-center bg-white rounded-md w-96 h-10 px-4 shadow">
          <input type="text" placeholder="Search united" className="w-full outline-none" />
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-x-32 gap-y-6 px-20 pb-10 text-white text-sm">
        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <CiWifiOn size={20} />
          <span>Wi-Fi</span>
        </a>

        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <CiPlane size={20} />
          <span>Change flight</span>
        </a>

        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <GiWineGlass size={20} />
          <span>United Club</span>
        </a>

        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <FaPaw size={20} />
          <span>Traveling with pets</span>
        </a>

        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <CiShoppingCart size={20} />
          <span>MileagePlus</span>
        </a>

        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <CiMoneyBill size={20} />
          <span>Refund</span>
        </a>

        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <CiShoppingCart size={20} />
          <span>Baggage</span>
        </a>
        
        <a href="#" className="flex items-center gap-2 hover:underline min-w-[140px]">
          <FaHeadset size={20} />
          <span>Help Center</span>
        </a>
      </div>
    </div>
  );
}

export default Section2;
