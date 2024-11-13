import React from "react";
import HoverVideoPlayer from 'react-hover-video-player';

export default function Popularicons() {
  const media = [
    { video: "./src/assets/cathegories/1.mp4", images: "./src/assets/cathegories/1.png" },
    { video: "./src/assets/cathegories/2.mp4", images: "./src/assets/cathegories/2.png" },
    { video: "./src/assets/cathegories/3.mp4", images: "./src/assets/cathegories/3.png" },
    { video: "./src/assets/cathegories/4.mp4", images: "./src/assets/cathegories/4.png" },
    { video: "./src/assets/cathegories/5.mp4", images: "./src/assets/cathegories/5.png" },
  ];

  return (
    <div className="ml-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {media.map((item, index) => (
        <div key={index} className="relative">
          <div className="bg-black h-16 mb-4" />
          <HoverVideoPlayer
            videoSrc={item.video}
            pausedOverlay={
              <img
                src={item.images}
                className="w-full h-full object-cover"
              />
            }
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
