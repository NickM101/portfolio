import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        className=""
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}{" "}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Front-End Developer"}
            address={"Nairobi, Kenya"}
            company={"Gitstart YC6"}
            companyLink={""}
            time={"2022-08 - 2023-03"}
            work={
              "Tested web-based product functionality and delivered iterations to customer, while using improved tools to boost user interaction and deliver design versatility."
            }
            key={"2022-08 - 2023-03"}
          />
          <Details
            position={"Front-End Developer"}
            address={"Nairobi, Kenya"}
            company={"Mombo Sacco"}
            companyLink={""}
            time={"2021-08 - 2022-07"}
            work={
              "Collaborated with stakeholders duting development processes to confirm creative proposals and design best practices."
            }
            key={"2021-08 - 2022-07"}
          />
          <Details
            position={"Mobile Application Developer"}
            address={"Nairobi, Kenya"}
            company={"Medbook Kenya ltd"}
            companyLink={""}
            time={"2019-05 - 2021-05"}
            work={
              "Tracked post-deployment bug reports to recognize and resolve trends among user-reported faults and complaints while documenting design patterns for later use as templates in subsequent patches and iterative app development cycles."
            }
            key={"2019-05 - 2021-05"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
