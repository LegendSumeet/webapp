import React from 'react'
import "./skills.scss";

const frontend = () => {
   return (
    <div className="skills__content">
        <h3 className="skills__title"> Frontend Development</h3>
        
        <div className="skills__box">
            <div className="apna">
        
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">BASICS</span>
            </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advanced</span>
            </div>
            </div>
            
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">JAVASCRIPT</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>
            </div>

            <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">TAILWIND</h3>
                <span className="skills__level">intermediate</span>
            </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">GITHUB</h3>
                <span className="skills__level">intermediate</span>
            </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">REACT</h3>
                <span className="skills__level">intermediate</span>
            </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default frontend
