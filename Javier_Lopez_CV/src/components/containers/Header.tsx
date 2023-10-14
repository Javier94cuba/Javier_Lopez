import darkMode from "/src/assets/images/darkmode.png"
function Header() {
    const changeColor = () =>{
    document.documentElement.classList.toggle("dark");
}
  return (
    <>
    <header className="flex w-full shadow-xl dark:shadow-slate-950 dark:shadow-2 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-200 ">
    <div className="w-1/2 font-bold text-center p-8 text-2xl cursor-pointer">JavierLopéz.dev</div>
    <div className="w-full text-center">
        <ul className="flex space-x-10  p-8 place-content-center text-lg ml-20">
            <li className="">
                <img className="w-8 hover:animate-bounce animate-once dark:bg-white dark:rounded-full" onClick={changeColor} src={darkMode}/>
            </li>
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
    <div className=" shadow-slate-500/50">
     
    </div>
    </header>
  </>
   )
}

export default Header