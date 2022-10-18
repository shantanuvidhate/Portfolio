import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com" className="home__social-icon" target="_blank" rel="noreferrer">
      <LinkedInIcon />
      </a>
      
      <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
      <GitHubIcon />
      </a>

      <a href="https://www.reddit.com/" className="home__social-icon" target="_blank" rel="noreferrer">
      <RedditIcon />

      </a>
    </div>
  )
}

export default Social