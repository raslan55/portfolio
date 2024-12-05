import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
function App() {
  return (
    <>
   <div className='lg:container lg:mx-auto  px-5'>
   <Header/>
   <Hero/>
   <hr className='h-px my-8 bg-gray-700 border-0 dark:bg-gray-700'/>
   <Projects/>
    </div>
    </>
  )
}

export default App
