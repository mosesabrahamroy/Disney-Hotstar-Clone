import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Popularsports({ deviceType }) {
  const sports = [
    { image: "./src/assets/sports/ps1.webp" },
    { image: "./src/assets/sports/ps2.webp" },
    { image: "./src/assets/sports/ps3.webp" },
    { image: "./src/assets/sports/ps4.webp" },
    { image: "./src/assets/sports/ps5.webp" },
    { image: "./src/assets/sports/ps6.webp" },
    { image: "./src/assets/sports/ps7.webp" },
    { image: "./src/assets/sports/ps8.webp" },
    { image: "./src/assets/sports/ps9.webp" },

  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1,
    },
  };

  return (
    <>
     <div>
          <p className="text-white ml-28 font-bold text-2xl mb-2 mt-4">
            Popular Sports
          </p>
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          itemClass="carousel-item-padding--px"
        >
          {sports.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                className="md:h-36  rounded-xl mb-2 md:mb-2 px-1"
              />
              <p className="text-white mb-2 text-xs md:text-lg text-center font-bold">{item.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
