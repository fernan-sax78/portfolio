import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '/public/github-icon.svg';
import { HomeIcon } from '@heroicons/react/24/outline';





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
  'w-[15.6rem]',
];

function ExternalPageNavFooter({children , title , linkGitHub , state , wordpress}) {

  return (
    <div>
    <nav className = "top-0 left-0 right-0 z-10 bg-[#121212]  bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-2">
        <Link href = {"/"} className = " text-4xl md:text-5xl text-white font-semibold">
          <span className = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">TitoDev...</span>
        </Link>
      </div>
    </nav>

    <div className= ' container lg:mx-auto md:mx-auto  ' > 
      
      <h1 className = " font-sans text-white mb-6 max-[375px]:text-2xl text-center text-4xl lg:text-6xl sm:text-3xl  mt-5">
        {title}
      </h1>
    {children}
     {!wordpress ? (
      <div className='container lg:w-[50rem] mx-auto my-5 '>
      <p className='text-white text-base lg:text-lg p-5 mt-10'>
        You can try my chat app by downloading the right tools 
        like Xcode and Android Studio and test with 
        <Image className = "w-5 contrast-0 ml-2 mr-2 inline" src= '/images/expo.png' width={100} height={100} alt='expo'/>
        , even by installing 
        it in a physical device like Googe Play or App Store in links bellow

        . { state ? (
          <span>
             Here is my server code in
            <Image src = {GithubIcon} alt = "GitHub Icon" className = "w-5 contrast-0 ml-2 mr-2 inline"/>
            (
            <Link href ={linkGitHub}  target='_blank' className='hover:text-blue-500'> 
             server  
            </Link>
            )
         </span> 

        ) : null }

        </p>

          <Link href="https://apps.apple.com/us/app/expo-go/id982107779">
            <Image className = "ml-2 mr-2 inline" src = "/images/android_store.png" alt="Download App" width={100} height={100}/>
          </Link> 
          <Link href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=it&gl=US">
            <Image className = "ml-2 mr-0 inline"  src = "/images/app_store.png" alt="Download App" width={100} height={100}/>
          </Link>

      <Link  href = "/" className = {otherStyles.join(' ').toString()} style={{margin : '1.25rem auto .3125rem auto'}}>
        <HomeIcon className = 'w-8'/>
           Return to Portfolio 
      </Link>
      </div>      
     ): null}
    </div>
    <Footer /> 
    </div>
  )
}

export default ExternalPageNavFooter;
