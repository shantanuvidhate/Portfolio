import React from 'react';
import "./footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Shantanu</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact Me</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/shantanu-vidhate-3077711a0/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>

                    <a href="https://github.com/shantanuvidhate" className="footer__social-link" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </a>

                    <a href="https://www.reddit.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <RedditIcon />

                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Shantanu_Vidhate. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer