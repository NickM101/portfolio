import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import profilePicture from "../../public/images/profile.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About | Nick Munene | Software Engineer</title>
        <meta
          name="description"
          content="Learn more about Nick Munene, a passionate and experienced software engineer specializing in creating innovative solutions. Discover Nick Munene`s expertise, accomplishments, and commitment to delivering cutting-edge software that drives business success."
        ></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Unveiling the Artistry of Code"}
            className="!text-6xl"
          />
          <AnimatedText
            text={"Meet Nick Munene, the Software Engineer Extraordinaire"}
            className="!text-2xl mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                My software engineering journey took off when I eagerly enrolled
                in a rigorous bootcamp. Immersed in an intensive learning
                environment, I acquired a solid foundation in coding principles
                and industry best practices. This experience sparked my passion
                for software development and laid the groundwork for my future
                accomplishments. Since then, I have had the privilege of working
                on a diverse range of projects, collaborating with talented
                teams to create solutions that solve complex problems. Through
                my expertise and meticulous approach, I consistently strive to
                exceed client expectations and deliver impactful software
                solutions.
              </p>
              <p className="my-4 font-medium">
                I thrive on tackling challenges head-on, leveraging my
                problem-solving skills and analytical mindset to identify
                opportunities for improvement and innovation. My dedication to
                staying at the forefront of technological advancements allows me
                to implement the most effective tools, frameworks, and
                methodologies in my work, ensuring optimal results for my
                clients.
              </p>
              <p className="font-medium">
                Beyond technical skills, I value effective communication and
                teamwork. I understand the importance of collaborating with
                stakeholders, including clients, designers, and fellow
                developers, to align on project goals and deliver exceptional
                outcomes. Building strong relationships and fostering a positive
                working environment is at the core of my professional approach.
                If you're looking for a dedicated professional with a proven
                track record of delivering innovative software solutions, I
                would be thrilled to connect with you.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePicture}
                alt="profile picture"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-normal">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} /> +
                </span>
                <h2 className="text-xl font-medium caption-top text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-normal">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium caption-top text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-normal">
                <span className="inline-block text-7xl font-bold">4+</span>
                <h2 className="text-xl font-medium caption-top text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
