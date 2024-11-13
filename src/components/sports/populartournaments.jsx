import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Populartournaments({ deviceType }) {
  const tournaments = [
    { image: "./src/assets/sports/pt1.webp" },
    { image: "./src/assets/sports/pt2.webp" },
    { image: "./src/assets/sports/pt3.webp" },
    { image: "./src/assets/sports/pt4.webp" },
    { image: "./src/assets/sports/pt5.webp" },
    { image: "./src/assets/sports/pt6.webp" },
    { image: "./src/assets/sports/pt7.webp" },
    { image: "./src/assets/sports/pt8.webp" },
    { image: "./src/assets/sports/pt9.webp" },
    { image: "./src/assets/sports/pt10.webp" },
    { image: "./src/assets/sports/pt11.webp" },
    { image: "./src/assets/sports/pt12.webp" },
    { image: "./src/assets/sports/pt13.webp" },
    { image: "./src/assets/sports/pt14.webp" },
    { image: "./src/assets/sports/pt15.webp" },

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
            Popular Tournaments
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
          {tournaments.map((item, index) => (
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
