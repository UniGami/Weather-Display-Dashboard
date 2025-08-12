import React from 'react'

const Weatherhistory = () => {
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
                                {/* <!-- Table rows will be populated by JS --> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weatherhistory;