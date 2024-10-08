import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Home from "./components/Home"
import Model from "./components/model"
import MyApps from "./components/MyApps"
import Navbar from "./components/Navbar"
import ScrollButton from "./components/ScrollButton"
import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import TransitionLink from "./components/TransitionLink"


function App() {

  const location = useLocation()

  return (
    <main> 
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={
          <TransitionLink>
            <Home />
          </TransitionLink>
        } />
        <Route path="/about" element={
          <TransitionLink>
            <About />
          </TransitionLink>
        }/>
        <Route path="/contact" element={
                    <TransitionLink>
                    <Contact />
                  </TransitionLink>
        } />
      </Routes>
      </AnimatePresence>
    </main>
  )
}

export default App
