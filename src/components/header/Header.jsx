import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import "./header.css";
const Header = () => {

    window.addEventListener("scroll" , function (){
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");
    })

    const [Toggle, showMenu] = useState(false);
    const [activeNav , setActiveNav] = useState("#home")
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          SHANTANU
        </a>

        <div className= {Toggle ? "nav__menu show-menu " : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={ ()=> setActiveNav ("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
              <i className="nav__icon"><HomeOutlinedIcon /></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={ ()=> setActiveNav ("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link" }>
              <i className="nav__icon"><PersonOutlineOutlinedIcon /></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={ ()=> setActiveNav ("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
              <i className="nav__icon"><PrecisionManufacturingOutlinedIcon /></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" onClick={ ()=> setActiveNav ("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link" }>
              <i className="nav__icon"><WorkOutlineOutlinedIcon /></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={ ()=> setActiveNav ("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link" }>
                <i className="nav__icon"><SendOutlinedIcon /></i>
                Contact
              </a>
            </li>
          </ul>
          <i className="nav__close" onClick={()=> showMenu(!Toggle)}><CloseOutlinedIcon /></i>
          
        </div>
        <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <i></i>
        <AppsIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
