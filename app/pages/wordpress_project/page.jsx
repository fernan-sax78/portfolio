"use client";

import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/outline';
import styles from '/app/components/stylesAll.module.scss';
import Image from 'next/image';
//import Link from 'next/link';
import ExternalPageNavFooter from '../../components/ExternalPageNavFooter';

const otherStyles = [
  'mt-[1.25rem]',
  'bg-transparent',
  'hover:bg-purple-500',
  'text-purple-400',
  'font-semibold',
  'hover:text-white',
  'py-2',
  'px-4',
  'border',
  'border-purple-300',
  'hover:border-transparent',
  'rounded-full',
  'flex',
  'items-center',
  'items-center',
  'justify-items-center',
  'gap-3',
]

function Message() {

  const router = useRouter();
  
  return (
<ExternalPageNavFooter wordpress={true}>
    <section className = {styles.message}>
      <div className = {styles.messageTitle}>
       {/* wordpress png */}    
        <Image src={'/images/wordpress.png'} width={80} height={80} alt='wordpress_img'/>
        <h1>THIS IS A WORDPRESS PROJECT</h1>
      </div>
      <div>
        <h1>I apologize with inconvenient for no show the code of this project, 
        we invite you and visit the website and take a look. 
        If this kind of work like it, contact me and i personalizate all kind of 
        Wordpress work for you . Thanks for read this message.</h1>
      </div>
      <button onClick={() => router.back()} className = {otherStyles.join(' ').toString()}>
        <HomeIcon className = 'w-8'/>
           Return to Projects 
      </button>
    </section>
</ExternalPageNavFooter>
  )
}

export default Message;
