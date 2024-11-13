import React, { useState, useEffect } from "react";
import Navbar from "../home/navbar";
import Footer from "../home/footer";
import axios from "axios";

export default function LatestRelease2() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=ee0a7f2ca4e4c90ae6967e065b764acc")
      .then((res) => {
        const imageUrls = res.data.results.map((movie) => `https://image.tmdb.org/t/p/w200${movie.poster_path}`);
        setImages(imageUrls);
      });
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          
          <div className="ml-16">
            <p className="font-bold text-4xl my-16 text-white text-center">Latest Releases</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ml-16">
            {images.map((imageUrl, index) => (
              <div key={index} className="relative">
                <img
                  src={imageUrl}
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