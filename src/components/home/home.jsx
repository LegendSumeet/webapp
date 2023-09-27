import React from 'react'
import Social from "./social.jsx"
import Data from "./data.jsx"
import "./home.scss"
import Scroll from  "./scroll.jsx"

const home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
            </div>
            <Scroll />
        </div>
    </section>
  )
}

export default home
