import Image from 'next/image';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const ParallaxSquare = ({ imageSrc, text }) => {
  return (
      <div className="w-64 h-64 m-4 ">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={250}>
          <div className="p-4 text-center rounded-2xl border-2 border-solid border-dark bg-light">
          {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" /> */}
            <Image src={imageSrc} alt={text} className="w-40 h-40 rounded-full mx-auto mb-4" />
            <p className="text-lg">{text}</p>
          </div>
        </Tilt>
      </div>
  );
};

export default ParallaxSquare;
