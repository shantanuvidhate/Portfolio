import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';

const Backend = () => {
  return (
    <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">Express JS</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">Mongo DB</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Backend