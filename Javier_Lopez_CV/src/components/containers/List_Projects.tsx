import Project from "../atoms/Project"
import cubaphotos from "/src/assets/images/cubanphotos.png";
import wordpress from "/src/assets/images/wordpress.png"
import cv from "/src/assets/images/cv.png"
import react_js from "/src/assets/images/react.png"
function Portfolio() {
  return (
    <>
    <div className="pt-20 pb-20 dark:text-slate-100 dark:bg-slate-900">
   <h1 id="proyects" className="text-4xl font-bold text-center text-slate-950 dark:text-slate-200">Portafolio de proyectos</h1>
   <div className="grid-cols-3 items-center justify-center ml-40">
    <Project text_img="Wordpress" img_tec={wordpress} image={cubaphotos} name="Cubaphotostrips"/>
    <Project text_img="React JS" img_tec={react_js} image={cv} name="Curriculum Vitae"/>
    </div>
    </div>
    </>
  )
}

export default Portfolio