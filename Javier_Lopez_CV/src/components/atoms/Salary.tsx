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
  let [valuetec,setValueTec]=useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [iswordpressChecked, setIsWordpressChecked] = useState(false);
  const [isreactChecked, setIsReactChecked] = useState(false);
  const [isreactNChecked, setIsReactNChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnNewChange = () => {
    setIsWordpressChecked(!iswordpressChecked);
  };

  const handleOnReactChange = () => {
    setIsReactChecked(!isreactChecked);
  };

  const handleReactNChange = () => {
    setIsReactNChecked(!isreactNChecked);
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
    if(iswordpressChecked==false){
      setValueTec(valuetec+=50)
    }
      else
      setValueTec(valuetec-=50)
  }

  const handlevent_reactjs = () =>{
    if(isreactChecked==false){
      setValueTec(valuetec+=100)
    }
      else
      setValueTec(valuetec-=100)
  }

  const handlevent_reactN = () =>{
    if(isreactNChecked==false){
      setValueTec(valuetec+=50)
    }
      else
      setValueTec(valuetec-=50)
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

<div className='grid grid-cols-2 md:flex md:space-x-20 pt-4 md:items-start md:justify-start md:mt-6 md:text-base leading-7 text-gray-600'>
<fieldset>
  <div className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
  <legend className=' pb-1 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>País</legend>
    <input type="checkbox" id="cu" name={country} onClick={handlevent} onChange={handleOnChange} />
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
    <input type="checkbox" id="wordpress" checked={iswordpressChecked} onClick={handlevent_wordpress} onChange={handleOnNewChange} />
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> Wordpress</label>
  </div>
  <div>
    <input type="checkbox" id="reactjs" checked={isreactChecked}  onClick={handlevent_reactjs} onChange={handleOnReactChange}/>
    <label className='text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'> React JS</label>
  </div>
  <div>
    <input type="checkbox" id="reactnative" checked={isreactNChecked} onClick={handlevent_reactN} onChange={handleReactNChange} />
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
              <div className="mx-auto md:max-w-xs md:px-8 md:mt-5 md:mb-12 md:pt-20">
                <p className="text-base font-semibold text-gray-600">“En base a los requisitos estimo un rango de salario deseado“</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <div className="text-5xl font-bold tracking-tight text-gray-900">
                    <p>{isChecked == false ?  "$ ???" : `${salary_value}$`} </p>
                    <p className='text-green-400 text-2xl mb-1 mt-1 ml-7'>{(iswordpressChecked || isreactChecked || isreactNChecked) == false ? "" : `+ ${valuetec} $`}</p>  
                  </div>
                  <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">(USD,EUR)</span>
                </p>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Tipo de contrato y duración no es influyente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
