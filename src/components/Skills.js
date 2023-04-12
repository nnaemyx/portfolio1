import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name,x,y}) => {


  return <div>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:text-dark dark:bg-light text-light py-3 px-6 absolute shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
    xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
    '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y, transition:{duration:1.5}}}
        
        viewport={{once: true}}
        >

          {name}
        </motion.div>
  </div>
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-[4rem] mt-48 w-full text-center  md:text-6xl md:mt-32 '>Skills</h2>
      <div className='w-full h-screen 
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      relative flex items-center justify-center dark:bg-circularDark  bg-circularLight'>
        <motion.div className='flex items-center 
        lg:p-6 md:p-4 xs:text-xs xs:p-2
        dark:text-dark dark:bg-light justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
        whileHover={{scale:1.05}}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-30vw' y='2vw'/>
        <Skill name='CSS' x='-8vw' y='-12vw'/>
        <Skill name='Javascript' x='20vw' y='6vw'/>
        <Skill name='ReactJs' x='-8vw' y='12vw'/>
        <Skill name='NextJs' x='-30vw' y='-15vw'/>
        <Skill name='TailwindCss' x='-45vw' y='-4vw'/>
        <Skill name='NodeJs' x='15vw' y='-12vw'/>
        <Skill name='MongoDB' x='25vw' y='-5vw'/>
        <Skill name='Figma' x='0vw' y='-20vw'/>
        <Skill name='Zustand' x='-25vw' y='18vw'/>
        <Skill name='Redux' x='18vw' y='18vw'/>
      </div>
    </>
  )
}

export default Skills