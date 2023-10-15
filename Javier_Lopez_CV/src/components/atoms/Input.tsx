import { useForm } from "react-hook-form"

function Input() {

    const {register , handleSubmit}=useForm({
        // defaultValues:{
        //   nombre:'obligatorio',
        //   tipo:'obligatorio',
        //   telefono : 'obligatorio'
        // }
       });
      const Form = (data:any) => {
       console.log(data);
      }

  return (
    <div className="text-justify">
        <form onSubmit={handleSubmit(Form)}>
        <div className="mr-4">
        <label className="ml-4">Tecnologia : </label>
        <select className="border-solid border-2 border-slate-300 p-1 mb-4" {...register('tipodeContrato',{
          required:true,
        })}>
          <option value="r">React Js</option>
          <option value="rn">React Native</option>
          <option value="ft">Wordpress</option>
        </select>
      </div>
      <div>
        <label className="-ml-7">Horas semanales : </label>
        <input className="border-solid border-2 border-slate-300 p-1 mb-4" type="tel" {...register('email')} />
      </div>
      <div className="mr-4">
        <label className="ml-7">Contrato : </label>
        <select className="border-solid border-2 border-slate-300 p-1 mb-4" {...register('tipodeContrato',{
          required:true,
        })}>
          <option value="r">Remoto</option>
          <option value="ft">Full time</option>
          <option value="pt">Part Time</option>
          <option value="hb">Híbrido</option>
        </select>
      </div>
      <div>
        <label className="ml-5">Ubicación : </label>
        <select className="border-solid border-2 border-slate-300 p-1 mb-4" {...register('pais',{
          required:true,
        })}>
          <option value="es">España</option>
          <option value="es">Estados Unidos</option>
          <option value="es">Cuba</option>
          <option value="es">Otro país</option>
        </select>
      </div>
    </form>
    </div>
  )
}

export default Input