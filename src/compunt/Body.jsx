import React from 'react'
import { FaExclamationTriangle, FaCalendarAlt, FaFilter } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

function Body() {
  return (
    <>
      <div style={{ backgroundColor: '#f2f2f2' }} className=''>

        <h2 className='text-2xl ml-40 mt-2'>Explore destions</h2>

        <p className=' ml-40 mt-2'>Not sure where to go? Use our interactive map to find flights to great destinations.</p>
        <div className="red">
          <p className=' border-red-500 border-2 ml-40 bg-red-300 mt-3'>
            Sorry, no results have been found. Please enter a different origin location or expand your search area.
            <FaExclamationTriangle/>
          </p>
        </div>

        
        <div className="flex flex-wrap ml-50 mt-6 gap-4 items-center ">
        
          <div>
            <p className="mb-1">Flying from</p>
            <input
              type="text"
              placeholder="Tel Aviv TLV"
              className="border rounded-md px-3 py-2 w-40"
            />
          </div>

          
          <div>
            <p className="mb-1">Search type</p>
            <select className="border rounded-md px-3 py-2 w-40">
              <option>Roundtrip</option>
              <option>One-way</option>
              <option>Multi-city</option>
            </select>
          </div>

          
          <div>
            <p className="mb-1">Dates</p>
            <div className="flex items-center border rounded-md px-3 py-2 w-40 gap-2">
              <span>Flexible dates</span>
              <FaCalendarAlt className="text-blue-600" />
            </div>
          </div>

          
          <div>
            <p className="mb-1">Max price</p>
            <div className="flex items-center border rounded-md px-3 py-2 w-40 justify-between">
              <span>$2000</span>
              <FaFilter className="text-blue-600" />
            </div>
          </div>

          <button className="bg-blue-700 text-white font-bold px-6 py-2 rounded-full">
            Search
          </button>

          
          <div className="flex items-center text-blue-700 cursor-pointer font-medium">
            <IoChevronForward />
            <span className="ml-1">Refine search</span>
          </div>
        </div>

        <div className="w-full h-[450px] mt-4">
          <iframe className='ml-40'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5858498988453!2d46.70104067444376!3d24.95740434161008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f042cb7a9e5b9%3A0xf7866a26b8629c3e!2z2YXYt9i52YUg2KfZhNmF2K_YqSDZhdi52Kkg2KfZhNiq2YjYp9iz!5e0!3m2!1sar!2ssa!4v1716200000000!5m2!1sar!2ssa"
            width="80%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        <p className='text-sm mt-3 text-center'>*The prices shown are roundtrip fares and have been available within the last 48 hours. Additional baggage fees may apply. Fare prices in miles will include additional taxes and fees.</p>
      </div>
    </>
  )
}

export default Body
