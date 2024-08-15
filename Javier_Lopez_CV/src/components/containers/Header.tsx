


const mostrar = () => {
    return(
        <div>
         <ul className=" md:flex md:space-x-10 md:p-8 md:place-content-center md:text-lg md:ml-20">
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
                Inicio
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
            <a href="#about_me">Sobre mí</a> 
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
                <a href="#proyects">Proyectos</a>
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
            <a href="#contact">Contacto</a>
            </li>
        </ul>
        </div>
        
    )
}
function Header() {

  return (
    <>
    <header className="flex w-full shadow-xl dark:shadow-slate-950 dark:shadow-2 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-200 ">
    <div className="w-1/2 font-bold text-center p-8 text-2xl cursor-pointer">JavierLopéz.dev</div>
    <div className="md:w-full md:text-center">
        <ul className="hidden md:flex md:space-x-10 md:p-8 md:place-content-center md:text-lg md:ml-20">
            {/* <li>
                <img className="w-8 hover:animate-bounce animate-once dark:bg-white dark:rounded-full" onClick={changeColor} src={darkMode}/>
            </li> */}
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
               Home
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
            <a href="#about_me">About me</a> 
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
                <a href="#proyects">Projects</a>
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
            <a href="#contact">Contact</a>
            </li>
        </ul>
        <div className="md:hidden">
            <button onClick={mostrar}  type="button" className=" items-center justify-center rounded-md text-black hover:text-blue-500">
            <svg className="w-10 ml-36" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
           <linearGradient id="9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1" x1="12.066" x2="34.891" y1=".066" y2="22.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stop-color="#3bc9f3"></stop><stop offset=".85" stop-color="#1591d8"></stop></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1)" d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"></path><linearGradient id="9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2" x1="12.066" x2="34.891" y1="12.066" y2="34.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stop-color="#3bc9f3"></stop><stop offset=".85" stop-color="#1591d8"></stop></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2)" d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"></path><linearGradient id="9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3" x1="12.066" x2="34.891" y1="24.066" y2="46.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stop-color="#3bc9f3"></stop><stop offset=".85" stop-color="#1591d8"></stop></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3)" d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"></path>
            </svg>
            </button>
        
        </div>
    </div>
    <div className=" shadow-slate-500/50">
    </div>
    </header>
  </>
   )
}

export default Header