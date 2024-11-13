import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Premierleague({ deviceType }) {
  const premier = [
    { image: "./src/assets/sports/pl1.webp", desc: "25 Clubs Haala Hunt them all",},
    { image: "./src/assets/sports/pl2.webp", desc: "A Genius andGentleman" },
    { image: "./src/assets/sports/pl3.webp", desc: "What a Shot" },
    { image: "./src/assets/sports/pl4.webp", desc: "Unstoppable! sakka Dazzles at Villa" },
    { image: "./src/assets/sports/pl5.webp", desc: "Player of MW 2 Ft. Maduke" },
    { image: "./src/assets/sports/pl6.webp", desc: "Goals of MW 2 Ft. Palmer" },
    { image: "./src/assets/sports/pl7.webp", desc: "Top Moments of MW 2 ft. Soucek" },
    { image: "./src/assets/sports/pl8.webp", desc: "Saves of MW 2 Ft. Raya" },
    { image: "./src/assets/sports/pl9.webp", desc: "23 Clubs! Haaland Haunted them all" },
    { image: "./src/assets/sports/pl10.webp", desc: "Liverpool 2-0 Brenford" },
    { image: "./src/assets/sports/pl11.webp", desc: "Wolves 2-0 Chellsa" },
    { image: "./src/assets/sports/pl12.webp", desc: "Brighton 2-0 Manchester United" },
    { image: "./src/assets/sports/pl13.webp", desc: "Manchester city 4-1 Ipswich town" },
    { image: "./src/assets/sports/pl14.webp", desc: "Asten villa 0-2 Arsella" },
    { image: "./src/assets/sports/pl15.webp", desc: "Tottehum 4-0 Everton" },

    
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
            Premier League
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
          {premier.map((item, index) => (
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
