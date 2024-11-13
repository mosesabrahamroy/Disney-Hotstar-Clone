import React from "react";
import Navbar from "../home/navbar";
import Footer from "../home/footer";

export default function Search() {
  const friend = [
    { image: "./src/assets/T1.webp" },
    { image: "./src/assets/T2.webp" },
    { image: "./src/assets/T3.webp" },
    { image: "./src/assets/T4.webp" },
    { image: "./src/assets/T5.webp" },
    { image: "./src/assets/T6.webp" },
    { image: "./src/assets/T7.webp" },
    { image: "./src/assets/T8.webp" },
    { image: "./src/assets/T9.webp" },
    { image: "./src/assets/T10.webp" },
    { image: "./src/assets/T12.webp" },
    { image: "./src/assets/T13.webp" },
    { image: "./src/assets/T14.webp" },
    { image: "./src/assets/T15.webp" },
    { image: "./src/assets/T16.webp" },
    { image: "./src/assets/T17.webp" },
    { image: "./src/assets/T18.webp" },
    { image: "./src/assets/T19.webp" },
  ];

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Movies, shows, and more"
                className="w-full py-2 px-4 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="ml-16">
            <p className="font-bold text-2xl mb-4 text-white">Trending in India</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ml-16">
            {friend.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.image}
                  alt={`Trending Item ${index}`}
                  className="w-full h-auto rounded-lg object-cover"
                  style={{ maxHeight: '200px' }}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
