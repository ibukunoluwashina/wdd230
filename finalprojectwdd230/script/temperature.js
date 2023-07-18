

    // Function to fetch weather forecast data from OpenWeatherMap API
    async function fetchWeatherData() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=imperial`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    // Function to update the temperature forecast
    async function updateTemperatureForecast() {
      const weatherData = await fetchWeatherData();

      // Check if data is available and update the temperature forecast
      if (weatherData && weatherData.list.length >= 3) {
        const forecastContainer = document.getElementById('forecast-container');

        for (let i = 0; i < 3; i++) {
          const forecast = weatherData.list[i];
          const date = new Date(forecast.dt_txt);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
          const temperature = forecast.main.temp;

          const forecastCard = document.createElement('div');
          forecastCard.classList.add('forecast-card');

          const forecastDate = document.createElement('p');
          forecastDate.classList.add('forecast-date');
          forecastDate.textContent = dayOfWeek;

          const forecastTemp = document.createElement('p');
          forecastTemp.classList.add('forecast-temp');
          forecastTemp.textContent = `Temperature: ${temperature} °K`;

          forecastCard.appendChild(forecastDate);
          forecastCard.appendChild(forecastTemp);

          forecastContainer.appendChild(forecastCard);
        }
      }
    }

    // Call the function to update the temperature forecast on page load
    updateTemperatureForecast();
  