import { CheckIcon } from '@heroicons/react/20/solid'
import {useState} from "react"
const includedFeatures = [
  'País del empleador',
  'Tecnologías',
  'Tipo de contrato',
  'Duración del contrato',
]

export default function Salary() {

  let [salary_value, setSalary_value] = useState(0);
  let [country, setCountry] = useState("");
  let [tec, setTec] = useState("");
  let [valuetec,setValueTec]=useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handlevent = () =>{
    setCountry(country="cuba")
    if (country === "cuba"){
      setSalary_value(salary_value=300)   
    } else 
    country = ""
  }
  
  const handlevent_es = () => {
    setCountry(country="espana")
    if (country === "espana"){
      setSalary_value(salary_value=400)   
    } else 
    country = ""
  }

  const handlevent_us = () => {
    setCountry(country="usa")
    if (country === "usa"){
      setSalary_value(salary_value=500)   
    } else 
    country = ""
  }

  const handlevent_otro = () => {
    setCountry(country="otro")
    if (country === "otro"){
      setSalary_value(salary_value=450)   
    } else 
    country = ""
  }

  const handlevent_wordpress = () =>{
    setTec(tec="wordpress")
    if(tec==="wordpress"){
    setValueTec(valuetec=50)
    } 
    else
    tec=""
  }


  const handleSalary = () => {
  if ((isChecked == false) && (country == ""))
  country === "" ?
  setSalary_value(
  salary_value = 0
  ) :
  country === "cuba" ?
  setSalary_value(
  salary_value = 300
  ) :
  country === "usa" ?
  setSalary_value(
  salary_value = 500
  ) :
  country === "espana" ?
  setSalary_value(
  salary_value = 400
  ) :
 setCountry("") 
  }

  
 
  return (
    <div className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Salario estimado</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              A partir de los checkbocks que le doy prioridad estimo un rango salarial que aceptaría con gusto, es solo un estimado tendría mas factores 
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Especificaciones</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-2">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

<div className='flex space-x-20 pt-4 items-start justify-start mt-6 text-base leading-7 text-gray-600'>
<fieldset>
  <div className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
  <legend className=' pb-1 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>País</legend>
    <input type="checkbox" id="cu" name={country} onClick={handlevent}
          onChange={handleOnChange} />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Cuba</label>
  </div>
  <div>
    <input type="checkbox" id="Es" name="espana" onClick={handlevent_es}  
          onChange={handleOnChange}/>
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> España</label>
  </div>
  <div>
    <input type="checkbox" id="Us" name="usa" onClick={handlevent_us}  
          onChange={handleOnChange}/>
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Usa</label>
  </div>
  <div>
    <input type="checkbox" id="other" name="otro" onClick={handlevent_otro} 
          onChange={handleOnChange}/>
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Otro</label>
  </div>
</fieldset>
<fieldset>
  <legend className=' pb-1 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>Tecnologías</legend>
  <div>
    <input type="checkbox" id="scales" name="scales" onClick={handlevent_wordpress} />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Wordpress</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> React JS</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> React Native</label>
  </div>
</fieldset>
<fieldset>
  <legend className=' pb-1 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>Contrato</legend>
  <div>
    <input type="checkbox" id="scales" name="scales"/>
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Remoto</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Presencial</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Híbrido</label>
  </div>
</fieldset>
 <fieldset>
  <legend className=' pb-1 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>Duración del proyecto</legend>
  <div>
    <input type="checkbox" id="scales" name="scales"/>
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> 3 meses</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> 6 meses</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> 1 año o más</label>
  </div>
</fieldset>
</div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="flex rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8 mt-5 mb-12 pt-20">
                <p className="text-base font-semibold text-gray-600">“El que está satisfecho con su parte es rico”. (Lao Tsé)</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <div className="text-5xl font-bold tracking-tight text-gray-900">
                    <p>{isChecked == false ?  "$ ???" : `${salary_value}$`} </p>
                    <p className='text-green-400 text-2xl'>{isChecked == false ? "0" : `+ ${valuetec} tec `}{}</p> 
                     </div>
                  <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">(USD,EUR)</span>
                </p>
                <button
                  onClick={handleSalary}
                  className="bg-slate-800 shadow-lg shadow-slate-500/50 dark:bg-slate-100 dark:text-black hover:bg-slate-600 dark:hover:bg-white text-white py-2 px-4 mt-10 font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-100 animate-bounce animate-infinite items-center justify-center"
                >
                  Calcular salario
                </button>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  En base a los requisitos estimo un rango de salario deseado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
