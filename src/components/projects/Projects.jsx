import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import "./projects.css"
const Projects = () => {
    const [toggleState , setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="project section" id="project">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Some of my interesting projects</span>
        <div className="project__container container grid">
            <div className="project__content">
                <div>
                    <i className="project__icon"><MedicalInformationIcon fontSize='large' /></i>
                    <h3 className="project__title">Healthcare <br /> E-Platform</h3>
                </div>
                <span className="project__button" onClick={() => toggleTab (1)}>Description
                    <i className="project__button-icon"><EastIcon /></i>
                </span>
                <div className={toggleState === 1 ? "project__modal active-modal"  : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="project__modal-close"><CloseIcon /></i>
                        <h3 className="project__modal-title">Healthcare E-Platform</h3>
                        <p className="project__modal-description">A web application used to book the appointments, emergency booking, bed status availability checking and payment transactions.</p>

                        <ul className="project__modal-project grid">
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    HTML, CSS, JavaScript and Bootstrap is used for frontend.
                                </p>
                            </li>
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    Node JS and Exprss JS is used for Backend.
                                </p>
                            </li>
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    MongoDB is used for storing the patients record.
                                </p>
                            </li>
                            <li className="project__modal-descp ">
                                <div className="link__title">
                                    view the source code
                                </div>
                            </li>
                            <li className="project__modal-descp">
                              
                                <a href="https://github.com/shantanuvidhate/Healthcare-E-Platform" 
                                target="_blank" rel="noreferrer"
                                className="source__codelink-button">Visit </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="project__content">
                <div>
                    <i className="project__icon"><BackupTableIcon fontSize='large' /></i>
                    <h3 className="project__title">Personal <br /> Portfolio</h3>
                </div>
                <span onClick={() => toggleTab (2)} className="project__button">Description
                    <i className="project__button-icon"><EastIcon /></i>
                </span>
                <div className={toggleState === 2 ? "project__modal active-modal"  : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="project__modal-close"><CloseIcon /></i>
                        <h3 className="project__modal-title">Personal portfolio</h3>
                        <p className="project__modal-description">An animated and fully responsive personal portfolio web application built using React for visualizing featured works and skills.</p>

                        <ul className="project__modal-project grid">
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    The Portfolio design and developed using React.
                                </p>
                            </li>
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    Fully responsive using media queries for diffrent viewing devices.
                                </p>
                            </li>
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    Stunning animation using CSS.
                                </p>
                            </li>
                            <li className="project__modal-descp ">
                                <div className="link__title">
                                    view the source code
                                </div>
                            </li>
                            <li className="project__modal-descp">
                              
                                <a href="https://github.com/shantanuvidhate/Portfolio" 
                                target="_blank" rel="noreferrer"
                                className="source__codelink-button">Visit </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="project__content">
                <div>
                    <i className="project__icon"><ShoppingBagIcon fontSize='large' /></i>
                    <h3 className="project__title">Ecommerce<br /> Website</h3>
                </div>
                <span onClick={() => toggleTab (3)} className="project__button">Description
                    <i className="project__button-icon"><EastIcon /></i>
                </span>
                <div className={toggleState === 3 ? "project__modal active-modal"  : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="project__modal-close"><CloseIcon /></i>
                        <h3 className="project__modal-title">Ecommerce Website</h3>
                        <p className="project__modal-description">React Ecommerce website from where the users can buy the groceries, electronics items and daily essentials. </p>

                        <ul className="project__modal-project grid">
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    Attractive User Interface.
                                </p>
                            </li>
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    Functionality of sorting on price, reviews and arrivals.
                                </p>
                            </li>
                            <li className="project__modal-descp">
                                <i className="project__modal-icon"><CheckCircleOutlineIcon fontSize='small' /></i>
                                <p className="project__modal-info">
                                    Administrator console for admin.
                                </p>
                            </li>
                            <li className="project__modal-descp ">
                                <div className="link__title">
                                    view the source code
                                </div>
                            </li>
                            <li className="project__modal-descp">
                              
                                <a href="https://github.com/shantanuvidhate/Healthcare-E-Platform" 
                                target="_blank" rel="noreferrer" 
                                className="source__codelink-disable-button">Comming soon </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
