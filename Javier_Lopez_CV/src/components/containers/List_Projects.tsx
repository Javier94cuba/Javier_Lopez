import Project from "../atoms/Project"
import cubaphotos from "/src/assets/images/cubanphotos.png";
import tiendacentro from "/src/assets/images/tiendacentro.png";
import wordpress from "/src/assets/images/wordpress.png"
import react_native from "/src/assets/images/react_native.png"
import portafolio from "/src/assets/images/portafolio.png"
import nextjs from "/src/assets/images/nextjs.png"
import app from "/src/assets/images/app.png"
function Portfolio() {
  return (
    <>
    <div className="pb-20 dark:text-slate-100 dark:bg-slate-900 pt-5">
   <h1 id="proyects" className=" md:ml-20 text-4xl font-bold text-center text-slate-950 dark:text-slate-200">Projects</h1>
   <div className="mt-5 md:flex items-center justify-center md:ml-10 ">
    <Project text_img="React Js" img_tec={react_native} image={portafolio} name="Javier Lopéz" url="https://javier-lopez-pnrp.vercel.app/"/>
    <Project text_img="Wordpress" img_tec={wordpress} image={cubaphotos} name="Cubaphotostrips" url="https://cubaphototrips.com/"/>
    <Project text_img="Wordpress" img_tec={wordpress} image={tiendacentro} name="Tienda Centro" url="https://tiendacentro.net/"/>
    </div>
    <div className="mt-5 mr-10 -ml-10 md:flex md:ml-44 ">
    <Project text_img="Next JS" img_tec={nextjs} image={app} name="App-Gestión" url="https://gestor-hotel-git-master-javier94cubas-projects.vercel.app/Recibir_envio"/>
    </div>
    </div>
    </>
  )
}

export default Portfolio