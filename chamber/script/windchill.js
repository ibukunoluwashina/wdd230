
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.discription');
const windSpeedElement = document.querySelector('.windspeed');
const windChillElement = document.querySelector('.windchill');


async function fetchWeatherData(city) {
  const apiKey = '2a6e95d39acf5cafb24b6dacd317642a'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    
    temperatureElement.textContent = `${data.main.temp}°C`;
    descriptionElement.textContent = data.weather[0].description;
    windSpeedElement.textContent = `${data.wind.speed} m/s`;
    
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill ? `${windChill}°C` : 'N/A';
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}

function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  } else {
    return null;
  }
}

fetchWeatherData('Akure');
