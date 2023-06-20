import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ginjuice from "../../public/images/ginjuice.webp";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center p-12 justify-center rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark dark:text-light  shadow-2xl relative rounded-br-3xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />

      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-96" priority
                sizes="(max-width: 768px) 100 vw, (max-width: 1200px) 50vw, 50vw"/>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light  hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light border-2 border-solid border-transparent hover:border-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark dark:text-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light da rounded-br-3xl" />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-96" priority
                sizes="(max-width: 768px) 100 vw, (max-width: 1200px) 50vw, 50vw"/>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                link={
                  "https://play.google.com/store/apps/details?id=com.nexusnova.ginjuice"
                }
                github={"https://github.com/NickM101/GinJuice"}
                img={ginjuice}
                summary={
                  "Elevate your mixology game with Gin Juice. Discover a world of exquisite gin-based cocktails crafted to perfection. From classic gin and tonics to innovative creations, our extensive library of recipes offers something for every taste. Our user-friendly interface makes cocktail creation a breeze, allowing you to explore, mix, and master the art of mixology."
                }
                title={"GinJuice"}
                type={"Mobile"}
              />
            </div>
            <div className="col-span-6">
              <Project
                link={
                  "https://play.google.com/store/apps/details?id=com.nexusnova.ginjuice"
                }
                github={"https://github.com/NickM101/GinJuice"}
                img={ginjuice}
                // summary={
                //   "Elevate your mixology game with Gin Juice. Discover a world of exquisite gin-based cocktails crafted to perfection. From classic gin and tonics to innovative creations, our extensive library of recipes offers something for every taste. Our user-friendly interface makes cocktail creation a breeze, allowing you to explore, mix, and master the art of mixology."
                // }
                title={"GinJuice"}
                type={"Mobile"}
              />
            </div>
            <div className="col-span-6">
              <Project
                link={
                  "https://play.google.com/store/apps/details?id=com.nexusnova.ginjuice"
                }
                github={"https://github.com/NickM101/GinJuice"}
                img={ginjuice}
                // summary={
                //   "Elevate your mixology game with Gin Juice. Discover a world of exquisite gin-based cocktails crafted to perfection. From classic gin and tonics to innovative creations, our extensive library of recipes offers something for every taste. Our user-friendly interface makes cocktail creation a breeze, allowing you to explore, mix, and master the art of mixology."
                // }
                title={"GinJuice"}
                type={"Mobile"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                link={
                  "https://play.google.com/store/apps/details?id=com.nexusnova.ginjuice"
                }
                github={"https://github.com/NickM101/GinJuice"}
                img={ginjuice}
                summary={
                  "Elevate your mixology game with Gin Juice. Discover a world of exquisite gin-based cocktails crafted to perfection. From classic gin and tonics to innovative creations, our extensive library of recipes offers something for every taste. Our user-friendly interface makes cocktail creation a breeze, allowing you to explore, mix, and master the art of mixology."
                }
                title={"GinJuice"}
                type={"Mobile"}
              />
            </div>

            <div className="col-span-6">
              <Project
                link={
                  "https://play.google.com/store/apps/details?id=com.nexusnova.ginjuice"
                }
                github={"https://github.com/NickM101/GinJuice"}
                img={ginjuice}
                // summary={
                //   "Elevate your mixology game with Gin Juice. Discover a world of exquisite gin-based cocktails crafted to perfection. From classic gin and tonics to innovative creations, our extensive library of recipes offers something for every taste. Our user-friendly interface makes cocktail creation a breeze, allowing you to explore, mix, and master the art of mixology."
                // }
                title={"GinJuice"}
                type={"Mobile"}
              />
            </div>
            <div className="col-span-6">
              <Project
                link={
                  "https://play.google.com/store/apps/details?id=com.nexusnova.ginjuice"
                }
                github={"https://github.com/NickM101/GinJuice"}
                img={ginjuice}
                // summary={
                //   "Elevate your mixology game with Gin Juice. Discover a world of exquisite gin-based cocktails crafted to perfection. From classic gin and tonics to innovative creations, our extensive library of recipes offers something for every taste. Our user-friendly interface makes cocktail creation a breeze, allowing you to explore, mix, and master the art of mixology."
                // }
                title={"GinJuice"}
                type={"Mobile"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
