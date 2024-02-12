import React from 'react'
import './scroll.scss'

const scrollup = () => {
  window.addEventListener('scroll', function() {
    const scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  })
  return (
    <div>
        <a href="#" className="scrollup">
            <i className='uil uil-arrow-up scrollup__icon'></i>
        </a>
      
    </div>
  )
}

export default scrollup
