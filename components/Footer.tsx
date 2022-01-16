import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = (props: any) => {
  return (
    <footer {...props}>
      <a
        href="https://github.com/rei-rala"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />

      </a>
      by rei-rala
      <a
        href="https://www.linkedin.com/in/ramon-irala-220362110/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>

    </footer>
  );
};

export default Footer;