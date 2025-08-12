import { useEffect,useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState(false);
    const [loading,setLoading] = useState<boolean>(true);
    useEffect(() => {
    axios
      .get("http://localhost:5000/api/compareIfSame") // your friend's server endpoint
      .then((res) => {
        console.log("Server data:", res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const [weather, setWeather] = useState<string[]>([]);
    useEffect(() => {
    axios
      .get("http://localhost:5000/api/getData") // your friend's server endpoint
      .then((res) => {
        console.log("Server data:", res);
        setWeather(res.data.res[0]);
        console.log(weather);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  return (
    <>
      {" "}
      <div className="tab-content active" id="dashboard">
        <div className="dashboard-layout">
          {/* <!-- Current Weather Section --> */}
          <div className="current-weather-section">
            {/* <!-- Current Weather Card --> */}
            <div className="card current-weather">
              <div className="card__header">
                <h3>Current Weather</h3>
                <div className="status status--success" id="weatherStatus">
                   {weather  && weather[6] != null ? "Live": "Checking"}
                </div>
              </div>
              <div className="card__body">
                <div className="weather-main">
                  <div className="temperature">
                    <span className="temp-value" id="currentTemp">
                      {weather  && weather[6] != null ? weather[6]+"°C": "--°C"}
                    </span>
                    <div className="temp-details">
                      <div className="condition" id="currentCondition">
                        Partly Sunny
                      </div>
                      <div className="location" id="currentLocation">
                        {weather? weather[1]: "--"}
                      </div>
                    </div>
                  </div>
                  <div className="weather-icon" id="weatherIcon">
                    🌤️
                  </div>
                </div>
                <div className="weather-details">
                  <div className="detail-item">
                    <span className="detail-label">Rainfall</span>
                    <span className="detail-value" id="currentHumidity">
                      {weather && weather[5] != null ? weather[5] + " mm" : "-- mm"}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Wind</span>
                    <span className="detail-value" id="currentWind">
                      {weather && weather[12] != null ? weather[12]+" km/hr": "--km/hr"}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Pressure</span>
                    <span className="detail-value" id="currentPressure">
                      {weather  && weather[18] != null ? weather[18]+" hPa/gpm": "--hPa/gpm"}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Last Update</span>
                    <span className="detail-value" id="lastUpdate">
                      --
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pi Status Summary Card --> */}
            <div className="card pi-status-summary">
              <div className="card__header">
                <h3>Raspberry Pi Status</h3>
                <div className="status" id="piStatusBadge">
                  {loading? "Checking...": data? "Online":"Offline"}
                </div>
              </div>
              <div className="card__body">
                <div className="status-grid">
                  <div className="status-item">
                    <div className="status-label">System</div>
                    <div className="status-indicator" id="systemStatus">
                      ●
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">LED Display</div>
                    <div className="status-indicator" id="ledStatus">
                      ●
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">Data Fresh</div>
                    <div className="status-indicator" id="dataFreshStatus">
                      ●
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-label">Response Time</div>
                    <div className="status-value" id="pingTime">
                      --
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Weather Charts Section --> */}
          <div className="weather-charts-section">
            <div className="section-header">
              <h2>Weather Trends (24 Hours)</h2>
              <p className="section-subtitle">30-minute interval data</p>
            </div>
            <div className="charts-grid" id="chartsContainer">
              {/* <!-- Charts will be dynamically generated by JavaScript --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
