import { useState,useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Weatherhistory from "./components/Weatherhistory.tsx";
import PiMonitor from "./components/PiMonitor.tsx";
import "./style.css";

function App() {
  //   useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/getData") // your friend's server endpoint
  //     .then((res) => {
  //       console.log("Server data:", res);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //     });
  // }, []);
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
