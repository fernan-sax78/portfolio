"use client";

import NavLinks from "./NavLinks";
import Language from "./Language";

function MenuOverlay({links}) {

  
  return (
    <ul className = "flex flex-col py-4 items-center block md:hidden h-64 justify-center">
      
      {links.map((link , index ) => (
            
            <li key = {index}>
                <NavLinks href={`#${link.path}`} title={link.title} />
            </li>

            
      ))}
      <Language />
    </ul>
  )
}

export default MenuOverlay
