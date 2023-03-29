



/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

const city_name = document.getElementById("city-name");
const weather_type = document.getElementById("weather-type");


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5ba11d71d3msh4822d8caffbcbcdp1b2c4cjsncc54c790cda1',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  }; 
  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  //console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);

}

/**
 * Show the weather data in HTML
 * HINT: make sure to consweatherDataole log the weatherData to see how the data looks like
 */
 const temp = document.getElementById("temp");
 const min_temp = document.getElementById("min-temp");
 const max_temp = document.getElementById("max-temp");
 
const showWeatherData = (weatherData) => {

  city_name.innerHTML = weatherData.name;
  weather_type.innerHTML = weatherData.weather[0].main;
  temp.innerHTML= weatherData.main.temp;
  min_temp.innerHTML = weatherData.main.temp_min;
  max_temp.innerHTML = weatherData.main.temp_max;
}
