function Button({text} : {text:string}) {
  return (
    <button className=" bg-slate-800 hover:bg-slate-600 text-white py-2 px-4  font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-100 ">{text}</button>
  )
}

export default Button