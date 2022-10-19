import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';


const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
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
                <div className="skills__group">
                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">BootStrap</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="skills__icon">
                        <VerifiedIcon />
                        </i>

                        <div>
                            <h3 className="skills__name">TailwindCSS</h3>
                            <span className="skills__level">Basic</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend