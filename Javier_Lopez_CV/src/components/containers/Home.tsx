import image from "../containers/Javier.png";
import Button from "../atoms/Button"; //component button
import Tecnologies from "../atoms/Tecnologies";
import react_img from "./react.png"
import react_native from "./react_native.png"
import tailwind from "./tailwind.png"
import vite from "./vite.png"
import wordpress from "./wordpress.png"
import typescript from "./typescript.png"

function Home() {
  return (
    <div className=" w-full h-4/5" >
      <div className="bg-white flex justify-center space-x-10">
        <div className="w-1/2 pt-10 pl-20">
        <h1 className="text-6xl font-bold mt-6 text-center text-zinc-800">Frontend Developer <br/> and movile</h1>
        <p className="p-4 text-center">¡Hola! Soy Javier Lopéz, tengo 4 años de experiencia como desarrollador de software, graduado
         en la universidad de Ciencias Informáticas UCI (La Habana-Cuba)</p>
        <div className="flex justify-center">
        <Button text={"Perfíl Github "}/>
        </div>
        </div>
        
        <div className="flex justify-center w-1/2 pt-8">
          <img className="w-1/3 rounded-full scale-100 skew-y-2 mr-20 " src={image} />
        
        </div>
        </div>
      <section>
      <h1 className=" text-4xl font-bold text-center mt-6">Tecnologías</h1>
      <h2 className=" text-center mt-2">Con las que actualmente trabajo, <strong>seleccione</strong> una para ver las librerías </h2>
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