import { useForm } from "react-hook-form"
function Contacts() {

   const {register ,watch, handleSubmit}=useForm({
    // defaultValues:{
    //   nombre:'obligatorio',
    //   tipo:'obligatorio',
    //   telefono : 'obligatorio'
    // }
   });
  const Form = (data:any) => {
   console.log(data);
  }

  const moreinfoadd = watch('moreinfo');

  return (
    <>
    <div className="bg-white p-10 pb-20 dark:text-slate-100 dark:bg-slate-800">
    <h1 id= "contact"className="text-4xl font-bold text-center mb-14 text-slate-950 dark:text-slate-200">Contacto</h1>
    
    <div className="flex items-center justify-center ">
    <div className="p-10 border-solid border-4 border-slate-300">
    <form onSubmit={handleSubmit(Form)}>
      <div>
      <p className="p-2 mb-5 text-center">Alguna duda o tema en específico deje <br/> su mensaje y se le respondera lo antes posible</p>
        <label>Nombre : </label>
        <input className="border-solid border-2 border-slate-300 p-1 mb-4" type="text " {...register('nombre',{
          required:true,
        })} />
      </div>
      <div>
        <label>Email @ : </label>
        <input className="border-solid border-2 border-slate-300 p-1 mb-4" type="tel" {...register('email')} />
      </div>
      <div className="-ml-1">
        <label>Contrato : </label>
        <select className="border-solid border-2 border-slate-300 p-1 mb-4" {...register('tipodeContrato',{
          required:true,
        })}>
          <option value="r">Remoto</option>
          <option value="ft">Full time</option>
          <option value="pt">Part Time</option>
          <option value="hb">Híbrido</option>
        </select>
      </div>
      <div className="-ml-3">
        <label>Ubicación : </label>
        <select className="border-solid border-2 border-slate-300 p-1 mb-4" {...register('pais',{
          required:true,
        })}>
          <option value="es">España</option>
          <option value="es">Estados Unidos</option>
          <option value="es">Cuba</option>
          <option value="es">Otro país</option>
        </select>
      </div>
      <div className="-ml-2">
        <label >Incluir Dudas o información extra : </label>
      <input type="checkbox" {...register("moreinfo")}/>
      </div>
      <div className="flex items-center justify-center">
        {moreinfoadd && (
          <div>
          <label></label>
          <input className="border-solid border-2 border-slate-300 p-1 mb-4" type="text" {...register("info")}/>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
      <input className="bg-slate-800 shadow-lg shadow-slate-500/50 dark:bg-slate-100 dark:text-black hover:bg-slate-600 dark:hover:bg-white text-white py-2 px-4 mt-10 font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-100 animate-bounce animate-infinite" type="submit" value="Enviar" />
      </div>
    </form>
    </div>
    </div>
    </div>
    
    <div className="shadow-xl w-full mb-8 dark:shadow-slate-600 pt-6 dark:mb-0 dark:pt-0"></div>
    </>
  )
}

export default Contacts