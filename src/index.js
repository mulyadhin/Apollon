let now = new Date();
let currentDay = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let dayForecast = daysShort[now.getDay()];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let time = `${hours}:${minutes}`;

function refreshWeather(response) {
  let currentDay = now.getDay();

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let temperature = response.data.daily[currentDay].temperature.day;
  let temperatureElement = document.querySelector(".current-temperature");
  temperatureElement.innerHTML = Math.round(temperature);

  let wind = response.data.daily[currentDay].wind.speed;
  let updateWind = document.querySelector(".wind");
  updateWind.innerHTML = `Wind: ${wind}km/h`;

  let humidity = response.data.daily[currentDay].temperature.humidity;
  let updateHumidity = document.querySelector(".humidity");
  updateHumidity.innerHTML = `Humidity: ${humidity}%`;

  let updateTodayWeatherIcon = document.querySelector("#todayWeatherIcon");
  updateTodayWeatherIcon.innerHTML = `<img src="${response.data.daily[0].condition.icon}" class="weather-icon">`;

  let updateDayTwo = document.querySelector("#dayTwo");
  updateDayTwo.innerHTML = `${daysShort[now.getDay() + 1]}`;

  let updateDayTwoLow = document.querySelector(".dayTwoLow");
  updateDayTwoLow.innerHTML = Math.round(
    response.data.daily[1].temperature.minimum
  );

  let updateDayTwoHigh = document.querySelector(".dayTwoHigh");
  updateDayTwoHigh.innerHTML = Math.round(
    response.data.daily[1].temperature.maximum
  );

  let updateDayTwoWeatherIcon = document.querySelector("#dayTwoWeatherIcon");
  updateDayTwoWeatherIcon.innerHTML = `<img src="${response.data.daily[1].condition.icon}" class="weather-icon">`;

  let updateDayThree = document.querySelector("#dayThree");
  updateDayThree.innerHTML = `${daysShort[now.getDay() + 2]}`;

  let updateDayThreeLow = document.querySelector(".dayThreeLow");
  updateDayThreeLow.innerHTML = Math.round(
    response.data.daily[2].temperature.minimum
  );

  let updateDayThreeHigh = document.querySelector(".dayThreeHigh");
  updateDayThreeHigh.innerHTML = Math.round(
    response.data.daily[2].temperature.maximum
  );

  let updateDayThreeWeatherIcon = document.querySelector(
    "#dayThreeWeatherIcon"
  );
  updateDayThreeWeatherIcon.innerHTML = `<img src="${response.data.daily[2].condition.icon_url}" class="weather-icon">`;

  let updateDayFour = document.querySelector("#dayFour");
  updateDayFour.innerHTML = `${daysShort[now.getDay() + 3]}`;

  let updateDayFourLow = document.querySelector(".dayFourLow");
  updateDayFourLow.innerHTML = Math.round(
    response.data.daily[3].temperature.minimum
  );

  let updateDayFourHigh = document.querySelector(".dayFourHigh");
  updateDayFourHigh.innerHTML = Math.round(
    response.data.daily[3].temperature.maximum
  );

  let updateDayFourWeatherIcon = document.querySelector("#dayFourWeatherIcon");
  updateDayFourWeatherIcon.innerHTML = `<img src="${response.data.daily[3].condition.icon_url}" class="weather-icon">`;

  let updateDayFive = document.querySelector("#dayFive");
  updateDayFive.innerHTML = `${daysShort[now.getDay() + 4]}`;

  let updateDayFiveLow = document.querySelector(".dayFiveLow");
  updateDayFiveLow.innerHTML = Math.round(
    response.data.daily[4].temperature.minimum
  );

  let updateDayFiveHigh = document.querySelector(".dayFiveHigh");
  updateDayFiveHigh.innerHTML = Math.round(
    response.data.daily[4].temperature.maximum
  );

  let updateDayFiveWeatherIcon = document.querySelector("#dayFiveWeatherIcon");
  updateDayFiveWeatherIcon.innerHTML = `<img src="${response.data.daily[4].condition.icon_url}" class="weather-icon">`;

  let updateDaySix = document.querySelector("#daySix");
  updateDaySix.innerHTML = `${daysShort[now.getDay() + 5]}`;

  let updateDaySixLow = document.querySelector(".daySixLow");
  updateDaySixLow.innerHTML = Math.round(
    response.data.daily[5].temperature.minimum
  );

  let updateDaySixHigh = document.querySelector(".daySixHigh");
  updateDaySixHigh.innerHTML = Math.round(
    response.data.daily[5].temperature.maximum
  );

  let updateDaySixWeatherIcon = document.querySelector("#daySixWeatherIcon");
  updateDaySixWeatherIcon.innerHTML = `<img src="${response.data.daily[5].condition.icon_url}" class="weather-icon">`;
}

function searchCity(city) {
  let apiKey = `9b523c80eead3e092o98fa4bbt7a0e84`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(refreshWeather);

  let currentDate = document.querySelector(".current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
}

function searchRequest(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

searchCity("New York");

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchRequest);
