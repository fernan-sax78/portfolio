"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Bars3Icon , XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


const navLink = [
    {
        title : "About",
        path : "about",
    },
        {
        title : "Projects",
        path : "projects"
    },
        {
        title : "Contact",
        path : "contact"
    },
]

  function Nav() {
   
  const [navbarOpen , setNavbarOpen] = useState(false);

  

  const stateNav = () => setNavbarOpen((prevState) => !prevState);

  return (
    <>
    <nav className = "fixed top-0 left-0 right-0 z-10 bg-[#121212]  bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-2">
        <a href = "#hero" className = " text-4xl md:text-5xl text-white font-semibold">
          <span className = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">TitoDev...</span>
        </a>
        <div className="mobile-menu block md:hidden" >
          {
               !navbarOpen ? 
        <button 
        onClick = {stateNav} 
        className = "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className = "h-5 w-5"/></button> 
        :
        <button 
        onClick = {stateNav} 
        className = "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className = "h-5 w-5"/></button>
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id = "navbar">
          
            <ul className = "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 " >
                   {
                    navLink.map(( link , index ) => (
                        <li key = {index} >
                             <NavLinks href={`#${link.path}`} title={link.title} />
                        </li>
                    )) 
                   }
            </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLink} /> }
    </nav>
</>
  )
}

export default Nav
