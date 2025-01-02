"use client";

import React from "react";

const ResponsiveCards = () => {
  const cards = [
    {
      icon: "📈",
      number: "100+",
      text: "This is the first card.",
    },
    {
      icon: "📝",
      number: "5+",
      text: "This is the second card.",
    },
    {
      icon: "🚀",
      number: "30%",
      text: "This is the third card.",
    },
  ];

  return (
    <div className="w-full md:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-stone-50 shadow-md rounded-xl p-6 flex items-center md:py-8"
          >
          
            <div className="flex flex-col md:gap-3"> {/* Text container */}
              <h2 className="text-4xl font-bold"> {card.number}</h2>
              <p className="text-gray-600">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCards;
