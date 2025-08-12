import { useState,useEffect } from "react";
import axios from "axios";


const Weatherhistory = () => {
  const [weather, setWeather] = useState<string[][]>([]);
    useEffect(() => {
    axios
      .get("http://localhost:5000/api/getData") // your friend's server endpoint
      .then((res) => {
        console.log("Server data:", res);
        setWeather(res.data.res);
        console.log(weather);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  
  return (
    
    <>
      {/* <!-- Weather History Tab Content --> */}
      <div className="tab-content" id="history">
        <div className="card">
          <div className="card__header">
            <h3>Recent Weather Data</h3>
            <div className="table-controls">
              <select className="form-control" id="sortColumn">
                <option value="timestamp">Sort by Time</option>
                <option value="temperature">Sort by Temperature</option>
                <option value="humidity">Sort by Humidity</option>
                <option value="windSpeed">Sort by Wind Speed</option>
                <option value="pressure">Sort by Pressure</option>
              </select>
            </div>
          </div>
          <div className="card__body">
            <div className="table-container">
              <table className="weather-table">
                <thead>
                  <tr>
                    <th data-sort="timestamp">Timestamp</th>
                    <th data-sort="temperature">Temperature (°C)</th>
                    <th data-sort="humidity">Humidity (%)</th>
                    <th data-sort="windSpeed">Wind Speed (km/h)</th>
                    <th data-sort="pressure">Pressure (hPa)</th>
                    <th data-sort="condition">Condition</th>
                  </tr>
                </thead>
                <tbody id="weatherHistoryTable">
                  {weather.map((row, index) => (
                    <tr key={index}>
                      <td>{row[4]}</td> 
                      <td>{row[6]}</td>
                      <td>{row[5]}</td> 
                      <td>{row[12]}</td>
                      <td>{row[18]}</td>
                      <td>-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weatherhistory;

