const temperatureElement = document.querySelector('.temperature');
const iconElement = document.querySelector('.icon');
const descriptionElement = document.querySelector('.discription');
const windSpeedElement = document.querySelector('.windspeed');
const windChillElement = document.querySelector('.windchill');

async function fetchWeatherData(city) {
  const apiKey = '2a6e95d39acf5cafb24b6dacd317642a'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperature = `${data.main.temp}°C`;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const description = data.weather[0].description;
    const windSpeed = `${data.wind.speed} m/s`;
    const windChill = calculateWindChill(data.main.temp, data.wind.speed);

    temperatureElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon"> ${temperature}`;
    descriptionElement.textContent = description;
    windSpeedElement.textContent = windSpeed;
    windChillElement.textContent = windChill ? `${windChill}°C` : 'N/A';
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}

function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(2);
}

fetchWeatherData('Akure');
