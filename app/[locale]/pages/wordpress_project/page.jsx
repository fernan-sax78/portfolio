"use client";

import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/outline';
import styles from '../../../../components/stylesAll.module.scss';
import Image from 'next/image';
import ExternalPageNavFooter from '../../../../components/ExternalPageNavFooter';
import { useTranslations } from "next-intl";

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
  const t = useTranslations('Wordpress');
  
  return (
<ExternalPageNavFooter wordpress={true}>
    <section className = {styles.message}>
      <div className = {styles.messageTitle}>
       {/* wordpress png */}    
        <Image src={'/images/wordpress.png'} width={80} height={80} alt='wordpress_img'/>
        <h1>{t('title')}</h1>
      </div>
      <div>
        <h1>{t('description')}</h1>
      </div>
      <button onClick={() => router.back()} className = {otherStyles.join(' ').toString()}>
        <HomeIcon className = 'w-8'/>
           {t('link')}
      </button>
    </section>
</ExternalPageNavFooter>
  )
}

export default Message;
