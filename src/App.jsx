import { useState } from 'react'
import './App.css'
import  Header  from'./components/header/header.jsx';
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx"
import Skills from "./components/skills/skills.jsx"
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
import Testomonial from './components/testomonial/testomonial.jsx';
import Contact from './components/contact/contact';

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
      <Testomonial />
      <Contact />
      </main>
    </>
  )
}

export default App
