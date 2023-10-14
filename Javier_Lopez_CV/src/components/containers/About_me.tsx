 
import react_js from "/src/assets/images/react.png";
import Button from "../atoms/Button"
import select_icon from "/src/assets/images/select.png";
function About_me() {
  return (
    <>
    <h1 id="about_me" className="text-4xl font-bold text-center mt-4  text-slate-950 dark:text-slate-200">Sobre mí</h1>
       <div className="text-center pt-8">
       <p className="pt-2 pb-2">Graduado de la universidad de las Ciencias Informáticas <strong>UCI</strong>  (2014-2019)</p>  
       <p className="pt-2 pb-2">Me decidí ser frontend-developer despues de realizar varios sitios con wordpress, escogí react js <br/> gracias a unas amistades y 
       al verificar la documentacion y la comunidad que existe alrededor de esta tecnología.</p>
       <p className="pt-2 pb-2">Ruta de estudio que definí para ser desarrollador Frontend</p>
       </div>
       <div>
       
       </div>
       <div className="flex justify-center">
        <img className="animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] w/3 mb-2" src={react_js} />
        <div className="ml-5">
        <Button text={"Tecnología"} img_alt={select_icon} />
        </div>
       </div>
       <div className="flex justify-center space-x-10">
       <select >
  <option value="opcion1" aria-selected>Inicio</option>
  <option value="opcion1">Componentes</option>
  <option value="opcion2">Estado</option>
  <option value="opcion3">Prop Drilling</option>
      </select>
      <select >
  <option value="opcion1" selected>Inicios</option>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
      </select>
      <select >
  <option value="opcion1" selected>Inicios</option>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
      </select>
      <select >
  <option value="opcion1" selected>Inicios</option>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
      </select>
      <select >
  <option value="opcion1" selected>Inicios</option>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
      </select>
      <select >
  <option value="opcion1" selected>Inicios</option>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
      </select>
      </div>
       <div>

       </div>
       

    </>
  )
}

export default About_me