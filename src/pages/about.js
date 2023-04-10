import AnimatedText from "@/components/AnimatedText";
import Layouts from "@/components/Layouts";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
// import profilePic from "../../public/images/profile/developer-pic-2.png";
// import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

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
        <title>EdehJohnpaul | About Page</title>
        <meta name="description" content="my description" />
      </Head>
      <main className="flex w-full flex-col items-center dark:text-light justify-center">
        <Layouts className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 text-[4rem] lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold dark:text-light/75 uppercase text-dark/75">
                Biography
              </h2>
              <div className="w-[150%]">
                <p className="font-medium">
                  Hello, I am Edeh Johnpaul, a passionate Frontend Developer
                  with expertise in building beautiful and functional user
                  interfaces. My focus is primarily on the frontend, with skills
                  in HTML, CSS, JavaScript, React(NextJs), TailwindCss, Zustand
                  and Redux. I enjoy keeping up-to-date with the latest design
                  trends and am always looking for new and innovative ways to
                  create stunning user interfaces.
                </p>
                <p className="my-4 font-medium">
                  While my knowledge of Node.js and MongoDB is limited, I am
                  committed to continuously improving my skills and expanding my
                  knowledge. I believe that being a well-rounded developer is
                  important and am always eager to learn new technologies. With
                  my dedication to delivering high-quality work, I am confident
                  that I can exceed your expectations.
                </p>
                <p className="font-medium">
                  In my free time, I enjoy exploring new design concepts and
                  experimenting with new technologies. I am dedicated to
                  creating responsive, cross-platform web applications that
                  provide a seamless user experience. If you are looking for a
                  Frontend Developer who can bring your ideas to life, I am here
                  to help. Lets work together to create something amazing.
                </p>
              </div>
            </div>

            <div className="col-span-3 relative h-max  p-8">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" /> */}
              {/* <Image
                src={profilePic}
                alt="edehjohnpaul"
                className="w-[456px] h-[366px] bg-dark rounded-2xl"
              /> */}
              {/* rounded-2xl border-2 border-solid border-dark bg-light */}
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layouts>
      </main>
    </>
  );
};

export default about;
