import { useState } from 'react'
import './App.css'
import  Header  from'./components/header/header.jsx';
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx"
import Skills from "./components/skills/skills.jsx"
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer.jsx';
import Scrollup from './components/scrollup/scrollup.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
      <Footer/>
      </main>
      <Scrollup/>
    </>
  )
}

export default App
