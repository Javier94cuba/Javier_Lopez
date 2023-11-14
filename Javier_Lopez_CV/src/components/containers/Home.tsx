import image from "/src/assets/images/Javier.png";
import Button from "../atoms/Button"; //component button
import Tecnologies from "../atoms/Tecnologies";
import react_img from "/src/assets/images/react_native.png"
import react_native from "/src/assets/images/nextjs.png"
import tailwind from "/src/assets/images/tailwind.png"
import vite from "/src/assets/images/vite.png"
import wordpress from "/src/assets/images/wordpress.png"
import typescript from "/src/assets/images/typescript.png"
import github from "/src/assets/images/github.png"

function Home() {
  return (
    <div className=" w-full h-full bg-white dark:bg-slate-900 text-slate-200 mt-10 dark:mt-0 dark:pb-10">
      <div className="md:flex md:justify-center md:space-x-10">
        <div className="md:w-1/2 md:pt-10 md:pl-20">
        <h1 className="text-4xl md:text-6xl font-bold md:mt-6 text-center text-zinc-800 dark:text-slate-100 animate-flip-down animate-once">Frontend Developer <br/> and movile</h1>
        <p className="pt-10 text-center animate-flip-down animate-once text-slate-950 dark:text-slate-200">¡Hola! Soy Javier Lopéz, tengo 3 años de experiencia como desarrollador de software, graduado
         en la universidad de Ciencias Informáticas UCI (La Habana-Cuba)</p>
        <div className="">
        <p><a target="_blank" href="https://github.com/Javier94cuba">
        <Button  text={"Perfíl Github"} img_alt={github}/>
        </a></p> 
        </div>
        </div>
        <div className="md:flex md:justify-center md:items-center md:w-1/2 md:pt-8">
          <img className="w-1/2 aspect-square object-cover ml-28 mt-10 md:w-1/2 rounded-full md:aspect-square md:object-cover md:skew-y-2 md:mr-20" src={image} />
        </div>
        </div>
      <section className="pb-6">
        
      <h1 className="text-4xl font-bold text-center mt-10 mb-10  text-slate-950 dark:text-slate-200">Tecnologías</h1>
      <h2 className=" text-center mt-2  text-slate-950 dark:text-slate-200">Con las que actualmente trabajo, en mis proyectos recientes </h2>
      <div className="columns-3 md:flex md:space-x-10 pt-4 md:justify-center">
      <Tecnologies image_url={react_img} text_image={"React Js"}/>
      <Tecnologies image_url={typescript} text_image={"Typescript"}/>
      <Tecnologies image_url={tailwind} text_image={"Tailwind Css"}/>
      <Tecnologies image_url={wordpress} text_image={"Wordpress"}/>
      <Tecnologies image_url={react_native} text_image={"Next Js"}/>
      <Tecnologies image_url={vite} text_image={"Vite"}/>
      </div>
      </section>
    </div>
  )
}
export default Home