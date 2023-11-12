import Project from "../atoms/Project"
import cubaphotos from "/src/assets/images/cubanphotos.png";
import wordpress from "/src/assets/images/wordpress.png"
import react_native from "/src/assets/images/react_native.png"
import portafolio from "/src/assets/images/portafolio.png"
function Portfolio() {
  return (
    <>
    <div className="pb-20 dark:text-slate-100 dark:bg-slate-900 pt-5">
   <h1 id="proyects" className="text-4xl font-bold text-center text-slate-950 dark:text-slate-200">Portafolio de proyectos</h1>
   <div className="mt-5 md:flex items-center justify-center">
    <Project text_img="Wordpress" img_tec={wordpress} image={cubaphotos} name="Cubaphotostrips" url="https://cubaphototrips.com/"/>
    <Project text_img="React Js" img_tec={react_native} image={portafolio} name="Javier Lopéz" url="https://javier-lopez-pnrp.vercel.app/"/>
    </div>
    </div>
    </>
  )
}

export default Portfolio