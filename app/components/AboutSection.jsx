"use client";

import Image from "next/image";
import { useState , useTransition } from "react";
import TabButton from "./TabButton";
import styles from './stylesAll.module.scss';
import { useInView } from "react-intersection-observer";


const TAB_DATA = [
    {
        title : "Skills",
        id : "Skills",
        content : (
            <ul className = "list-disc pl-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Mobile App with React-Native</li>
                <li>Node.js</li>
                <li>WordPress</li>
                <li>FRAMEWORKS JS like NextJS</li>
                <li>MySQL , MongoDB , AWS </li>
                <li>FRAMEWORKS CSS like Tailwinds , Bootstrap , Material-UI and Semantic UI React </li>
                <li>Strapi</li>
            </ul>
        ),
    },
        {
        title : "Education",
        id : "Education",
        content : (
            <ul className = "list-disc pl-2">
                <li>Courses online (Udemy-Platzi) for Three Years</li>
            </ul>
        ),
    },
        {
        title : "Experience",
        id : "Experience",
        content : (
            <ul className = "list-disc pl-2">
               <li>I have collaborated for the last 2 years up to today with Ilo11</li>
            </ul>
        ),
    },
]




function AboutSection() {
   
    const [tab , setTab] = useState('Skills');
    const [ isPending , startTransition] = useTransition(); 
    const { ref : myRef , inView : myElementisVisible } = useInView();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }


  return (
    <section className = "text-white flex flex-col min-h-screen justify-center" id = "about">
      <div className= "md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16" >
        <Image 
        src = "/images/fernando-2.JPG"
        width ={500}
        height = {500}
        alt = "computer"
        className = {`rounded-3xl ${myElementisVisible ? styles.animationTwo : ''}`}
        priority={true} // {false} | {true}
        style={{ width: '100%', height: 'auto' }}
        ref = {myRef}
        />
        <div className = "max-[768px]:mt-3 lg:mt-0 text-left flex flex-col h-full">
            <h2 className = "text-4xl font-bold text-white mb-4">About Me</h2>
            <p className = "text-base lg:text-lg">
                Here you can find some information about what i do,
                if you are interesting in me, i remember you to download my CV or write me in Contact module,
                and hire me .... don't will be a bad choice. Thanks a lot.
            </p>
            <div className = "flex flex-row mt-8">
                <TabButton 
                selectTab={() => handleTabChange('Skills')} 
                active={tab === 'Skills'}
                >
                  {/*   {" "} */}
                    Skills{/* {" "} */}
                </TabButton>

                <TabButton 
                selectTab={() => handleTabChange('Education')} 
                active={tab === 'Education'}
                >
                    {/* {" "} */}
                    Education{/* {" "} */}
                </TabButton>

                <TabButton 
                selectTab={() => handleTabChange('Experience')} 
                active={tab === 'Experience'}
                >
                    {/* {" "} */}
                    Experience{/* {" "} */}
                </TabButton>

            </div>

          <div className="mt-8 h-[300px] flex justify-right ">{TAB_DATA.find((t) => t.id === tab).content}</div> 

        </div>
      </div>
    </section>
  )
}

export default AboutSection;
