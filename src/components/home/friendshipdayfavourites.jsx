import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Friendshipdayfavourites({ deviceType }) {
  const friend = [
    { image: "./src/assets/fdf1.jpg" },
    { image: "./src/assets/fdf2.jpg" },
    { image: "./src/assets/fdf3.jpg" },
    { image: "./src/assets/fdf4.jpg" },
    { image: "./src/assets/fdf5.jpg" },
    { image: "./src/assets/fdf6.jpg" },
    { image: "./src/assets/fdf7.jpg" },
    { image: "./src/assets/fdf8.jpg" },
    { image: "./src/assets/fdf9.jpg" },
    { image: "./src/assets/fdf10.jpg" },
    { image: "./src/assets/fdf11.jpg" },
    { image: "./src/assets/fdf12.jpg" },
    { image: "./src/assets/fdf13.jpg" },
    { image: "./src/assets/fdf14.jpg" },
    { image: "./src/assets/fdf15.jpg" },
    { image: "./src/assets/fdf16.jpg" },
    { image: "./src/assets/fdf17.jpg" },
    { image: "./src/assets/fdf18.jpg" },
    { image: "./src/assets/fdf19.jpg" },

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
        <p className="text-white ml-28 font-bold text-2xl mb-2">Friendship Day Favourites</p>
      </div>
    <div className='ml-28'>
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
        {friend.map((item, index) => (
          <div key={index}>
            <img src={item.image} className="md:h-52 rounded-xl px-1 mb-8" />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}







