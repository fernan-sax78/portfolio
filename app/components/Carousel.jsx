"use client"

import { useState } from "react";
import { ArrowLeftIcon  , ArrowRightIcon} from "@heroicons/react/24/outline";




function Carousel({ children : slides}) {
const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(curr => curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurrent(curr => curr === slides.length - 1 ? 0 : curr + 1);
  return (
    <div className="overflow-hidden relative rounded-2xl lg:w-[50rem] lg:my-0 lg:mx-auto">
      <div className="flex transition-transform ease-out duration-500" style={{transform : `translateX(-${current * 100}%)`}}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ArrowLeftIcon  className="h-6 w-6 stroke-orange-600"/>
        </button>
         <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ArrowRightIcon  className="h-6 w-6 stroke-orange-600"/>
        </button>       
      </div>
    </div>
  )
}

export default Carousel;
