// Weather monitoring dashboard application
class WeatherDashboard {
    constructor() {
        this.data = {
            currentWeather: {
                station: "New Delhi",
                temperature: 32.5,
                humidity: 65,
                windSpeed: 15,
                windDirection: "W",
                pressure: 1003.2,
                condition: "Partly Cloudy",
                lastUpdate: "2025-08-10T17:30:00Z"
            },
            weatherData30Min: [
                {"timestamp": "2025-08-09T12:53:05.978877", "temperature": 30.6, "humidity": 70.0, "pressure": 1004.3, "rainfall": 0, "windSpeed": 6, "condition": "Clear"},
                {"timestamp": "2025-08-09T13:23:05.978877", "temperature": 28.3, "humidity": 72.9, "pressure": 1002.6, "rainfall": 0, "windSpeed": 7, "condition": "Clear"},
                {"timestamp": "2025-08-09T13:53:05.978877", "temperature": 29.2, "humidity": 76.3, "pressure": 995.3, "rainfall": 0, "windSpeed": 21, "condition": "Clear"},
                {"timestamp": "2025-08-09T14:23:05.978877", "temperature": 31.5, "humidity": 68.5, "pressure": 1001.2, "rainfall": 0, "windSpeed": 12, "condition": "Clear"},
                {"timestamp": "2025-08-09T14:53:05.978877", "temperature": 33.8, "humidity": 62.1, "pressure": 1000.8, "rainfall": 0, "windSpeed": 18, "condition": "Clear"},
                {"timestamp": "2025-08-09T15:23:05.978877", "temperature": 35.2, "humidity": 58.9, "pressure": 999.5, "rainfall": 0, "windSpeed": 22, "condition": "Clear"},
                {"timestamp": "2025-08-09T15:53:05.978877", "temperature": 36.1, "humidity": 55.2, "pressure": 998.9, "rainfall": 0, "windSpeed": 25, "condition": "Clear"},
                {"timestamp": "2025-08-09T16:23:05.978877", "temperature": 35.8, "humidity": 57.4, "pressure": 999.2, "rainfall": 1.5, "windSpeed": 20, "condition": "Rain"},
                {"timestamp": "2025-08-09T16:53:05.978877", "temperature": 34.6, "humidity": 61.8, "pressure": 1000.1, "rainfall": 0, "windSpeed": 16, "condition": "Clear"},
                {"timestamp": "2025-08-09T17:23:05.978877", "temperature": 33.2, "humidity": 64.9, "pressure": 1001.5, "rainfall": 0, "windSpeed": 14, "condition": "Clear"},
                {"timestamp": "2025-08-09T17:53:05.978877", "temperature": 31.8, "humidity": 67.2, "pressure": 1002.8, "rainfall": 0, "windSpeed": 11, "condition": "Clear"},
                {"timestamp": "2025-08-09T18:23:05.978877", "temperature": 30.5, "humidity": 70.5, "pressure": 1003.9, "rainfall": 0, "windSpeed": 9, "condition": "Clear"},
                {"timestamp": "2025-08-09T18:53:05.978877", "temperature": 29.1, "humidity": 73.8, "pressure": 1004.6, "rainfall": 0, "windSpeed": 8, "condition": "Clear"},
                {"timestamp": "2025-08-09T19:23:05.978877", "temperature": 28.2, "humidity": 76.1, "pressure": 1005.2, "rainfall": 0, "windSpeed": 7, "condition": "Clear"},
                {"timestamp": "2025-08-09T19:53:05.978877", "temperature": 27.6, "humidity": 78.9, "pressure": 1005.8, "rainfall": 0, "windSpeed": 6, "condition": "Clear"},
                {"timestamp": "2025-08-09T20:23:05.978877", "temperature": 27.1, "humidity": 80.2, "pressure": 1006.1, "rainfall": 0, "windSpeed": 5, "condition": "Clear"},
                {"timestamp": "2025-08-09T20:53:05.978877", "temperature": 26.8, "humidity": 81.5, "pressure": 1006.5, "rainfall": 0, "windSpeed": 5, "condition": "Clear"},
                {"timestamp": "2025-08-09T21:23:05.978877", "temperature": 26.5, "humidity": 82.1, "pressure": 1006.8, "rainfall": 0, "windSpeed": 4, "condition": "Clear"},
                {"timestamp": "2025-08-09T21:53:05.978877", "temperature": 26.3, "humidity": 82.8, "pressure": 1007.0, "rainfall": 0, "windSpeed": 4, "condition": "Clear"},
                {"timestamp": "2025-08-09T22:23:05.978877", "temperature": 26.1, "humidity": 83.2, "pressure": 1007.2, "rainfall": 0, "windSpeed": 4, "condition": "Clear"},
                {"timestamp": "2025-08-09T22:53:05.978877", "temperature": 25.9, "humidity": 83.6, "pressure": 1007.4, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-09T23:23:05.978877", "temperature": 25.8, "humidity": 83.9, "pressure": 1007.6, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-09T23:53:05.978877", "temperature": 25.6, "humidity": 84.1, "pressure": 1007.7, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-10T00:23:05.978877", "temperature": 25.5, "humidity": 84.3, "pressure": 1007.8, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-10T00:53:05.978877", "temperature": 25.4, "humidity": 84.5, "pressure": 1007.9, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-10T01:23:05.978877", "temperature": 25.3, "humidity": 84.6, "pressure": 1008.0, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-10T01:53:05.978877", "temperature": 25.2, "humidity": 84.8, "pressure": 1008.1, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T02:23:05.978877", "temperature": 25.1, "humidity": 84.9, "pressure": 1008.2, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T02:53:05.978877", "temperature": 25.0, "humidity": 85.0, "pressure": 1008.3, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T03:23:05.978877", "temperature": 24.9, "humidity": 85.1, "pressure": 1008.4, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T03:53:05.978877", "temperature": 24.8, "humidity": 85.2, "pressure": 1008.5, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T04:23:05.978877", "temperature": 24.7, "humidity": 85.3, "pressure": 1008.6, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T04:53:05.978877", "temperature": 24.6, "humidity": 85.4, "pressure": 1008.7, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T05:23:05.978877", "temperature": 24.5, "humidity": 85.5, "pressure": 1008.8, "rainfall": 0, "windSpeed": 2, "condition": "Clear"},
                {"timestamp": "2025-08-10T05:53:05.978877", "temperature": 24.8, "humidity": 84.9, "pressure": 1008.9, "rainfall": 0, "windSpeed": 3, "condition": "Clear"},
                {"timestamp": "2025-08-10T06:23:05.978877", "temperature": 25.2, "humidity": 84.1, "pressure": 1009.0, "rainfall": 0, "windSpeed": 4, "condition": "Clear"},
                {"timestamp": "2025-08-10T06:53:05.978877", "temperature": 25.8, "humidity": 82.8, "pressure": 1009.1, "rainfall": 0, "windSpeed": 5, "condition": "Clear"},
                {"timestamp": "2025-08-10T07:23:05.978877", "temperature": 26.5, "humidity": 80.9, "pressure": 1009.2, "rainfall": 0, "windSpeed": 6, "condition": "Clear"},
                {"timestamp": "2025-08-10T07:53:05.978877", "temperature": 27.4, "humidity": 78.5, "pressure": 1009.3, "rainfall": 0, "windSpeed": 8, "condition": "Clear"},
                {"timestamp": "2025-08-10T08:23:05.978877", "temperature": 28.5, "humidity": 75.8, "pressure": 1009.4, "rainfall": 0, "windSpeed": 10, "condition": "Clear"},
                {"timestamp": "2025-08-10T08:53:05.978877", "temperature": 29.8, "humidity": 72.6, "pressure": 1009.5, "rainfall": 0, "windSpeed": 12, "condition": "Clear"},
                {"timestamp": "2025-08-10T09:23:05.978877", "temperature": 31.2, "humidity": 69.1, "pressure": 1009.6, "rainfall": 0, "windSpeed": 14, "condition": "Clear"},
                {"timestamp": "2025-08-10T09:53:05.978877", "temperature": 32.8, "humidity": 65.2, "pressure": 1009.7, "rainfall": 0, "windSpeed": 16, "condition": "Clear"},
                {"timestamp": "2025-08-10T10:23:05.978877", "temperature": 34.1, "humidity": 61.5, "pressure": 1009.8, "rainfall": 0, "windSpeed": 18, "condition": "Clear"},
                {"timestamp": "2025-08-10T10:53:05.978877", "temperature": 35.2, "humidity": 58.2, "pressure": 1009.9, "rainfall": 0, "windSpeed": 20, "condition": "Clear"},
                {"timestamp": "2025-08-10T11:23:05.978877", "temperature": 30.3, "humidity": 69.8, "pressure": 1011.2, "rainfall": 2.8, "windSpeed": 6, "condition": "Rain"},
                {"timestamp": "2025-08-10T11:53:05.978877", "temperature": 28.0, "humidity": 78.9, "pressure": 1000.7, "rainfall": 0, "windSpeed": 5, "condition": "Clear"},
                {"timestamp": "2025-08-10T12:23:05.978877", "temperature": 29.6, "humidity": 67.3, "pressure": 1001.3, "rainfall": 0, "windSpeed": 7, "condition": "Clear"}
            ],
            chartConfigs: [
                {"id": "temperature-chart", "title": "Temperature (°C)", "dataKey": "temperature", "color": "rgba(239, 68, 68, 0.8)", "borderColor": "rgba(239, 68, 68, 1)", "unit": "°C"},
                {"id": "humidity-chart", "title": "Humidity (%)", "dataKey": "humidity", "color": "rgba(59, 130, 246, 0.8)", "borderColor": "rgba(59, 130, 246, 1)", "unit": "%"},
                {"id": "pressure-chart", "title": "Pressure (hPa)", "dataKey": "pressure", "color": "rgba(34, 197, 94, 0.8)", "borderColor": "rgba(34, 197, 94, 1)", "unit": "hPa"},
                {"id": "rainfall-chart", "title": "Rainfall (mm)", "dataKey": "rainfall", "color": "rgba(147, 51, 234, 0.8)", "borderColor": "rgba(147, 51, 234, 1)", "unit": "mm"}
            ],
            weatherHistory: [
                {"id": 1, "timestamp": "2025-08-10T17:00:00Z", "temperature": 32.5, "humidity": 65, "windSpeed": 15, "pressure": 1003.2, "condition": "Partly Cloudy"},
                {"id": 2, "timestamp": "2025-08-10T16:00:00Z", "temperature": 33.0, "humidity": 62, "windSpeed": 12, "pressure": 1002.8, "condition": "Sunny"},
                {"id": 3, "timestamp": "2025-08-10T15:00:00Z", "temperature": 34.2, "humidity": 58, "windSpeed": 18, "pressure": 1001.5, "condition": "Clear"},
                {"id": 4, "timestamp": "2025-08-10T14:00:00Z", "temperature": 35.1, "humidity": 55, "windSpeed": 20, "pressure": 1000.9, "condition": "Sunny"},
                {"id": 5, "timestamp": "2025-08-10T13:00:00Z", "temperature": 35.8, "humidity": 52, "windSpeed": 22, "pressure": 1000.2, "condition": "Hot"},
                {"id": 6, "timestamp": "2025-08-10T12:00:00Z", "temperature": 36.5, "humidity": 48, "windSpeed": 25, "pressure": 999.8, "condition": "Very Hot"},
                {"id": 7, "timestamp": "2025-08-10T11:00:00Z", "temperature": 35.0, "humidity": 45, "windSpeed": 28, "pressure": 999.5, "condition": "Hot"},
                {"id": 8, "timestamp": "2025-08-10T10:00:00Z", "temperature": 32.8, "humidity": 50, "windSpeed": 15, "pressure": 1000.1, "condition": "Warm"},
                {"id": 9, "timestamp": "2025-08-10T09:00:00Z", "temperature": 30.2, "humidity": 58, "windSpeed": 10, "pressure": 1001.3, "condition": "Pleasant"},
                {"id": 10, "timestamp": "2025-08-10T08:00:00Z", "temperature": 28.5, "humidity": 68, "windSpeed": 8, "pressure": 1002.5, "condition": "Cool"}
            ],
            piStatus: {
                status: "online",
                cpuUsage: 25.3,
                memoryUsage: 45.7,
                temperature: 52.1,
                diskUsage: 68.2,
                uptime: "5 days, 14:32:18",
                lastWeatherUpdate: "2025-08-10T17:25:00Z",
                ledDisplayStatus: "active",
                pingResponseTime: "12ms",
                dataFreshnessCheck: "passed"
            }
        };

        this.charts = {};
        this.updateInterval = null;
        this.currentSortColumn = 'timestamp';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
        this.startAutoUpdate();
    }

    setupEventListeners() {
        // Tab navigation - using event delegation for better reliability
        document.addEventListener('click', (e) => {
            const tabButton = e.target.closest('.nav-tab');
            if (tabButton) {
                e.preventDefault();
                const targetTab = tabButton.dataset.tab;
                if (targetTab) {
                    this.switchTab(targetTab);
                }
            }
        });

        // Refresh button
        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.refreshData();
            });
        }

        // Table sorting
        const sortSelect = document.getElementById('sortColumn');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortWeatherHistory(e.target.value);
            });
        }

        // Table header sorting
        document.addEventListener('click', (e) => {
            const sortHeader = e.target.closest('.weather-table th[data-sort]');
            if (sortHeader) {
                const sortBy = sortHeader.dataset.sort;
                this.sortWeatherHistory(sortBy);
            }
        });
    }

    switchTab(tabName) {
        console.log('Switching to tab:', tabName);
        
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeTabButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTabButton) {
            activeTabButton.classList.add('active');
        }

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });
        
        const targetContent = document.getElementById(tabName);
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
        }

        // Initialize charts if switching to dashboard
        if (tabName === 'dashboard') {
            setTimeout(() => this.initCharts(), 100);
        }
    }

    loadInitialData() {
        this.updateCurrentWeather();
        this.updateWeatherHistory();
        this.updatePiStatus();
        this.createChartContainers();
        setTimeout(() => this.initCharts(), 100);
    }

    createChartContainers() {
        const chartsContainer = document.getElementById('chartsContainer');
        if (!chartsContainer) return;

        chartsContainer.innerHTML = '';

        this.data.chartConfigs.forEach(config => {
            const chartCard = document.createElement('div');
            chartCard.className = 'chart-card';
            chartCard.innerHTML = `
                <div class="chart-card__header">
                    <h3>${config.title}</h3>
                    <span class="chart-unit">${config.unit}</span>
                </div>
                <div class="chart-card__body">
                    <div class="chart-container" style="position: relative; height: 280px;">
                        <canvas id="${config.id}"></canvas>
                    </div>
                </div>
            `;
            chartsContainer.appendChild(chartCard);
        });
    }

    initCharts() {
        // Destroy existing charts
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};

        // Create new charts for each configuration
        this.data.chartConfigs.forEach(config => {
            this.createChart(config);
        });
    }

    createChart(config) {
        const ctx = document.getElementById(config.id);
        if (!ctx) return;

        const chartData = this.data.weatherData30Min;
        const labels = chartData.map(d => this.formatTimeShort(d.timestamp));
        const data = chartData.map(d => this.formatNumber(d[config.dataKey], config.dataKey === 'rainfall' ? 1 : 1));

        this.charts[config.id] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: config.title,
                    data: data,
                    borderColor: config.borderColor,
                    backgroundColor: config.color,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    pointBackgroundColor: config.borderColor,
                    pointBorderColor: config.borderColor,
                    pointHoverBackgroundColor: config.borderColor,
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: config.borderColor,
                        borderWidth: 2,
                        cornerRadius: 8,
                        displayColors: true,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        caretSize: 6,
                        caretPadding: 8,
                        callbacks: {
                            label: (context) => {
                                return `${config.title}: ${context.parsed.y}${config.unit}`;
                            },
                            title: (tooltipItems) => {
                                const index = tooltipItems[0].dataIndex;
                                const timestamp = chartData[index].timestamp;
                                return this.formatDateTime(timestamp);
                            },
                            afterBody: (tooltipItems) => {
                                const index = tooltipItems[0].dataIndex;
                                const dataPoint = chartData[index];
                                return [
                                    `Condition: ${dataPoint.condition}`,
                                    `Wind: ${dataPoint.windSpeed} km/h`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: config.dataKey === 'rainfall',
                        grid: {
                            color: 'rgba(167, 169, 169, 0.2)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#626C71',
                            font: {
                                size: 11
                            },
                            callback: (value) => {
                                return value + config.unit;
                            }
                        },
                        border: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(167, 169, 169, 0.2)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#626C71',
                            font: {
                                size: 11
                            },
                            maxTicksLimit: 8
                        },
                        border: {
                            display: false
                        }
                    }
                },
                onHover: (event, activeElements) => {
                    event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
                }
            }
        });
    }

    updateCurrentWeather() {
        const weather = this.data.currentWeather;
        
        // Format numbers properly
        const temp = this.formatNumber(weather.temperature, 1);
        const pressure = this.formatNumber(weather.pressure, 1);
        
        const currentTempEl = document.getElementById('currentTemp');
        const currentConditionEl = document.getElementById('currentCondition');
        const currentLocationEl = document.getElementById('currentLocation');
        const currentHumidityEl = document.getElementById('currentHumidity');
        const currentWindEl = document.getElementById('currentWind');
        const currentPressureEl = document.getElementById('currentPressure');
        const lastUpdateEl = document.getElementById('lastUpdate');
        
        if (currentTempEl) currentTempEl.textContent = `${temp}°C`;
        if (currentConditionEl) currentConditionEl.textContent = weather.condition;
        if (currentLocationEl) currentLocationEl.textContent = weather.station;
        if (currentHumidityEl) currentHumidityEl.textContent = `${weather.humidity}%`;
        if (currentWindEl) currentWindEl.textContent = `${weather.windSpeed} km/h ${weather.windDirection}`;
        if (currentPressureEl) currentPressureEl.textContent = `${pressure} hPa`;
        if (lastUpdateEl) lastUpdateEl.textContent = this.formatTime(weather.lastUpdate);

        // Update weather icon
        const weatherIconEl = document.getElementById('weatherIcon');
        if (weatherIconEl) {
            weatherIconEl.textContent = this.getWeatherIcon(weather.condition);
        }

        // Update weather status
        const weatherStatusEl = document.getElementById('weatherStatus');
        if (weatherStatusEl) {
            weatherStatusEl.textContent = 'Live';
            weatherStatusEl.className = 'status status--success';
        }
    }

    updateWeatherHistory() {
        const tbody = document.getElementById('weatherHistoryTable');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        this.data.weatherHistory.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${this.formatDateTime(record.timestamp)}</td>
                <td>${this.formatNumber(record.temperature, 1)}</td>
                <td>${record.humidity}</td>
                <td>${record.windSpeed}</td>
                <td>${this.formatNumber(record.pressure, 1)}</td>
                <td>${record.condition}</td>
            `;
            tbody.appendChild(row);
        });
    }

    updatePiStatus() {
        const piStatus = this.data.piStatus;

        // Update Pi status badge
        const statusBadge = document.getElementById('piStatusBadge');
        if (statusBadge) {
            if (piStatus.status === 'online') {
                statusBadge.textContent = 'Online';
                statusBadge.className = 'status status--success';
            } else {
                statusBadge.textContent = 'Offline';
                statusBadge.className = 'status status--error';
            }
        }

        // Update summary status indicators
        const systemStatusEl = document.getElementById('systemStatus');
        if (systemStatusEl) {
            systemStatusEl.textContent = '●';
            systemStatusEl.className = `status-indicator ${piStatus.status === 'online' ? 'online' : 'error'}`;
        }
        
        const ledStatusEl = document.getElementById('ledStatus');
        if (ledStatusEl) {
            ledStatusEl.textContent = '●';
            ledStatusEl.className = `status-indicator ${piStatus.ledDisplayStatus === 'active' ? 'online' : 'error'}`;
        }
        
        const dataFreshStatusEl = document.getElementById('dataFreshStatus');
        if (dataFreshStatusEl) {
            dataFreshStatusEl.textContent = '●';
            dataFreshStatusEl.className = `status-indicator ${piStatus.dataFreshnessCheck === 'passed' ? 'online' : 'warning'}`;
        }
        
        const pingTimeEl = document.getElementById('pingTime');
        if (pingTimeEl) {
            pingTimeEl.textContent = piStatus.pingResponseTime;
        }

        // Update detailed Pi monitor tab
        const systemStatusBadgeEl = document.getElementById('systemStatusBadge');
        if (systemStatusBadgeEl) {
            systemStatusBadgeEl.textContent = piStatus.status === 'online' ? 'Online' : 'Offline';
            systemStatusBadgeEl.className = `status ${piStatus.status === 'online' ? 'status--success' : 'status--error'}`;
        }

        // Update metrics
        this.updateMetric('cpuUsage', piStatus.cpuUsage, 'cpuProgress');
        this.updateMetric('memoryUsage', piStatus.memoryUsage, 'memoryProgress');
        this.updateMetric('diskUsage', piStatus.diskUsage, 'diskProgress');
        
        const cpuTempEl = document.getElementById('cpuTemp');
        if (cpuTempEl) {
            cpuTempEl.textContent = `${this.formatNumber(piStatus.temperature, 1)}°C`;
        }
        
        const tempProgress = document.getElementById('tempProgress');
        if (tempProgress) {
            tempProgress.style.width = `${(piStatus.temperature / 80) * 100}%`;
            tempProgress.className = `progress-fill ${piStatus.temperature > 70 ? 'error' : piStatus.temperature > 60 ? 'warning' : ''}`;
        }

        // Update LED display info
        const ledDisplayBadgeEl = document.getElementById('ledDisplayBadge');
        if (ledDisplayBadgeEl) {
            ledDisplayBadgeEl.textContent = piStatus.ledDisplayStatus === 'active' ? 'Active' : 'Inactive';
            ledDisplayBadgeEl.className = `status ${piStatus.ledDisplayStatus === 'active' ? 'status--success' : 'status--error'}`;
        }
        
        const ledDisplayStatusEl = document.getElementById('ledDisplayStatus');
        if (ledDisplayStatusEl) {
            ledDisplayStatusEl.textContent = piStatus.ledDisplayStatus === 'active' ? 'Active' : 'Inactive';
        }
        
        const lastWeatherUpdateEl = document.getElementById('lastWeatherUpdate');
        if (lastWeatherUpdateEl) {
            lastWeatherUpdateEl.textContent = this.formatTime(piStatus.lastWeatherUpdate);
        }
        
        const dataFreshnessEl = document.getElementById('dataFreshness');
        if (dataFreshnessEl) {
            dataFreshnessEl.textContent = piStatus.dataFreshnessCheck === 'passed' ? 'Passed' : 'Failed';
        }
        
        const systemUptimeEl = document.getElementById('systemUptime');
        if (systemUptimeEl) {
            systemUptimeEl.textContent = piStatus.uptime;
        }

        // Update network info
        const pingResponseEl = document.getElementById('pingResponse');
        if (pingResponseEl) {
            pingResponseEl.textContent = piStatus.pingResponseTime;
        }
        
        const lastDataFetchEl = document.getElementById('lastDataFetch');
        if (lastDataFetchEl) {
            lastDataFetchEl.textContent = this.formatTime(piStatus.lastWeatherUpdate);
        }
    }

    updateMetric(metricId, value, progressId) {
        const metricEl = document.getElementById(metricId);
        if (metricEl) {
            metricEl.textContent = `${this.formatNumber(value, 1)}%`;
        }
        
        const progress = document.getElementById(progressId);
        if (progress) {
            progress.style.width = `${value}%`;
            progress.className = `progress-fill ${value > 80 ? 'error' : value > 60 ? 'warning' : ''}`;
        }
    }

    sortWeatherHistory(sortBy) {
        this.currentSortColumn = sortBy;
        const sortedData = [...this.data.weatherHistory].sort((a, b) => {
            if (sortBy === 'timestamp') {
                return new Date(b.timestamp) - new Date(a.timestamp);
            }
            return b[sortBy] - a[sortBy];
        });

        const tbody = document.getElementById('weatherHistoryTable');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        sortedData.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${this.formatDateTime(record.timestamp)}</td>
                <td>${this.formatNumber(record.temperature, 1)}</td>
                <td>${record.humidity}</td>
                <td>${record.windSpeed}</td>
                <td>${this.formatNumber(record.pressure, 1)}</td>
                <td>${record.condition}</td>
            `;
            tbody.appendChild(row);
        });
    }

    refreshData() {
        const refreshBtn = document.getElementById('refreshBtn');
        if (!refreshBtn) return;
        
        refreshBtn.disabled = true;
        refreshBtn.textContent = 'Refreshing...';

        // Simulate API call delay
        setTimeout(() => {
            this.simulateDataUpdate();
            this.loadInitialData();
            
            refreshBtn.disabled = false;
            refreshBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
                Refresh
            `;
        }, 1500);
    }

    simulateDataUpdate() {
        // Simulate slight variations in weather data
        const variation = (Math.random() - 0.5) * 2;
        this.data.currentWeather.temperature = Math.round((this.data.currentWeather.temperature + variation) * 10) / 10;
        this.data.currentWeather.humidity = Math.max(20, Math.min(100, this.data.currentWeather.humidity + Math.floor((Math.random() - 0.5) * 10)));
        this.data.currentWeather.windSpeed = Math.max(0, this.data.currentWeather.windSpeed + Math.floor((Math.random() - 0.5) * 5));
        this.data.currentWeather.pressure = Math.round((this.data.currentWeather.pressure + (Math.random() - 0.5) * 5) * 10) / 10;
        this.data.currentWeather.lastUpdate = new Date().toISOString();

        // Simulate Pi status changes
        this.data.piStatus.cpuUsage = Math.round(Math.max(10, Math.min(90, this.data.piStatus.cpuUsage + (Math.random() - 0.5) * 10)) * 10) / 10;
        this.data.piStatus.memoryUsage = Math.round(Math.max(20, Math.min(80, this.data.piStatus.memoryUsage + (Math.random() - 0.5) * 5)) * 10) / 10;
        this.data.piStatus.temperature = Math.round(Math.max(40, Math.min(75, this.data.piStatus.temperature + (Math.random() - 0.5) * 3)) * 10) / 10;
        this.data.piStatus.pingResponseTime = `${Math.floor(Math.random() * 20 + 5)}ms`;
        this.data.piStatus.lastWeatherUpdate = new Date().toISOString();
    }

    startAutoUpdate() {
        this.updateInterval = setInterval(() => {
            this.simulateDataUpdate();
            this.updateCurrentWeather();
            this.updatePiStatus();
            
            // Update charts if they exist
            if (Object.keys(this.charts).length > 0) {
                this.initCharts();
            }
        }, 30000); // Update every 30 seconds
    }

    getWeatherIcon(condition) {
        const icons = {
            'Sunny': '☀️',
            'Clear': '☀️',
            'Partly Cloudy': '⛅',
            'Cloudy': '☁️',
            'Rain': '🌧️',
            'Rainy': '🌧️',
            'Hot': '🌡️',
            'Very Hot': '🔥',
            'Cool': '🌤️',
            'Pleasant': '😊',
            'Warm': '🌤️'
        };
        return icons[condition] || '🌤️';
    }

    formatNumber(value, decimals = 1) {
        return Number(value).toFixed(decimals);
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
        });
    }

    formatDateTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString('en-IN', { 
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit', 
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
        });
    }

    formatTimeShort(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-IN', { 
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
        });
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherDashboard();
});