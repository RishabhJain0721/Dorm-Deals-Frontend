import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgb(17, 24, 39)',
    borderTop: '2px solid rgb(239, 68, 68)',
    padding: '20px',
    color: 'white',
   
  };

  return (
    <footer style={footerStyle}>
    <div>
      &copy; {new Date().getFullYear()} DormDeals
    </div>
    <a
      href="https://github.com/RishabhJain0721"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0a8 8 0 00-2.534 15.59c.4.07.546-.174.546-.387 0-.192-.007-.877-.013-1.588-2.01.347-2.43-.487-2.43-.487-.328-.832-.8-1.052-.8-1.052-.653-.446.05-.437.05-.437.722.05 1.104.744 1.104.744.642 1.1 1.682.784 2.09.598.065-.463.25-.781.456-.959-1.594-.180-3.265-.797-3.265-3.556 0-.787.28-1.43.744-1.937-.072-.18-.32-.918.07-1.91 0 0 .608-.195 1.987.744.576-.16 1.194-.24 1.805-.243.61.003 1.23.083 1.805.243 1.378-.939 1.986-.744 1.986-.744.39.992.14 1.73.068 1.91.464.507.743 1.15.743 1.937 0 2.765-1.674 3.374-3.275 3.55.257.222.488.66.488 1.33 0 .96-.008 1.735-.008 1.972 0 .215.145.465.55.386A8.003 8.003 0 008 0z"
        />
      </svg>
      GitHub
    </a>
  </footer>
  );
};

export default Footer;
