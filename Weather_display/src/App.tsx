import { useState } from "react";
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Weatherhistory from "./components/Weatherhistory.tsx";
import PiMonitor from "./components/PiMonitor.tsx";
import "./style.css";

function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  return (
    <>
      <Header />
      <NavBar isActive={activeTab} setIsActive={setActiveTab} />
      {/* Conditional rendering */}
      {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "weather-history" && <Weatherhistory />}
      {activeTab === "PI-monitor" && <PiMonitor />}
    </>
  );
}

export default App;
