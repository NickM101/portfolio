import React, {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import Lilcon from "./Lilcon";
import {school_education} from "@/constants/tech";

const Details = ({item}) => {
  const ref = useRef(null);
  return (
    <li
      key={item.id}
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        className=""
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {item.honor}:&nbsp;{item.major}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {item.date} | {item.name}
        </span>
        {/* <p className="font-medium w-full">{info}</p> */}
        {item.courseWork.map((course, index) => (
          <li key={index} className="font-medium w-full">
            • {course}
          </li>
        ))}
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {school_education.map((education, index) => (
            <Details key={index} item={education} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
