import Titre from "./Titre"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video, Youtube } from "lucide-react";



const Project = () => {


    const projets=[
        {
            id:1,
            titre:"Gestionnaire de taches",
            description:"      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsum nisi eum repellat qui. Officiis fugiat quibusdam ",
            techno:["React","Node.js","Tailwind Css"],
            depoLink:"#",
            demoLink:'#',
            image:img1,
        },
         {
            id:2,
            titre:"Plateforme E-commerce",
            description:"      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsum nisi eum repellat qui. Officiis fugiat quibusdam ",
            techno:["React","Node.js","Tailwind Css"],
            depoLink:"#",
            demoLink:'#',
            image:img2,
        },
        {
            id:3,
            titre:"Gestionnaire de taches",
            description:"      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsum nisi eum repellat qui. Officiis fugiat quibusdam ",
            techno:["React","Node.js","Tailwind Css"],
            depoLink:"#",
            demoLink:'#',
            image:img3,
        },
         {
            id:4,
            titre:"Gestionnaire de taches",
            description:"      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsum nisi eum repellat qui. Officiis fugiat quibusdam ",
            techno:["React","Node.js","Tailwind Css"],
            depoLink:"#",
            demoLink:'#',
            image:img4,
        },
    ]
  return (
    <div id="projet" className="mt-10">
      <Titre titre="Mes projets"/>
      <div className="grid md:grid-cols-3 gap-4">
        {
            projets.map((projet) =>(
                <div key={projet.id} className="bg-base-300 p-4 h-fit rounded-xl shadow-lg">
                    <img src={projet.image} alt="projet.title" className="w-full rounded-xl h-56 object-cover" />
                    <div>
                        <h1 className="py-3 font-bold">
                            {projet.titre}
                        </h1>
                        <p className="text-sm">
                            {projet.description}
                        </p>
                    </div>

                    <div className=" flex flex-wrap gap-2 my-3 ">
                        {projet.techno.map((tech) =>(
                            <span className="badge badge-accent badge-sm"> {tech} </span>
                        ))}
                    </div>
                    <div className="flex">
                        <a className="btn w-2/3 btn-accent" href={projet.demoLink}>Demo
                            <Youtube  className="w-4"/>
                        </a>
                         <a className="btn w-1/3 ml-2 btn-neutral" href={projet.depoLink}>
                            <Github  className="w-4"/>
                        </a>
                    </div>
                </div>

            ))
        }
      </div>
    </div>
  )
}

export default Project
