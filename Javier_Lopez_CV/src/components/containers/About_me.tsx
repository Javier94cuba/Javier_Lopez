 
import react_js from "/src/assets/images/react.png";

function About_me() {
  return (
    <>
    {/* dark:text-slate-100 dark:bg-slate-900 */}
    <div className="bg-white p-10 dark:text-slate-100 dark:bg-slate-900">
    <h1 id="about_me" className=" text-4xl font-bold mt- text-center text-slate-950 dark:text-slate-200">Sobre mí</h1>
       <div className="text-center pt-8">
       <p className="pt-2 pb-2">Ruta de estudio que definí para ser desarrollador Frontend</p>
       </div>
       <div>
       </div>
       <div className="flex justify-center mt-6 mb-6">
        <img className="animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] w/3 mb-2" src={react_js} />
        
       </div>
       <div>

       </div>
       </div>
       

    </>
  )
}

export default About_me