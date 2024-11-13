import React from "react";
import Navbar from "../home/navbar";
import Footer from "../home/footer";

function Myspace() {
  return (
    <>
      <div className="relative flex h-screen bg-gray-900 gradient text-white">
        <div className="w-20 flex flex-col items-center py-4">
          <Navbar />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-6xl mb-8">
            <img src="./src/assets/login.webp" alt="Login" />
          </div>
          <h1 className="text-2xl font-bold mb-4">
            Login to Disney+ Hotstar
          </h1>
          <p className="text-gray-400 mb-8">
            Start watching from where you left off, personalise for kids and more
          </p>
          <a href="/login2" className="bg-blue-600 text-white font-bold py-4 px-20 rounded transition ease-in delay-100 hover:scale-105 hover:bg-blue-700 duration-100">
            Log In
          </a>
        </div>

        <button className="absolute top-4 right-4 text-gray-400 cursor-pointer bg-gray-500 py-4 px-16 rounded transition ease-in delay-100 hover:scale-105 hover:text-white duration-100">
      Help & Support
    </button>
  </div>
  <Footer />
    </>
  );
}

export default Myspace;
