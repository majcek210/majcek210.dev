import Navbar from "./components/Navbar"

import Home from "./sections/Home"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"


export default function App(){
  return (
    <div className="relative bg-zinc-950 text-white">
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
