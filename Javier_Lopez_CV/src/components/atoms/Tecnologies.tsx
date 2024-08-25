

function Tecnologies({image_url,text_image} : {image_url : string, text_image : string}) {
  return (
  <>
  <div className="pt-4 w-10 hover:animate-jump animate-once ml-12">
  <img className="w-12 items-center justify-center ml-2" src={image_url}/>
  <p className="font-serif pt-2  text-slate-950 dark:text-slate-200">{text_image}</p>
  </div>
  </>
  )
}

export default Tecnologies