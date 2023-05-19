import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Social = () => {
  const Linkdin_Url = process.env.REACT_APP_LINKDIN_URL;
  const Hashnode_Url = process.env.REACT_APP_HASHNODE_URL;
  const Github_Url = process.env.REACT_APP_GITHUB_URL;
  return (
    <div className="home__social">
      <a href={Linkdin_Url} className="home__social-icon" target="_blank" rel="noreferrer">
      <LinkedInIcon />
      
      </a>
      
      <a href={Github_Url} className="home__social-icon" target="_blank" rel="noreferrer">
      <GitHubIcon />
      </a>

      <a href={Hashnode_Url} className="home__social-icon" target="_blank" rel="noreferrer">
      <svg width="20" height="20" viewBox="0 0 337 337" fill="none"><rect x="113" y="113" width="111" height="111" rx="55.5" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" /></svg>

      </a>
    </div>
  )
}

export default Social