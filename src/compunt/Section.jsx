import React from "react";

const Cards = [
  {
    id: 1,
    name: "Plan your trip",
    title: "Find a destination and any entry requirements.",
  },
  {
    id: 2,
    name: "Visit the Help Center",
    title: "Find info on refunds, bags, seats and more.",
  },
  {
    id: 3,
    name: "Stay connected",
    title: "Get Wi-Fi for your next flight.",
  },
  {
    id: 4,
    name: "Time to start packing",
    title: "Learn more about bringing bags on your trip.",
  },
  {
    id: 5,
    name: "What to know before you go",
    title: "The world of travel has changed, find out how.",
  },
  {
    id: 6,
    name: "See what's on your flight",
    title: "View your seating, food and entertainment options.",
  },
];

function Section() {
  return (

   
    
    <div className="card grid grid-cols-2 gap-6 max-w-4xl mx-auto p-4">
       
      {Cards.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
        >
          <div>
            <h1 className="font-semibold text-lg mb-1">{item.name}</h1>
            <p className="text-gray-600 text-sm">{item.title}</p>
          </div>
            
          </div>
        
      ))}
    </div>
  );
}

export default Section;
