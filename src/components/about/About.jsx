import React from 'react';
import "./about.css";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <div className="about__image"></div>

        <div className="about__data">
          <Info />
          <p className="about__description">
          Hello, I am Shantanu Vidhate, a third-year undergrad computer engineering student. I am a research aspirant who holds an interest in software development, system design, and building interesting web applications.
          </p>

        </div>

        
      </div>
    </section>
  )
}

export default About