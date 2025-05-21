import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const tabs = [
  { id: "flight", label: "Flight" },
  { id: "packages", label: "Packages" },
  { id: "hotel", label: "Hotel" },
  { id: "car", label: "Car" },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("flight");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="imgs/heroBg.jpg"
        alt="Background"
      />

      <section className="bg-white p-6 hidden lg:block m-19 rounded shadow">
        <div className="mb-4 flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-1 ${
                activeTab === tab.id
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
          <a
            href="http://cruises.united.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline mt-2 ml-auto inline-block"
          >
            Cruise ↗
          </a>
        </div>

        {activeTab === "flight" && <FlightForm />}
      </section>

      <div className="flex flex-col md:flex-row lg:flex-col p-9 items-end gap-4 text-white">
        <div className="bg-[rgba(0,0,0,0.8)] p-4 flex flex-col gap-9 h-full rounded">
          <p>NEW 2025 ROUTES</p>
          <p className="text-3xl">Check out our new flights to Asia and Australia!</p>
          <p className="flex items-center cursor-pointer">
            Explore routes <RiArrowRightSLine />
          </p>
        </div>
        <div>
          <img
            aria-hidden="false"
            alt="60,000 bonus miles, $0 intro annual fee with the United Explorer Card. Learn more"
            src="https://apps.rokt.com/userfiles/7325596850474455043.gif"
            style={{ display: "inline-block" }}
          />
        </div>
      </div>
    </div>
  );
};

const FlightForm = () => (
  <form className="space-y-6">
    <fieldset className="flex space-x-6">
      <legend className="sr-only">Flight Type</legend>

      <label className="flex items-center space-x-2">
        <input type="radio" name="flightType" value="roundTrip" defaultChecked className="form-radio" />
        <span>Roundtrip</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="radio" name="flightType" value="oneWay" className="form-radio" />
        <span>One-way</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" name="AwardTravel" className="form-checkbox" />
        <span>Book with miles</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" name="Flexible" className="form-checkbox" />
        <span>Flexible dates</span>
      </label>
    </fieldset>

    <div className="grid grid-cols-2 gap-4">
      <InputField id="bookFlightOriginInput" label="From" placeholder="Origin" />
      <InputField id="bookFlightDestinationInput" label="To" placeholder="Destination" />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <InputField id="DepartDate" label="Date" placeholder="July 18" />
        <select id="cabinType" name="bookFlightModel.cabinType" className="w-full border p-2 rounded mt-4" defaultValue="0">
          <option value="0">Economy</option>
          <option value="1">Premium economy</option>
          <option value="2">Business or First</option>
        </select>
        <a href="#" className="flex items-center text-2xl text-[#1414d1] mt-4">
          Advanced Search <RiArrowRightSLine className="text-4xl" />
        </a>
        <div className="my-3">(Certificates, multi-city and upgrades)</div>
        <a href="#" className="underline text-[#1414d1]">Changed bag rules</a>{" "}
        and{" "}
        <a href="#" className="underline text-[#1414d1]">fees for optional services</a>
      </div>

      <div>
        <InputField id="ReturnDate" label="Travelers" placeholder="1 Adult" />
        <div className="mt-11 flex flex-col gap-7">
          <button className="w-full p-2 text-white rounded-3xl bg-[#1414d1]">Find Flights</button>
          <button className="w-full p-2 border-2 border-[#1414d1] text-[#1414d1] rounded-3xl">Find your travel credits</button>
        </div>
      </div>
    </div>
  </form>
);

const InputField = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="block mb-1 font-medium">{label}</label>
    <input id={id} type="text" placeholder={placeholder} className="w-full border p-2 rounded" />
  </div>
);

export default Hero;