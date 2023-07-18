const apiKey = '2a6e95d39acf5cafb24b6dacd317642a';
const city = 'Carlsbad';
const countryCode = 'US';

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to update weather card with fetched data
async function updateWeatherCard() {
  const weatherData = await fetchWeatherData();

  // Check if data is available and update the weather card
  if (weatherData) {
    document.getElementById('temperature').textContent = weatherData.main.temp;
    document.getElementById('condition').textContent = weatherData.weather[0].description;
    document.getElementById('humidity').textContent = weatherData.main.humidity;
    document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    document.querySelector('.weather-icon').alt = weatherData.weather[0].description;
  }
}

// Call the function to update the weather card on page load
updateWeatherCard();





  
    
  
    