import React, { useState } from 'react';
import BiotechIcon from '@mui/icons-material/Biotech';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./projects.css"
const Projects = () => {
    const [toggleState , setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Project build by me</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="services__icon"><BiotechIcon /></i>
                    <h3 className="services__title">Product <br /> Designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab (1)}>Description
                    <i className="services__button-icon"><EastIcon /></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal"  : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="services__modal-close"><CloseIcon /></i>
                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio nulla pariatur blanditiis non. Corporis iure deleniti earum odit quam, asperiores odio illum.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="services__icon"><BiotechIcon /></i>
                    <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                </div>
                <span className="services__button">Description
                    <i className="services__button-icon"><EastIcon /></i>
                </span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="services__modal-close"><CloseIcon /></i>
                        <h3 className="services__modal-title">UI/UX Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio nulla pariatur blanditiis non. Corporis iure deleniti earum odit quam, asperiores odio illum.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="services__content">
                <div>
                    <i className="services__icon"><BiotechIcon /></i>
                    <h3 className="services__title">Visual<br /> Designer</h3>
                </div>
                <span className="services__button">Description
                    <i className="services__button-icon"><EastIcon /></i>
                </span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="services__modal-close"><CloseIcon /></i>
                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio nulla pariatur blanditiis non. Corporis iure deleniti earum odit quam, asperiores odio illum.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="services__modal-icon"><CheckCircleOutlineIcon /></i>
                                <p className="services__modal-info">
                                    I devoloped the user Interface
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

export default Projects
