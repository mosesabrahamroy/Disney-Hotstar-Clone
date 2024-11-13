import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Populargenres({ deviceType }) {
  const genres = [
    { image: "./src/assets/cathegories/pg1.webp" },
    { image: "./src/assets/cathegories/pg2.webp" },
    { image: "./src/assets/cathegories/pg3.webp" },
    { image: "./src/assets/cathegories/pg4.webp" },
    { image: "./src/assets/cathegories/pg5.webp" },
    { image: "./src/assets/cathegories/pg6.webp" },
    { image: "./src/assets/cathegories/pg7.webp" },
    { image: "./src/assets/cathegories/pg8.webp" },
    { image: "./src/assets/cathegories/pg9.webp" },
    { image: "./src/assets/cathegories/pg10.webp" },
    { image: "./src/assets/cathegories/pg11.webp" },
    { image: "./src/assets/cathegories/pg12.webp" },
    { image: "./src/assets/cathegories/pg13.webp" },
    { image: "./src/assets/cathegories/pg14.webp" },
    { image: "./src/assets/cathegories/pg15.webp" },
    { image: "./src/assets/cathegories/pg16.webp" },
    { image: "./src/assets/cathegories/pg17.webp" },
    { image: "./src/assets/cathegories/pg18.webp" },
    { image: "./src/assets/cathegories/pg19.webp" },
    { image: "./src/assets/cathegories/pg20.webp" },
    { image: "./src/assets/cathegories/pg21.webp" },
    { image: "./src/assets/cathegories/pg22.webp" },
    { image: "./src/assets/cathegories/pg23.webp" },
    { image: "./src/assets/cathegories/pg24.webp" },
    { image: "./src/assets/cathegories/pg25.webp" },
    { image: "./src/assets/cathegories/pg26.webp" },
    { image: "./src/assets/cathegories/pg27.webp" },
    { image: "./src/assets/cathegories/pg28.webp" },
    { image: "./src/assets/cathegories/pg29.webp" },
    { image: "./src/assets/cathegories/pg30.webp" },

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
        <p className="text-white ml-28 font-bold text-2xl mb-2 mt-4">Popular Genres</p>
      </div>
      <div className="ml-28 mb-20">
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
          {genres.map((item, index) => (
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
                <div className="text-center text-white ">
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
