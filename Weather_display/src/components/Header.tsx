import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Weather Monitoring Dashboard</h1>
      <div className="header-actions">
        <button className="btn btn--outline btn--sm" id="refreshBtn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
          </svg>
          Refresh
        </button>
      </div>
    </header>
  );
};

export default Header;
