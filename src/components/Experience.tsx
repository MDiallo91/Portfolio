import Titre from "./Titre"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";

import google from "../assets/entreprise/google.png";
import meta from "../assets/entreprise/meta.webp";
import amazon from "../assets/entreprise/amazon.png";



const Experience = () => {
    const tecnos=[
        {id:1,nom:'HTML',image:imgHTML},
        {id:2,nom:'CSS',image:imgCSS},
        {id:3,nom:'JavaScript',image:imgJS},
        {id:4,nom:'React',image:imgREACT},
        {id:5,nom:'NodeJs',image:imgNODE},
        {id:6,nom:'TypeScript',image:imgTYPE},
        {id:7,nom:'Tailwind CSS',image:imgTAILWIND},
    ]

    const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        entreprise: "Google",
        period: "Sep 2022 - Présent",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps.",
            "Optimisation des performances de l'application.",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Fullstack Developer",
        entreprise: "Meta",
        period: "Jan 2021 - Août 2022",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image: meta,
    },
    {
        id: 3,
        role: "Frontend Developer",
        entreprise: "Amazon",
        period: "Mai 2019 - Déc 2020",
        description: [
            "Développement d'une interface utilisateur pour Amazon Web Services.",
            "Implémentation des tests unitaires et E2E.",
        ],
        image: amazon,
    },
];

  return (
    <div id="experience">
      <Titre titre="Expéricences"/>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0  md:w-1/3">
            {
                tecnos.map((tecno) =>(
                    <div key={tecno.id} className="flex flex-col justify-center items-center ">
                        <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                            <img src={tecno.image}alt="tecno.nom"  className="object-cover rounded-full h-full w-full"/>
                        </div>
                        <span className="pt-2 text-sm">{tecno.nom}</span>
                    </div>
                ))
            }
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
            {
                experiences.map((experience)=>(
                    <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                        <div className="flex items-center">
                            <img src={experience.image} alt="experience.entreprise" className="object-cover h-10 w-10"/>
                            <div className="ml-4">
                                <h1 className="text-xl text-accent font-bold">
                                    {experience.role}, {experience.entreprise}
                                </h1>
                                <span className="text-sm"> {experience.period} </span>
                            </div>
                        </div>
                        <ul>
                            {
                                experience.description.map((desc,index)=>(
                                    
                                    <ul key={index}>
                                        <li className="list-disc ml-16 mt-2"> {desc} </li>
                                    </ul>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }

        </div>
      </div>
    </div>
  )
}

export default Experience
