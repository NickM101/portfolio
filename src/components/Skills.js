import React, { useEffect, useState } from 'react'
import ParallaxSquare from './ParallaxSquare';
import dummyimage from '../../public/images/test1.png'
import { tech } from '../constants/tech';

const Skills = () => {

  return (
    <div className='mt-28'>
            <h2 className="font-bold text-8xl w-full text-center my-16">Skills</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
              {tech.map((item, index) => (
                  <ParallaxSquare imageSrc={item.image} text={item.name} />
                
              ))}
            </div>
          </div>
  )
}

export default Skills