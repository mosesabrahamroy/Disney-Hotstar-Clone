import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Popularchannels({ deviceType }) {
  const popular = [
    { image: "./src/assets/tv/pc1.webp" },
    { image: "./src/assets/tv/pc2.webp" },
    { image: "./src/assets/tv/pc3.webp" },
    { image: "./src/assets/tv/pc4.webp" },
    { image: "./src/assets/tv/pc5.webp" },
    { image: "./src/assets/tv/pc6.webp" },
    { image: "./src/assets/tv/pc7.webp" },
    { image: "./src/assets/tv/pc8.webp" },
    { image: "./src/assets/tv/pc9.webp" },
    { image: "./src/assets/tv/pc10.webp" },
    { image: "./src/assets/tv/pc11.webp" },
    { image: "./src/assets/tv/pc12.webp" },
    { image: "./src/assets/tv/pc13.webp" },
    { image: "./src/assets/tv/pc14.webp" },
    { image: "./src/assets/tv/pc15.webp" },
    { image: "./src/assets/tv/pc16.webp" },
    { image: "./src/assets/tv/pc17.webp" },
    { image: "./src/assets/tv/pc18.webp" },
    { image: "./src/assets/tv/pc19.webp" },
    { image: "./src/assets/tv/pc20.webp" },

  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
        <p className="text-white ml-28 font-bold text-2xl mb-2 mt-4">Popular Channels</p>
      </div>
      <div className="ml-28 mb-8">
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
          {popular.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <img
                src={item.image}
                alt={`star ${index}`}
                className="md:h-36 rounded-xl px-1"
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
