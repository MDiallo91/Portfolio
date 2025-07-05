interface Props {
    titre:string
}

const Titre = ({titre}:Props) => {
  return (
    <h1 className="font-bold uppercase mb-5 text-center text-3xl">{titre}</h1>
  )
}

export default Titre
