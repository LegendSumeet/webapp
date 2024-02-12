import React from 'react';
import "./footer.scss";

const footer = () => {
    return (
    <div>
    <footer className='footer'>
        <div className='footer__container container'>
            <hi className="footer__title">Arkit.</hi>
            
            <ul className="footer__list">
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='' className='footer__link'>Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                
        <a href="mailto:arkitkarmokar007@gmail.com" className="home__social-icon" target="blank">
        <i class="bx bxl-dribbble"></i>
        </a>

        <a href="https://github.com/Arkit-karmokar" className="home__social-icon" target="blank">
        <i class="bx bxl-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/arkit-karmokar-907493246/" className="home__social-icon" target="blank">
        <i class="bx bxl-linkedin"></i>
        </a>

            </div>
            <span className="footer__copy">All right reserved</span>
            </div></footer>    
    </div>
    )
}

export default footer
