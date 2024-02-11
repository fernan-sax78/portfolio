
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTranslations } from 'next-intl';
import { locales } from '../i18n';




function Language() {

    const [dropDown, setDropDown] = useState(false);
    const t = useTranslations('LocaleSwitcher');

    const dropDownClick = () => setDropDown((prevState) => !prevState);



  return (
    <div 
    onClick={dropDownClick}
    className='
      text-center
      relative 
      rounded-full 
      cursor-pointer 
      focus:outline-none 
      appearance-none 
      w-[200px] 
      text-[1.15rem]
      px-4
      bg-[#171717] 
      text-[#adb7be] 
      border-solid 
      border-2 
      border-purple-500'>
      {dropDown ? (
      <ul
      className="
      rounded-3xl
      absolute 
      top-10 
      left-0 
      w-[200px]
      text-[1.15rem]
      h-[110px]
      px-4
      flex
      flex-col
      items-center
      justify-center
      bg-[#171717] 
      text-[#adb7be] 
      border-solid 
      border-2 
      border-purple-500">
        {locales.map(current => (
          <a href= {`/${current}`} key={current} className="hover:border border-slate-600 rounded-lg w-[180px]">
            {t('locale', {locale: current})} 
          </a>
        ))}
      </ul>
      ): null }
      {t('label')}
     <ChevronDownIcon color="#fff" className="absolute right-2 top-2 w-[15px]" />
    </div>
  )
}

export default Language;
