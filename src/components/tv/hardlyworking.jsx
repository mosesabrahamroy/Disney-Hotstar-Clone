import React from "react";

export default function Hardlyworking() {
  const hardly = [
    { image: "./src/assets/tv/hw1.webp", desc: "Prashasti Singh, Ex- Category head " },
    { image: "./src/assets/tv/hw2.webp", desc: "Nishant Suri, Ex- Investment Banker " },
    { image: "./src/assets/tv/hw3.webp", desc: "Shreeja Chaturvedi, Ex- Business Development " },
    { image: "./src/assets/tv/hw4.webp", desc: "Anirban Dasgupta, Ex- Sales Executive " },
    { image: "./src/assets/tv/hw5.webp", desc: "Kumar Varun, Ex- Brand Manager " },
  ];

  return (
    <>
      <div className="text-white ml-28 font-bold text-2xl mt-4 mb-2">
          Hardly Working: Standup special
      </div>
      <div className="ml-28 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {hardly.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              className="md:h-36 rounded-xl mb-2"
            />
            <div className="text-white mb-2 text-xs md:text-lg text-center font-semibold">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
