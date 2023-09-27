import React from 'react'
import "./skills.scss"
import Frontend from "./frontend.jsx"
import Backend from './backend.jsx'

const skills = () => {
  return (
   <section className="skills__section">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">
        My technical skills
        </span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
   </section>
  )
}

export default skills
