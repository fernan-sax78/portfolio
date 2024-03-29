"use client";

import Modal from "./Modal";
import { useState , useRef , useEffect} from 'react';
import { useTranslations } from "next-intl";
import Image from "next/image";
import { DownloadPDF , typewriterFunction} from '../app/function';




  
  const divImage = [
    'before:absolute',
    'before:top-4',
    'before:left-0.5',
    'before:rounded-full',
    'before:content[""]',
    'before:h-[250px]',
    'before:w-[250px]',
    'before:lg:h-[400px]',
    'before:lg:w-[400px]',
    'before:flex',
    'before:bg-[#181818]',
    'rounded-full',
    'bg-[#121212]',
    'w-[250px]',
    'h-[250px]',
    'lg:w-[400px]',
    'lg:h-[400px]',
    'relative',
    'overflow-hidden',
    'opacity-1',
  ];



function HeroSection() {

  const t = useTranslations('HeroSection');
  const t_2 = useTranslations('Modal')

const [modal, setModal] = useState(false);
const [typing, setTyping] = useState("")
const typewriter = useRef();

const text = `${t('sentence')}${t('author')}`;


//const { ref : myRef , inView : myElementisVisible } = useInView();

const URL_PDF = `/pdf/${t('download_file')}.pdf`;

const stateModal = () => setModal((prevState) => !prevState);

useEffect(() => {

 setTyping(typewriterFunction(text , typewriter.current));


 
}, []);


 

  return (
    <section className = "flex flex-col min-h-screen justify-center " id="hero">
   
     {modal && <Modal stateModal = {modal} >
              
       <button  
       onClick={stateModal}   
       className = "px-6 py-3 rounded-full mr-4  text-white bg-purple-500 border-1 border-black mt-3  hover:-translate-y-0.5 hover:bg-purple-600">
        {t_2('button')}
      </button>
                          
              </Modal> 
    }

    <div className = "grid grid-cols-1 sm:grid-cols-12 ">

<div className="col-span-7 place-self-center text-center sm:text-left max-[768px]:mt-12">


      <h1 className = "text-white mb-3 max-[375px]:text-2xl  text-4xl lg:text-6xl sm:text-3xl font-extrabold ">{t('title')}</h1>

        
          <div className = "font-[Courier] text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl" ref={typewriter}>
            {/* text here of typewriting */}
            
          </div>
      

        <div className = "mb-5 lg:mb-0">
            <button className = "px-6 py-3  w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black" onClick = {stateModal}>{t('button_one')}</button>
            <button 
            className = "px-6 py-3  max-[667px]:w-[185px] rounded-full mr-4  bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            onClick={() => {
              DownloadPDF(URL_PDF);
            }}
            >{t('button_two')}</button>
        </div>
</div>         
             
             <div className="col-span-5 place-self-center mt-[5rem] min-[844px]:ml-[50px] mb-4 lg:mt-0 ">

                  
                  
                <div className= {`${divImage.join(' ').toString()}`} >
                <Image 
                src = "/images/fernando-1.png"
                alt = "hero-image"
                className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                width = {300}
                height = {300}
                priority={true} // {false} | {true}
                style={{ width: '100%', height: 'auto' }}
                />
                 </div>

             </div>
    </div>


    </section>
  )
}

export default HeroSection;


