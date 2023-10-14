import Tecnologies_apps from "./Tecnologies_apps";
import cubaphotos from "/src/assets/images/cubanphotos.png";
import wordpress from "/src/assets/images/wordpress.png"

function Project({name}:{name:string}) {
    return (
      <>
      <div className="text-center mt-10 border-4 p-2 inline-block ml-20">
      <h2 className="font-bold text-xl mb-5 hover:text-blue-600"> <a target="_blank" href="https://cubaphototrips.com/">{name}</a></h2>
      <img className="h-40 w-72" src={cubaphotos} />
      <div className="mt-5 flex justify-center items-center">
      <Tecnologies_apps image_url={wordpress} text_image={"Wordpress"}/>
      </div>
      </div>
      </>
  
    )
  }
  
  export default Project