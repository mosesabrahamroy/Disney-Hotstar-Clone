import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
export default function Bestinsports({ deviceType }) {
  const best = [
    { image: "./src/assets/bis1.webp", desc: "Air Gun Silver Medalist",},
    { image: "./src/assets/bis2.webp", desc: "Shuttle Medalist" },
    { image: "./src/assets/bis3.webp", desc: "What a Shot" },
    { image: "./src/assets/bis4.webp", desc: "Football" },
    { image: "./src/assets/bis5.webp", desc: "Olympics" },
    { image: "./src/assets/bis6.webp", desc: "Cricket" },
    { image: "./src/assets/bis7.webp", desc: "Olympics" },
    { image: "./src/assets/bis8.webp", desc: "Cricket" },
    { image: "./src/assets/bis9.webp", desc: "Kabbadi" },
    { image: "./src/assets/bis10.webp", desc: "Kabbadi" },
    { image: "./src/assets/bis11.webp", desc: "Kabbadi" },
    { image: "./src/assets/bis12.webp", desc: "Olympics" },
    { image: "./src/assets/bis13.webp", desc: "Football" },
    { image: "./src/assets/bis14.webp", desc: "Kabbadi" },
    { image: "./src/assets/bis15.webp", desc: "Tennis" },
    { image: "./src/assets/bis16.webp", desc: "Football" },
    { image: "./src/assets/bis17.webp", desc: "Football" },
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

  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ee0a7f2ca4e4c90ae6967e065b764accee0a7f2ca4e4c90ae6967e065b764acc')
  .then(function (response) {
    console.log(response);
  })

  return (
    <>
     <div>
          <p className="text-white ml-28 font-bold text-2xl mb-2 mt-4">
            Best in Sports
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
          {best.map((item, index) => (
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
