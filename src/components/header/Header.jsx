import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import "./header.css";
const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">SHANTANU</a>
        
        <div className="nav_menu">
            <ul className="nav_list grid">
                <li className="nav_item">
                    <a href="#Home" className="nav_link">
                    <HomeOutlinedIcon />Home
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#About" className="nav_link">
                        <PersonOutlineOutlinedIcon />About
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#Skills" className="nav_link">
                        <PrecisionManufacturingOutlinedIcon />Skills
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#Projects" className="nav_link">
                        <WorkOutlineOutlinedIcon />Projects
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#Contact" className="nav_link">
                        <SendOutlinedIcon />Contact
                    </a>
                </li>
            </ul>
        </div>
        </nav>
    
    </header>
  )
}

export default Header