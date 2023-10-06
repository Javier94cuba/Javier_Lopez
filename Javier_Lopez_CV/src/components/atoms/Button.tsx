function Button({text,img_alt} : {text:string,img_alt?:string}) {
  return (
    <div className="flex">
    <button className=" bg-slate-800 shadow-lg shadow-slate-500/50 dark:bg-slate-100 dark:text-black hover:bg-slate-600 dark:hover:bg-white text-white py-2 px-4 mt-10 font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-100 animate-bounce animate-infinite flex">{text}<img className="w-6 ml-2 bg-white rounded-full"  src={img_alt}/> </button>
    
    </div>
  )
}

export default Button