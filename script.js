const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eab28de0f3msh14bf04f6d4abb37p1f310ajsn61cf67db90f0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
	cityName.innerHTML=city
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city ,options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;

    cloud_pct_new.innerHTML = response.cloud_pct;
    temp_new.innerHTML =response.temp;
    feels_like_new.innerHTML = response.feels_like;
    humidity_new.innerHTML = response.humidity;
    min_temp_new.innerHTML = response.min_temp;
    max_temp_new.innerHTML  = response.max_temp;
    wind_speed_new.innerHTML = response.wind_speed;
    wind_degrees_new.innerHTML = response. wind_degrees;
    sunrise_new.innerHTML = response.sunrise;
    sunset_new.innerHTML = response.sunset; 

  })
  .catch((err) => console.error(err));
}


submit.addEventListener("click",(e) => {
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");
getWeather("Boston");
