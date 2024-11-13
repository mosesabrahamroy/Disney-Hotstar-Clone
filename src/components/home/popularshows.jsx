import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Popularshows({ deviceType }) {
  const popular = [
    { image: "./src/assets/ps1.jpg" },
    { image: "./src/assets/ps2.jpg" },
    { image: "./src/assets/ps3.jpg" },
    { image: "./src/assets/ps4.jpg" },
    { image: "./src/assets/ps5.jpg" },
    { image: "./src/assets/ps6.jpg" },
    { image: "./src/assets/ps7.jpg" },
    { image: "./src/assets/ps8.jpg" },
    { image: "./src/assets/ps9.jpg" },
    { image: "./src/assets/ps10.jpg" },
    { image: "./src/assets/ps11.jpg" },
    { image: "./src/assets/ps12.jpg" },
    { image: "./src/assets/ps13.jpg" },
    { image: "./src/assets/ps14.jpg" },
    { image: "./src/assets/ps15.jpg" },
    { image: "./src/assets/ps16.jpg" },
    { image: "./src/assets/ps17.jpg" },
    { image: "./src/assets/ps18.jpg" },

  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 2 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1 
    },
  };

  return (
    <>
    <div>
        <p className="text-white ml-28 font-bold text-2xl mb-2 mt-4">Popular Shows</p>
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
        
        itemClass="carousel-item-padding-20-px"
      >
        {popular.map((item, index) => (
          <div key={index}>
            <img src={item.image} className="md:w-44 md:h-52 w-16 rounded-xl  ml:4 mb-8 px-1" />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}







