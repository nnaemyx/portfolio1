import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layouts from "@/components/Layouts";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/artsbyart.png";
import project2 from "../../public/images/projects/furnishop.jpg";
import project3 from "../../public/images/projects/analytics.png";
import project4 from "../../public/images/projects/healthcare.jpg";
import project5 from "../../public/images/projects/hng.png";
import project6 from "../../public/images/projects/savespace.png";
import project7 from "../../public/images/projects/nuesa.png";
import project8 from "../../public/images/projects/hoobank.png";
import project9 from "../../public/images/projects/linkedinprofile.png";
import project10 from "../../public/images/projects/loginandsignup.png";
import project11 from "../../public/images/projects/goalsetter.jpg"
import project12 from '../../public/images/projects/chemical.jpg'
import project13 from "../../public/images/projects/mmainspire.png"
import project14 from "../../public/images/projects/entrypal.png"

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full  flex lg:flex-col items-center justify-between relative rounded-br-2xl
    rounded-3xl p-12 border border-solid border-dark dark:bg-dark dark:border-light bg-light shadow-2xl
    "
    >
      <div className="absolute xs:-right-2 sm:h-[102%]  xs:w-full xs:rounded-[1.5rem] top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt="title" className="w-full h-auto"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between lg:w-full lg:pl-0 lg:pt-6 pl-6">
        <span className="text-primary dark:text-primaryDark font-medium xs:text-base text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light sm:text-sm font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="flex mt-2 items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg 
            sm:px-4 sm:text-base
            font-semibold"
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
    rounded-3xl p-6 relative border border-solid xs:p-4 border-dark dark:border-light dark:bg-dark bg-light 
    "
    >
      <div className="absolute top-0 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] dark:bg-light rounded-br-3xl bg-dark" />

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
        <span className="text-primary dark:text-primaryDark lg:text-lg md:text-base font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <p className="my-2 font-medium dark:text-light text-dark">{summary}</p>

        <div className="flex justify-between w-full mt-2 items-center">
          <Link
            href={link}
            target="_blank"
            className="text-lg underlin md:text-base font-semibold"
          >
            Visit
          </Link>

          <Link href={github} target="_blank" className="w-8 md:w-6">
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
            className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                title="E-commerce Website"
                summary="Arts by Art is an online platform for managing art-related projects, providing functionalities such as a ticketing system for project assignment, procedure tracking, and progress monitoring. Users can upload and manage media files, while the platform supports real-time progress updates and includes a chat feature for communication between users and Integrated Consultants. The system leverages React.js for the frontend, Node.js and Express for the backend, and Appwrite for database management and user authentication."
                link="https://www.artsbyart.com"
                img={project1}
                type="Full-Stack App"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="E-commerce Website"
                summary="Mmainspire is an online platform for managing fashion-related projects, providing functionalities such as a ticketing system for project assignment, procedure tracking, and progress monitoring. Users can upload and manage media files, while the platform supports real-time progress updates and includes a chat feature for communication between users and Integrated Consultants. The system leverages React.js for the frontend, Node.js and Express for the backend, and Appwrite for database management and user authentication."
                link="https://www.mmainspire.com"
                img={project13}
                type="Full-Stack App"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Ticketing Website"
                summary="EntryPal is a digital tool designed to streamline entry management for events and venues, providing efficient guest check-ins and real-time tracking. It offers features such as QR code scanning, attendee verification, and detailed analytics to enhance event security and organization. The app aims to simplify the entry process, ensuring a seamless experience for both organizers and guests."
                link="https://www.entrypalapp.com"
                img={project14}
                type="Full-Stack App"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-commerce Website"
                summary="I developed this using Reactjs and Tailwindcss. Here you can discover a vast collection of high-quality and stylish furniture for your home or office"
                link="https://www.mmainspire.com"
                img={project2}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Analytics Website"
                summary="This is a landing page for analytics, i used Reactjs and Tailwindcss. Here we provide comprehensive data analysis and visualization tools to help you gain insights into your business performance"
                link="https://tailwind-react-tawny.vercel.app/"
                img={project3}
                type="featured projects"
                github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="TO-DO App"
                summary="This is a full stack app where you can sign up and set your gals for the day"
                link="https://mern-h9n4.onrender.com/"
                img={project11}
                type="Full-Stack App"
                github="/"
              />
            </div>
            
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Health Care Website"
                summary="A personal project, i used Reactjs and Tailwindcss"
                link="https://healthcare-c8mm.vercel.app/"
                img={project4}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="HealthCare Website"
                summary="A personal project, i used Reactjs and Tailwindcss"
                link="https://healthcare-c8mm.vercel.app/"
                img={project5}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Fintech Website"
                summary="I developed this with Reactjs and Tailwindcss"
                link="https://ece-nau.com"
                img={project6}
                type="projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="School Website"
                summary="Currently working on this. This site is for Engineering students in unizik where they can download resources and see recent and upcoming events
                . I'm the project manager. The link under is the demo link
                "
                link="https://client-side-livid.vercel.app/"
                img={project7}
                type="featured projects"
                github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="School Website"
                summary="I developed an app that stores users data in a database"
                link="https://chemical.onrender.com/"
                img={project12}
                type="Full-Stack App"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Fintech Website"
                summary="Personal project"
                link="https://hook-bank.vercel.app/"
                img={project8}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Web3 Website"
                summary="ecffg"
                link="https://www.codenjobs.com/register"
                img={project9}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Web3 Website"
                summary="ecffg"
                link="https://www.codenjobs.com/register"
                img={project10}
                type="featured projects"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="HNG Internship"
                summary="I participated in the recent HNG internship program but couldn't finish "
                link="https://hngstage1.vercel.app/"
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
