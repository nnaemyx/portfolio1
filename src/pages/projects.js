import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layouts from "@/components/Layouts";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/ece-nau.jpg";
import project2 from "../../public/images/projects/furnishop.jpg";
import project3 from "../../public/images/projects/analytics.png";
import project4 from "../../public/images/projects/healthcare.jpg";
import project5 from "../../public/images/projects/hng.png";
import project6 from "../../public/images/projects/savespace.png";
import project7 from "../../public/images/projects/nuesa.png";
import project8 from "../../public/images/projects/hoobank.png";
import project9 from "../../public/images/projects/linkedinprofile.png";
import project10 from "../../public/images/projects/loginandsignup.png";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl p-12 border border-solid border-dark dark:bg-dark dark:border-light bg-light shadow-2xl
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt="title" className="w-full h-auto"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="flex mt-2 items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, summary, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center
    rounded-3xl p-6 relative border border-solid border-dark dark:border-light dark:bg-dark bg-light 
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] dark:bg-light rounded-br-3xl bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt="title" className="w-full h-auto"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        
        />
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

        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="flex justify-between w-full mt-2 items-center">
          <Link
            href={link}
            target="_blank"
            className="text-lg underline font-semibold"
          >
            Visit
          </Link>

          <Link href={github} target="_blank" className="w-8">
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
        <title>EdehJohnpaul | Projects Page</title>
        <meta name="description" content="my description" />
      </Head>
      <main className="w-full mb-16 flex dark:text-light flex-col items-center justify-center">
        <Layouts className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                title="School Website"
                summary="This is School website developed by the TEZON team. I did some of the frontend part and also some of the backend. Here you can find a variety of helpful resources to support your academic journey. We have a section specifically dedicated to providing students with access to downloadable PDFs. Simply navigate to the Register page, create and account and browse through the available files. We used Reactjs, Tailwindcss and Nodejs"
                link="https://ece-nau.com"
                img={project1}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="E-commerce Website"
                summary="I developed this using Reactjs and Tailwindcss. Here you can discover a vast collection of high-quality and stylish furniture for your home or office"
                link="https://ece-nau.com"
                img={project2}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Analytics Website"
                summary="This is a landing page for analytics, i used Reactjs and Tailwindcss. Here we provide comprehensive data analysis and visualization tools to help you gain insights into your business performance"
                link="https://ece-nau.com"
                img={project3}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project4}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project5}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project6}
                type="projects"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project7}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project8}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project9}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project10}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="School Website"
                summary="ecffg"
                link="https://ece-nau.com"
                img={project5}
                type="Projects"
                github="/"
              />
            </div>
          </div>
        </Layouts>
      </main>
    </>
  );
};

export default projects;
