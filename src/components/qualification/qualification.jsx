import {useState} from "react";
import "./qualification.scss"

const qualification = () => {
  const[toggleState,settoggleState] = useState(1);

    const toggleTab = (index) =>{
        settoggleState(index);
    }
  return (
    
    <section className="qualification_section">
      <h2 className="section__title">QUALIFICATION</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button  qualification__active   button--flex" : "qualification__button  button--flex"}
          onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon">Education</i>
          </div>

          <div className={toggleState === 2 ? "qualification__button  qualification__active   button--flex" : "qualification__button  button--flex"
        }
        onClick={() => toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt qualification_icon">Experience</i>
          </div>
        </div>
        <div className="qualification__section">
          <div className={toggleState === 1 
           ? "qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">

              <div>

              <h3 className="qualification__titile">Advance Web Technologies</h3>
                <span className="qualification__subtitile">Sahyog College Of Information Technology</span>
                  <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                    2023 - Present
                  </div>
            </div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualifiaction__line"></span>
          </div>
          </div>
            <div className="qualification__data">
              <div></div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualifiaction__line"></span>
          </div>

              <div>
              <h3 className="qualification__titile">Basics of Backend Developent/ Basics of Data Structure & Algorithm</h3>
                <span className="qualification__subtitile">Sahyog College Of Information Technology</span>
                  <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                    2023 - 2022
                    </div>
                  </div>
                  
            </div>
            <div className="qualification__data">

              <div>

              <h3 className="qualification__titile">Basics of Frontend / C++ Programing language</h3>
                <span className="qualification__subtitile">Sahyog College Of Information Technology</span>
                  <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                    2022 - 2021
                  </div>
            </div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualifiaction__line"></span>
          </div>
          </div>
          </div>
          <div className={toggleState === 2
           ? "qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div></div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualifiaction__line"></span>
          </div>

              <div>
              <h3 className="qualification__titile">Basics of Web-App Technologies</h3>
                <span className="qualification__subtitile">Sahyog College Of Information Technology</span>
                  <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                    2021-2020
                    </div>
                  </div>
            </div>
            <div className="qualification__data">

              <div>

              <h3 className="qualification__titile">Basics of Funtamental of Technologies  / C Programing language</h3>
                <span className="qualification__subtitile">Sahyog College Of Information Technology</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender-alt"></i>
                    2021 - 2020
                  </div>
            </div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualifiaction__line"></span>
          </div>
          </div>
            <div className="qualification__data">
              <div></div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualifiaction__line"></span>
          </div>
          
              <div>
              <h3 className="qualification__titile">Get into Technical world</h3>
                <span className="qualification__subtitile">Sahyog College Of Information Technology</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender-alt"></i>
                    2020-2019
                  </div>
                  </div>
                  </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default qualification
