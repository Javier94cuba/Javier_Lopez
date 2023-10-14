function Tecnologies_apps({image_url,text_image} : {image_url : string, text_image : string}) {
    return (
    <>
    <div className="flex-col items-center justify-center flex w-auto hover:animate-jump animate-once text-center">
    <img className="w-8" src={image_url}/>
    <p className="font-serif  text-slate-950 dark:text-slate-200">{text_image}</p>
    </div>
    </>
    )
  }
  
  export default Tecnologies_apps