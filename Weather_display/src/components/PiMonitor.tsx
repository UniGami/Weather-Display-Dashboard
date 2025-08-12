function PiMonitor() {
  return (
    // <!-- Pi Monitor Tab Content -->
    <div className="tab-content" id="monitor">
      <div className="monitor-grid">
        {/* <!-- System Status Card --> */}
        <div className="card system-status">
          <div className="card__header">
            <h3>System Status</h3>
            <div className="status" id="systemStatusBadge">
              Online
            </div>
          </div>
          <div className="card__body">
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-label">CPU Usage</div>
                <div className="metric-value">
                  <span id="cpuUsage">--%</span>
                  <div className="progress-bar">
                    <div className="progress-fill" id="cpuProgress"></div>
                  </div>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Memory Usage</div>
                <div className="metric-value">
                  <span id="memoryUsage">--%</span>
                  <div className="progress-bar">
                    <div className="progress-fill" id="memoryProgress"></div>
                  </div>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-label">CPU Temperature</div>
                <div className="metric-value">
                  <span id="cpuTemp">--°C</span>
                  <div className="progress-bar">
                    <div className="progress-fill" id="tempProgress"></div>
                  </div>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Disk Usage</div>
                <div className="metric-value">
                  <span id="diskUsage">--%</span>
                  <div className="progress-bar">
                    <div className="progress-fill" id="diskProgress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- LED Display Status --> */}
        <div className="card led-display">
          <div className="card__header">
            <h3>LED Display Status</h3>
            <div className="status" id="ledDisplayBadge">
              Active
            </div>
          </div>
          <div className="card__body">
            <div className="display-status">
              <div className="display-info">
                <div className="info-item">
                  <span className="info-label">Status:</span>
                  <span className="info-value" id="ledDisplayStatus">
                    Active
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Last Weather Update:</span>
                  <span className="info-value" id="lastWeatherUpdate">
                    --
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Data Freshness:</span>
                  <span className="info-value" id="dataFreshness">
                    Passed
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Uptime:</span>
                  <span className="info-value" id="systemUptime">
                    --
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Network Status --> */}
        <div className="card network-status">
          <div className="card__header">
            <h3>Network & Connectivity</h3>
          </div>
          <div className="card__body">
            <div className="network-info">
              <div className="info-item">
                <span className="info-label">Ping Response:</span>
                <span className="info-value" id="pingResponse">
                  --
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">IMD API Status:</span>
                <span className="info-value status--success">Connected</span>
              </div>
              <div className="info-item">
                <span className="info-label">Last Data Fetch:</span>
                <span className="info-value" id="lastDataFetch">
                  --
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PiMonitor;
