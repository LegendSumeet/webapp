import React from 'react'
import "./skills.scss"

const backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title"> Backend Development</h3>
        
        <div className="skills__box">
            <div className="apna">
        
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">MYSQL</h3>
                <span className="skills__level">Basics</span>
            </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">MONGODB</h3>
                <span className="skills__level">Advance</span>
            </div>
            </div>
            
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">NODEJS</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>
            </div>

            <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">FIREBASE</h3>
                <span className="skills__level">intermediate</span>
            </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">STRIPI</h3>
                <span className="skills__level">intermediate</span>
            </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                <h3 className="skills__name">GIT</h3>
                <span className="skills__level">Basics</span>
            </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default backend
