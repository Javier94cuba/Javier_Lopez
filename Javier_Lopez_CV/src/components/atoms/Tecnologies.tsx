

function Tecnologies({image_url,text_image} : {image_url : string, text_image : string}) {
  return (
  <>
  <div className="w-14 hover:animate-jump animate-once">
  <img className="w-14 " src={image_url}/>
  <p className="text-center font-serif pt-2  text-slate-950 dark:text-slate-200 ">{text_image}</p>
  </div>
  </>
  )
}

export default Tecnologies