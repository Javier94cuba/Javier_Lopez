import email from "/src/assets/images/email.png"
import phone from "/src/assets/images/whatsapp.png"
import github from "/src/assets/images/linkedin.png"

function Footer() {
  return (
    <>
    <section className="bg-white text-center dark:bg-slate-900 pt-10 dark:text-slate-100 w-full md:flex md:justify-center md:space-x-20">
    <div className="mb-4">
       <h3 className="font-semibold text-lg mb-1">Disponibilidad</h3> 
        <ul className="font-sans">
            <li className="mt-2 mb-2">
                 Remoto
            </li>
            <li className="mt-2 mb-2">
                 Parcial
            </li>
            <li className="mt-2 mb-2">
                 Híbrido
            </li>
            <li className="mt-2 mb-2">
                 Tiempo completo
            </li>
        </ul>
    </div>
    <div>
       <h3 className="font-semibold text-lg mb-1">Necesitas</h3>
        <ul className="mb-4">
            <li className="mt-2 mb-2">Sitio con wordpres</li>
            <li className="mt-2 mb-2">Landing Pages a partir de diseños</li>
            <li className="mt-2 mb-2">Features en tu proyecto</li>
            <li className="mt-2 mb-2">App movíl</li>

        </ul>
    </div>
    <div>
    <h3 className="font-semibold text-lg mb-1">Menú</h3>
        <ul className="mb-4">
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500">Inicio</li>
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500"><a href="#about_me">Sobre mí</a></li>
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500"><a href="#proyects">Proyectos</a></li>
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500"><a href="#contact">Contacto</a></li>
        </ul>
    </div>
    <div>
    <h3 className="font-semibold text-lg mb-1">Contáctame</h3>
       <ul className="ml-52">
       <li className="mt-2 mb-2 flex "><img className="h-7" src={github}/>&nbsp;:&nbsp; <a className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500" target="_blank" href="https://linkedin.com/in/javier-lopéz-hernández-831a01192 "> linkedin</a></li>
       <li className="mt-2 mb-2 flex"><img className=" h-7" src={phone}/>&nbsp;: +(53) 58386901</li>
       <li className="mt-2 mb-2 flex"><img className=" h-7" src={email}/>&nbsp;: jlopezhdez94@gmail.com</li>
            
            
        </ul>
    </div>
    </section>
     <p className="text-center pt-5 pb-5 dark:bg-slate-900 dark:text-slate-100">Copyright © 2023. <a target="_blank" href="https://github.com/Javier94cuba"><strong className="hover:text-blue-600">JavierLopéz.dev</strong></a> </p>
     </>
  )
}

export default Footer