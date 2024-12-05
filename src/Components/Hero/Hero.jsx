import Icons from "../Icons/icons";
import myImage from '../../assets/image.png';
export default function Hero() {
  return (
    <div>
    <section className="px-4 py-8">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-relaxed md:text-5xl xl:text-6xl dark:text-white">hi, i am 
            robert garcia.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
           <Icons/>

        </div>
        <div className="mt-6 lg:mt-0  lg:col-span-5 lg:flex  ">
            <img src={myImage} alt="myImage"/>
        </div>                
    </div>
</section>
    </div>
  )
}
