import Image from 'next/image';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const ParallaxSquare = ({ imageSrc, text }) => {
  return (
      <div className="w-44 h-44 m-4 dark:bg-dark">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={250}>
          <div className="p-4 text-center rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

            <Image src={imageSrc} alt={text} className="w-40 h-40 rounded-full mx-auto mb-4 object-contain" />
            <p className="text-lg dark:text-light">{text}</p>
          </div>
        </Tilt>
      </div>
  );
};

export default ParallaxSquare;
