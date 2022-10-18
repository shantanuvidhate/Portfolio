import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BiotechIcon from '@mui/icons-material/Biotech';
import MessageIcon from '@mui/icons-material/Message';
const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i className="about__icon">
          <WorkspacePremiumIcon />
          </i>
            <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">6 Months</span>
        </div>
        <div className="about__box">
          <i className="about__icon">
          <BiotechIcon />
          </i>
            <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">4 + Projects</span>
        </div>
        <div className="about__box">
          <i className="about__icon">
          <MessageIcon />
          </i>
            <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info