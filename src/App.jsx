import Navbar from "./components/Navbar"
import Particles from "./components/Particles"
import Cursor from "./components/Cursor"

import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Footer from "./sections/Footer"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"


export default function App(){
  return (
    <div className="relative gradient text-white">
      <Particles/>
      <Cursor/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}