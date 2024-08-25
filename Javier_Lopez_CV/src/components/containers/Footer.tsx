import email from "/src/assets/images/email.png"
import phone from "/src/assets/images/whatsapp.png"
import github from "/src/assets/images/linkedin.png"

function Footer() {
  return (
    <>
    <section className="bg-white text-center dark:bg-slate-900 pt-10 dark:text-slate-100 w-full md:flex md:justify-center md:space-x-20">
    <div className="mb-4">
       <h3 className="font-semibold text-lg mb-1">Availability</h3> 
        <ul className="font-sans">
            <li className="mt-2 mb-2">
            Remote
            </li>
            <li className="mt-2 mb-2">
            Hybrid
            </li>
            <li className="mt-2 mb-2">
            Full time
            </li>
        </ul>
    </div>
    <div>
       <h3 className="font-semibold text-lg mb-1">Need?</h3>
        <ul className="mb-4">
            <li className="mt-2 mb-2">You want a site with Wordpress</li>
        </ul>
        <ul className="mb-4">
            <li className="mt-2 mb-2">Interview</li>
        </ul>
    </div>
    <div>
    <h3 className="font-semibold text-lg mb-1">Menu</h3>
        <ul className="mb-4">
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500">Home</li>
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500"><a href="#about_me">About me</a></li>
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500"><a href="#proyects">Projects</a></li>
            <li className="mt-2 mb-2 cursor-pointer hover:animate-jump animate-once hover:text-blue-500"><a href="#contact">Contact</a></li>
        </ul>
    </div>
    <div>
    <h3 className="font-semibold text-lg mb-1">Contáctame</h3>
       <ul className="mb-4 ml-36 sm:ml-20">
       <li className="mt-2 mb-2 flex"><img className="h-7" src={github}/>&nbsp;:&nbsp; <a className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500" target="_blank" href="https://www.linkedin.com/in/javier-l%C3%B3pez-hern%C3%A1ndez-831a01192/ "> Linkedin</a></li>
       <li className="mt-2 mb-2 flex"><img className=" h-7" src={phone}/>&nbsp;:<a href="https://api.whatsapp.com/send?phone=17862009016&text=Hola%2C%20Javier">+(1) 786 200 9016</a> </li>
       <li className="mt-2 mb-2 flex"><img className=" h-7" src={email}/>&nbsp;: jlopezhdez94@gmail</li>
        </ul>
    </div>
    </section>
     <p className="text-center pt-5 pb-5 dark:bg-slate-900 dark:text-slate-100">Copyright © 2023. <a target="_blank" href="https://github.com/Javier94cuba"><strong className="hover:text-blue-600">JavierLopéz.dev</strong></a> </p>
     </>
  )
}

export default Footer