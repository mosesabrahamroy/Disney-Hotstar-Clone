import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Disneymusicalmovies({ deviceType }) {
  const musical = [
    { image: "./src/assets/movies/dmm1.jpg" },
    { image: "./src/assets/movies/dmm2.jpg" },
    { image: "./src/assets/movies/dmm3.jpg" },
    { image: "./src/assets/movies/dmm4.jpg" },
    { image: "./src/assets/movies/dmm5.jpg" },
    { image: "./src/assets/movies/dmm6.jpg" },
    { image: "./src/assets/movies/dmm7.jpg" },
    { image: "./src/assets/movies/dmm8.jpg" },
    { image: "./src/assets/movies/dmm9.jpg" },
    { image: "./src/assets/movies/dmm10.jpg" },
    { image: "./src/assets/movies/dmm11.jpg" },
    { image: "./src/assets/movies/dmm12.jpg" },
    { image: "./src/assets/movies/dmm14.jpg" },
   
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="relative">
        <p className="text-white ml-28 font-bold text-2xl mt-4 mb-2">Disney Musical Movies</p>
      </div>
      <div className="ml-28">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={deviceType}
          itemClass="carousel-item-padding-20-px"
        >
          {musical.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <img
                src={item.image}
                alt={`star ${index}`}
                className="md:h-52 rounded-xl px-1"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-60 transition-opacity duration-300">
                  <div className="text-center text-white ">
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
