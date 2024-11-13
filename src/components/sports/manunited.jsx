import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Manunited({ deviceType }) {
  const man = [
    { image: "./src/assets/sports/mu1.webp", desc: "PL 24/25: Man UTD vs Liverpool",},
    { image: "./src/assets/sports/mu2.webp", desc: "Top 10 Goals" },
    { image: "./src/assets/sports/mu3.webp", desc: "Greatest Rivalry" },
    { image: "./src/assets/sports/mu4.webp", desc: "Magics against the Red Devils" },
    { image: "./src/assets/sports/mu5.webp", desc: "Rookie picks his ultimate PL Goal" },
    { image: "./src/assets/sports/mu6.webp", desc: "Dream to play for liverpool" },
    { image: "./src/assets/sports/mu7.webp", desc: "Give Up watching men UTD" },
    { image: "./src/assets/sports/mu8.webp", desc: "Manchester 2-2 Goals" },
    { image: "./src/assets/sports/mu9.webp", desc: "Manchester United" },
    { image: "./src/assets/sports/mu10.webp", desc: "Liverpool 7-0" },
    
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
            Man United vs Liverpool - LIVE on Sep 1
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
          {man.map((item, index) => (
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
