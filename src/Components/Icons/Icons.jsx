
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Icons() {
  return (
    <> 
    Featured Projects
    Here are some of the selected projects that showcase my passion for front-end development.
    <div className="Icons mt-5">
     <ul className="flex flex-wrap justify-start   text-white "> 
     <li className="p-3"><a className="text-2xl" href="https://www.linkedin.com/in/mahmoud-raslan-382a29157/" target="_blank" rel="noopener noreferrer"> <BiLogoLinkedinSquare   />
     </a>
     </li>
     
    <li className="p-3 "><a className="text-2xl" href="https://github.com/raslan55" target="_blank" rel="noopener noreferrer">   <FaGithub  />
       </a></li>
    <li className="p-3">
        <a href="https://api.whatsapp.com/send?phone=01127990329"  className="text-2xl" target="_blank" rel="noopener noreferrer">  <FaWhatsapp  />
        </a>
     </li>
     </ul>
    
    </div>
    </>
  )
}

