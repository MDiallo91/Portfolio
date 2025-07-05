import { Mail } from "lucide-react"
import profil from "../assets/profil.jpg"
const Home = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 mx-10 ">
        <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour, <br />je suis <span className="text-accent">Mamadou Diallo</span></h1>
            <p className="py-4 text-md text-center md:text-left">
                Je suis un developpeur fullsatack <br />
                avec 2 ans d'experience, utilisant Raact, Node js et Django. <br />
                Passioner par le UX et UI design. Contactez-moi si vous avez besoin de mes services
            </p>
            <a href="#" className="btn btn-accent md:w-fit  ">
                <Mail  className="w-5 h-5"/>
                Contactez-moi
            </a>
        
        </div>
        <div className="md:ml-60">
           <img src={profil} alt="Profil" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
           style={{borderRadius:"30% 70% 70% 30% / 67% 62% 38% 32%" }}
           />

        </div>
    </div>
  )
}

export default Home
