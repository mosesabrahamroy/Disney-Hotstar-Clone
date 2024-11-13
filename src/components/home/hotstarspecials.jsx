import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Hotstarspecials({ deviceType }) {
  const specials = [
    { image: "./src/assets/hs1.jpg" },
    { image: "./src/assets/hs2.jpg" },
    { image: "./src/assets/hs3.jpg" },
    { image: "./src/assets/hs4.jpg" },
    { image: "./src/assets/hs5.jpg" },
    { image: "./src/assets/hs6.jpg" },
    { image: "./src/assets/hs7.jpg" },
    { image: "./src/assets/hs9.jpg" },
    { image: "./src/assets/hs10.jpg" },
    { image: "./src/assets/hs11.jpg" },
    { image: "./src/assets/hs12.jpg" },
    { image: "./src/assets/hs13.jpg" },
    { image: "./src/assets/hs14.jpg" },
    { image: "./src/assets/hs15.jpg" },
    { image: "./src/assets/hs16.jpg" },
    { image: "./src/assets/hs17.jpg" },
    { image: "./src/assets/hs19.jpg" },
    { image: "./src/assets/hs20.jpg" },    
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
        <p className="text-white ml-28 font-bold text-2xl mb-2">Hotstar Specials</p>
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
        {specials.map((item, index) => (
          <div key={index}>
            <img src={item.image} className="md:h-52 rounded-xl px-1 mb-8" />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}







