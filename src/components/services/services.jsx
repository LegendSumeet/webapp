import React from 'react'
import {useState} from "react";
import "./services.scss"

const services = () => {
    const[toggleState,settoggleState] = useState(0);

    const toggleTab = (index) =>{
        settoggleState(index);
    }
  return (
    <section className="service section" id="services">
        <h2 className="section__title">Services</h2>
    <span className="section__subtitle">
        What i offer
        </span>
        <div className="services_container container grid">
            <div className="services__content">
                <div className='radius'>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Product <br/>
                Designer
                </h3>
                </div>
                <span className="services__button " onClick={() => toggleTab(1)}>View more 
                <i className="uil uil-arrow-right services__button_icon"></i></span>

                <div className={toggleState === 1 ? "services__model active-model ": "services__model" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                        <h3 className="services__model-title">Product Designer</h3>
                        <p className="services__model-description">
                            Service work experience with more than 100s of project with real world client
                        </p>
                        <ul className="service__model-service grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    I develop user interface
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                Web page developement
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    UI/UX for proper user interaction
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    Take a brand to the next level
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className='radius'>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">UI/UX  <br />  Designer</h3>
                
                <span className="services__button"onClick={() => toggleTab(1)}>View more
                <i className="uil uil-arrow-right services__button_icon"></i></span>
                </div>
                <div className={toggleState === 1 ? "services__model active-model ": "services__model" }>
                    <div className="services__modal-content">
                        <i  onClick={() => toggleTab(0)}  className="uil uil-times services__model-close"></i>
                        <h3 className="services__model-title">UI/UX Designer</h3>
                        <p className="services__model-description">
                            Service work experience with more than 100s of project with real world client
                        </p>
                        <ul className="service__model-service grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    I develop user interface
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                Web page developement
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    UI/UX for proper user interaction
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    Take a brand to the next level
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div  className='radius'>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Visual <br /> Designer</h3>
                <span className="services__button"onClick={() => toggleTab(1)}>View more
                <i className="uil uil-arrow-right services__button_icon"></i></span>
                </div>
                <div  className={toggleState === 1 ? "services__model active-model ": "services__model" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                        <h3 className="services__model-title">Visual Designer</h3>
                        <p className="services__model-description">
                            Service work experience with more than 100s of project with real world client
                        </p>
                        <ul className="service__model-service grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    I develop user interface
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                Web page developement
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    UI/UX for proper user interaction
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    Take a brand to the next level
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-cricle service__model-icon"></i>
                                <p className="services__model-info">
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default services
