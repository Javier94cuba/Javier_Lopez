import email from "/src/assets/images/email.png"
import phone from "/src/assets/images/phone.png"
import github from "/src/assets/images/github_footer.png"

function Footer() {
  return (
    <>
    <section className="bg-white dark:bg-slate-900 pt-4 dark:text-slate-100 w-full flex justify-center space-x-20">
   
    <div >
       <h3 className="font-semibold text-lg mb-1">Disponibilidad</h3> 
        <ul className="font-sans text-center">
            <li className="mt-2 mb-2">
                 Remoto
            </li>
            <li className="mt-2 mb-2">
                 Parcial
            </li>
            <li className="mt-2 mb-2">
                 Tiempo completo
            </li>
        </ul>
    </div>
    <div>
       <h3 className="font-semibold text-lg mb-1">Necesitas</h3>
        <ul>
            <li className="mt-2 mb-2">Sitio con wordpress</li>
            <li className="mt-2 mb-2">Landing Pages a partir de diseños</li>
            <li className="mt-2 mb-2">Features en tu proyecto</li>
            <li className="mt-2 mb-2">App movíl</li>

        </ul>
    </div>
    <div>
    <h3 className="font-semibold text-lg mb-1">Menú</h3>
        <ul>
            <li className="mt-2 mb-2">Inicio</li>
            <li className="mt-2 mb-2">Sobre mí</li>
            <li className="mt-2 mb-2">Proyectos</li>
            <li className="mt-2 mb-2"> Contácto</li>
        </ul>
    </div>
    <div>
    <h3 className="font-semibold text-lg mb-1">Contáctame</h3>
       <ul>   
            <li className="mt-2 mb-2 flex"><img className=" h-7" src={phone}/>&nbsp;: +(53) 58386901</li>
            <li className="mt-2 mb-2 flex"><img className=" h-7" src={email}/>&nbsp;: jlopezhdez94@gmail.com</li>
            <li className="mt-2 mb-2 flex"><img className="h-7" src={github}/>&nbsp;:&nbsp; <a href="google.com"> Github</a></li>
            
        </ul>
    </div>
    </section>
     <p className="text-center pt-5 pb-5 dark:bg-slate-900 dark:text-slate-100">Copyright © 2023.  <strong>JavierLopéz.dev</strong></p>
     </>
  )
}

export default Footer