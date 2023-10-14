import Project from "../atoms/Project"

function Portfolio() {
  return (
    <>
   <h1 id="proyects" className="text-4xl font-bold text-center mt-10  text-slate-950 dark:text-slate-200">Portafolio de Apps</h1>
   <div className="grid-cols-3 items-center justify-center ml-40">
    <Project name="Cubaphotostrips"/>
    <Project name="CV"/>

    </div>
    </>
  )
}

export default Portfolio