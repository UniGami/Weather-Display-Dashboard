import React from "react";
type NavbarProps = {
  isActive: string;
  setIsActive: (tab: string) => void;
};
const NavBar: React.FC<NavbarProps> = ({ isActive, setIsActive }) => {
  const handleSwitch = (TabName: string) => {
    setIsActive(TabName);
  };
  return (
    <>
      <nav className="nav-tabs">
        <button
          className={isActive == "dashboard" ? "nav-tab active" : "nav-tab"}
          data-tab="dashboard"
          onClick={() => handleSwitch("dashboard")}
        >
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
            <rect x="3" y="3" width="7" height="9"></rect>
            <rect x="14" y="3" width="7" height="5"></rect>
            <rect x="14" y="12" width="7" height="9"></rect>
            <rect x="3" y="16" width="7" height="5"></rect>
          </svg>
          Dashboard
        </button>
        <button
          className={
            isActive == "weather-history" ? "nav-tab active" : "nav-tab"
          }
          data-tab="history"
          onClick={() => handleSwitch("weather-history")}
        >
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
            <path d="M3 6h18"></path>
            <path d="M3 12h18"></path>
            <path d="M3 18h18"></path>
          </svg>
          Weather History
        </button>
        <button
          className={isActive == "PI-monitor" ? "nav-tab active" : "nav-tab"}
          data-tab="monitor"
          onClick={() => handleSwitch("PI-monitor")}
        >
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
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          Pi Monitor
        </button>
      </nav>
    </>
  );
};

export default NavBar;
