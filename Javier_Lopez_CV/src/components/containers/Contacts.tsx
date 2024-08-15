import email from "/src/assets/images/email.png"
import phone from "/src/assets/images/whatsapp.png"
import linkedin from "/src/assets/images/linkedin.png"

function Contacts() {
  return (
    <>
    <div className="bg-white pt-5 pb-10 dark:text-slate-100 dark:bg-slate-800">
    <h1 id= "contact"className="text-4xl font-bold text-center mb-14 text-slate-950 dark:text-slate-200">Contacto</h1>
    
    <div className="flex items-center justify-center ">
    <div className="p-10 border-dashed border-2 border-slate-300">
    <p className="p-2 mb-5 text-center">If you have any questions or specific issues, please leave <br/>a message and we will respond as soon as possible.</p>
       <ul className="ml-20">   
            <li className="mt-2 mb-2 flex"><img className=" h-7" src={linkedin}/>&nbsp;:&nbsp; <a className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500" target="_blank" href="https://linkedin.com/in/javier-lopéz-hernández-831a01192"> Linkedin</a></li>
            <li className="mt-2 mb-2 flex"><img className=" h-7" src={phone}/>&nbsp;: +(1) 786 200 9016</li>
            <li className="mt-2 mb-2 flex"><img className=" h-7" src={email}/>&nbsp;: jlopezhdez94@gmail.com</li>
       </ul>
    </div>
    </div>
    </div>
    
    <div className="shadow-xl w-full mb-8 dark:shadow-slate-600 pt-6 dark:mb-0 dark:pt-0"></div>
    </>
  )
}

export default Contacts