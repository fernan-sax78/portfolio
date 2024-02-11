import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import {useTranslations} from 'next-intl';

 
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <>
    <nav className = "top-0 left-0 right-0 z-10 bg-[#121212]  bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-2">
        <Link href = {"/"} className = " text-4xl md:text-5xl text-white font-semibold">
          <span className = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">TitoDev...</span>
        </Link>
      </div>
    </nav>
    <section className='gap-3 flex flex-col justify-center items-center h-[100dvh] p-4'>
      <h1 className='text-3xl text-white'>{t('title')}</h1>
      <p className='text-white text-center'>{t('description')}</p>
      <Image src = "/not_found.png" width = {300} height ={300} alt='foto_not_found'/>
      <a href="/" className='w-[150px] bg-red-400 p-3 rounded-full text-white text-md'>{t('link')}</a>
    </section>

    <Footer />  
    </>

   
  );
}