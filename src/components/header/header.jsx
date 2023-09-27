import React from 'react';
import './header.scss';
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineFileAdd} from "react-icons/ai"
import {ImProfile}  from "react-icons/im"
import {BiSolidBriefcase}  from "react-icons/bi"
import {GrContact} from "react-icons/gr"

const header = () => {
    return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Arkit.</a>
            <div className='nav__menu'>
                <ul className="nav__list grid">


                    <li className="nav__item">
                        <a href="Home" className="nav_link">
                        <AiOutlineHome className="nav__icon uil-estate"/><span className='icon-value'>Home</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="About" className="nav_link">
                        <AiOutlineUser className="nav__icon"/><span className='icon-value'>About</span>
                        </a>
                    </li>


                    <li className="nav__item">
                        <a href="Skills" className="nav_link">
                        <AiOutlineFileAdd className=" nav__icon"/><span className="icon-value">Skills</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="Portfolio" className="nav_link">
                        <ImProfile className=" uil-port nav__icon"/> <span className="icon-value"> Portfolio</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="Services" className="nav_link">
                        <BiSolidBriefcase className="nav__icon"/> <span className="icon-value"> Services</span>
                        </a>
                    </li>

                
                    <li className="nav__item">
                        <a href="contact" className="nav_link">
                        <GrContact className="nav__icon" /> <span className="icon-value">Contact</span>
                        </a>
                    </li>

                </ul>
            </div>
            </nav>
        </header>
  )
}

export default header
