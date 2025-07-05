import { LaptopMinimal } from "lucide-react"

 const Navbar = () => {
   return (
     <div className="flex justify-center md:justify-around  items-center p-5 md:sticky top-0 md:bg-base-300 " >
       <a href="#" className="flex items-center font-bold text-3xl md:text-xl ">
         <LaptopMinimal  className="mr-2"/>
         404 <span className="text-accent "> DEV</span>
       </a>
       <ul className="hidden md:flex space-x-4">
        <li>
            <a href="#home" className="btn btn-sm btn-ghost">
                Accueil
            </a>
        </li>

         <li>
            <a href="#about" className="btn btn-sm btn-ghost">
                A propos
            </a>
        </li>

         <li>
            <a href="#experience" className="btn btn-sm btn-ghost">
                Mes expériences
            </a>
        </li>

         <li>
            <a href="#projet" className="btn btn-sm btn-ghost">
                Mes projets
            </a>
        </li>

       </ul>

     </div>
   )
 }
 
 export default Navbar
 