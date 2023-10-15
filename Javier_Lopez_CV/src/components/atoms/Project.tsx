import Tecnologies_apps from "./Tecnologies_apps";

function Project({name,image,img_tec,text_img}:{name:string,image:string,img_tec:string,text_img:string}) {
    return (
      <>
      <div className="text-center mt-10 border-4 p-6 inline-block ml-20">
      <h2 className="font-bold text-xl mb-5 hover:text-blue-600"> <a target="_blank" href="https://cubaphototrips.com/">{name}</a></h2>
      <img className="h-40 w-72" src={image} />
      <div className="mt-5 flex justify-center items-center">
      <Tecnologies_apps image_url={img_tec} text_image={text_img}/>
      </div>
      </div>
      </>
  
    )
  }
  
  export default Project