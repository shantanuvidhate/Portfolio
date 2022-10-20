import React from 'react';
import "./scrollup.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollUp = () => {
    window.addEventListener("scroll" , function (){
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
        <a href="#home" className="scrollup">
        <i className="scrollup__icon"><ArrowUpwardIcon /></i>

        </a>
  )
}

export default ScrollUp