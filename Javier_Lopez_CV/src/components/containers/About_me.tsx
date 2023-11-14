 
// import react_js from "/src/assets/images/react.png";

function About_me() {
  return (
    <>
    {/* dark:text-slate-100 dark:bg-slate-900 */}
    <div className="bg-white p-10 dark:text-slate-100 dark:bg-slate-900">
    <h1 id="about_me" className=" text-4xl font-bold mt- text-center text-slate-950 dark:text-slate-200">Sobre mí</h1>
       <div className="text-center pt-8">
       <p className="pt-2 pb-2">Librerias y dependencias que utilizo en mis proyectos</p>
       </div>
       <div>
       </div>
       <div className=" mt-2 mb-2 text-center">
        {/* <img className="animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] w/3 mb-2" src={react_js} /> */}
        <p className=" text-lg">
        "@heroicons/react": "^2.0.18",<br/>
        "@reduxjs/toolkit": "^1.9.6",<br/>
         "react": "^18.2.0",<br/>
         "react-dom": "^18.2.0",<br/>
         "react-hook-form": "^7.46.2",<br/>
         "react-icons": "^4.11.0",<br/>
         "react-router-dom": "6"<br/>
         "react-redux": "^8.1.3",<br/>
         "redux": "^4.2.1"<br/>
        </p>
        
        
       </div>
       <div>

       </div>
       </div>
       

    </>
  )
}

export default About_me