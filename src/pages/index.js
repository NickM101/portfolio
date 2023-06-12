import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import dummyImage from "../../public/images/profile.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nick Munene | Software Engineer | Creating Innovative Solutions</title>
        <meta name="description" content="Welcome to the website of Nick Munene, a skilled and passionate software engineer specializing in creating innovative solutions. Explore Nick Munene's portfolio, expertise, and commitment to driving business success through cutting-edge software development." />
      </Head>
      <main>
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={dummyImage}
                alt="Nick Munene"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center mx-4">
              <AnimatedText
                className="!text-6xl !text-left"
                text="Transforming Ideas into Elegant Software Solutions."
              />

              <p className="my-4 text base font-medium">
                My expertise lies in crafting robust, scalable, and user-centric
                software solutions that solve complex challenges. By leveraging
                my strong analytical skills, attention to detail, and in-depth
                knowledge of industry best practices, I have helped numerous
                organizations optimize their operations and achieve their
                digital goals.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold mx-2 hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:nickmunene101@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline "
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
