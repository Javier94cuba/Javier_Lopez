

function Header() {
  return (
    <>
    <header className="flex w-full shadow-xl mb-10">
    <div className="bg-white w-1/2 font-bold text-center p-8 text-2xl cursor-pointer">JavierLopéz.dev</div>
    <div className="bg-white w-full text-center">
        <ul className="flex space-x-16  p-8 place-content-center text-lg ml-20">
            <li className="cursor-pointer">
                Inicio
            </li>
            <li className="cursor-pointer">
                Sobre mí
            </li>
            <li className="cursor-pointer">
                Proyectos
            </li>
            <li className="cursor-pointer">
                Contacto
            </li>
            <li className="cursor-pointer">
                <button>Dark Mode</button>
            </li>
        </ul>
    </div>
    </header>
  </>
   )
}

export default Header