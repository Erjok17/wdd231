

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-caption');

// OpenWeatherMap API URL and key
const apiKey = '5ae3cb8b85b2fda581ff1c310930dd05'; // Replace with your OpenWeatherMap API key
const url = `https://api.openweathermap.org/data/2.5/weather?lat=0.31&lon=32.58&units=metric&appid=${apiKey}`;

// Function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing purposes
      displayResults(data); // Call function to display results
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to display weather data
function displayResults(data) {
  // Update temperature
  const temperature = Math.round(data.main.temp);
  currentTemp.innerHTML = `${temperature}&deg;C`;

  // Update weather icon and description
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = data.weather[0].description;

  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

// Call the API fetch function
apiFetch();
