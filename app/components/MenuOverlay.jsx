

import NavLinks from "./NavLinks"

function MenuOverlay({links}) {

  
  return (
    <ul className = "flex flex-col py-4 items-center block md:hidden h-64 justify-center">
      {links.map((link , index ) => (
            
            <li key = {index}>
                <NavLinks href={link.path} title={link.title} />
            </li>

            
      ))}
    </ul>
  )
}

export default MenuOverlay
