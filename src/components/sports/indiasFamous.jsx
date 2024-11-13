import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Indiafinal({ deviceType }) {
  const final = [
    { image: "./src/assets/sports/if1.webp", desc: "Invicible IND Ace SA, Lift 2nd Title",},
    { image: "./src/assets/sports/if2.webp", desc: "Vengeful IND Bury AUS down under" },
    { image: "./src/assets/sports/if3.webp", desc: "Redemption IND Slay ENG, Enter Final" },
    { image: "./src/assets/sports/if4.webp", desc: "2023: India Bury 2019 Ghosts, Enter Final " },
    { image: "./src/assets/sports/if5.webp", desc: "2023: 6 in 6! Unbeaten India Trash ENG" },
    { image: "./src/assets/sports/if6.webp", desc: "2023: 8-0! Supreme IND Shrug Off Park" },
    { image: "./src/assets/sports/if7.webp", desc: "2023: 8-8! Invicible IND Rout SA" },
    { image: "./src/assets/sports/if8.webp", desc: "2022: IND Cling Thrilling Cases vs PAK" },
    { image: "./src/assets/sports/if9.webp", desc: "2016: Kholi iconic chase vs AUS " },
    { image: "./src/assets/sports/if10.webp", desc: "2016: Kholi Heroic's Sink Pakistan" },
    
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
            India's Famous World Cup Wins
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
          {final.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                className="md:h-36  rounded-xl mb-2 md:mb-2 px-1"
              />
              <p className="text-white text-xs md:text-lg text-center font-bold mb-16">{item.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
