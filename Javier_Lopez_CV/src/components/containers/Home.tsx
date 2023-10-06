import image from "/src/assets/images/Javier.png";
import Button from "../atoms/Button"; //component button
import Tecnologies from "../atoms/Tecnologies";
import react_img from "/src/assets/images/react.png"
import react_native from "/src/assets/images/react_native.png"
import tailwind from "/src/assets/images/tailwind.png"
import vite from "/src/assets/images/vite.png"
import wordpress from "/src/assets/images/wordpress.png"
import typescript from "/src/assets/images/typescript.png"
import github from "/src/assets/images/github.png"

function Home() {
  return (
    <div className=" w-full h-full bg-white dark:bg-slate-900 text-slate-200 mt-10 dark:mt-0 dark:pb-10">
      <div className="flex justify-center space-x-10">
        <div className="w-1/2 pt-10 pl-20">
        <h1 className="text-6xl font-bold ml-24 mt-6 text-center text-zinc-800 dark:text-slate-100 animate-flip-down animate-once">Frontend Developer <br/> and movile</h1>
        <p className="p-4 ml-24 text-center animate-flip-down animate-once text-slate-950 dark:text-slate-200">¡Hola! Soy Javier Lopéz, tengo 4 años de experiencia como desarrollador de software, graduado
         en la universidad de Ciencias Informáticas UCI (La Habana-Cuba)</p>
        <div className="flex justify-center ml-24">
        <Button text={"Perfíl Github"} img_alt={github}/>
        </div>
        </div>
        <div className="flex justify-center w-1/2 pt-8">
          <img className="w-1/3 rounded-full  skew-y-2 mr-20" src={image} />
        </div>
        </div>
      <section className="pb-6">
        
      <h1 className="text-4xl font-bold text-center mt-10  text-slate-950 dark:text-slate-200">Tecnologías</h1>
      <h2 className=" text-center mt-2  text-slate-950 dark:text-slate-200">Con las que actualmente trabajo, <strong>seleccione</strong> una para ver las librerías </h2>
      <div className="flex space-x-10 pt-4 justify-center">
      <Tecnologies image_url={react_img} text_image={"React Js"}/>
      <Tecnologies image_url={react_native} text_image={"React Native"}/>
      <Tecnologies image_url={tailwind} text_image={"Tailwind Css"}/>
      <Tecnologies image_url={typescript} text_image={"Typescript"}/>
      <Tecnologies image_url={vite} text_image={"Vite"}/>
      <Tecnologies image_url={wordpress} text_image={"Wordpress"}/>
      </div>
      </section>
    </div>
  )
}
export default Home