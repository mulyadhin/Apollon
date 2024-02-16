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
let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let shortform = daysShort[currentDay];
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

  let updateDayTwo = document.querySelector("#dayTwo");
  updateDayTwo.innerHTML = `${daysShort[now.getDay()]}`;

  let updateDayTwoLow = document.querySelector(".dayTwoLow");
  let dayTwoLow = response.data.daily[1].temperature.minimum;
  updateDayTwoLow.innerHTML = Math.round(dayTwoLow);

  let updateDayTwoHigh = document.querySelector(".dayTwoHigh");
  let dayTwoHigh = response.data.daily[1].temperature.maximum;
  updateDayTwoHigh.innerHTML = Math.round(dayTwoHigh);

  let updateDayTwoWeatherIcon = document.querySelector(".dayTwoWeatherIcon");
  let dayTwoWeatherIcon = response.data.daily[1].condition.icon;
  updateDayTwoWeatherIcon.innerHTML = `${dayTwoWeatherIcon}`;

  let updateDayThree = document.querySelector("#dayThree");
  updateDayThree.innerHTML = `${daysShort[now.getDay()]}`;

  let updateDayThreeLow = document.querySelector(".dayThreeLow");
  let dayThreeLow = response.data.daily[2].temperature.minimum;
  updateDayThreeLow.innerHTML = Math.round(dayThreeLow);

  let updateDayThreeHigh = document.querySelector(".dayThreeHigh");
  let dayThreeHigh = response.data.daily[2].temperature.maximum;
  updateDayThreeHigh.innerHTML = Math.round(dayThreeHigh);

  let updateDayThreeWeatherIcon = document.querySelector(
    ".dayThreeWeatherIcon"
  );
  let dayThreeWeatherIcon = response.data.daily[2].condition.icon;
  updateDayThreeWeatherIcon.innerHTML = `${dayThreeWeatherIcon}`;

  let updateDayFour = document.querySelector("#dayFour");
  updateDayFour.innerHTML = `${daysShort[now.getDay()]}`;

  let updateDayFourLow = document.querySelector(".dayFourLow");
  let dayFourLow = response.data.daily[3].temperature.minimum;
  updateDayFourLow.innerHTML = Math.round(dayFourLow);

  let updateDayFourHigh = document.querySelector(".dayFourHigh");
  let dayFourHigh = response.data.daily[3].temperature.maximum;
  updateDayFourHigh.innerHTML = Math.round(dayFourHigh);

  let updateDayFourWeatherIcon = document.querySelector(".dayFourWeatherIcon");
  let dayFourWeatherIcon = response.data.daily[3].condition.icon;
  updateDayFourWeatherIcon.innerHTML = `${dayFourWeatherIcon}`;

  let updateDayFive = document.querySelector("#dayFive");
  updateDayFive.innerHTML = `${daysShort[now.getDay()]}`;

  let updateDayFiveLow = document.querySelector(".dayFiveLow");
  let dayFiveLow = response.data.daily[4].temperature.minimum;
  updateDayFiveLow.innerHTML = Math.round(dayFiveLow);

  let updateDayFiveHigh = document.querySelector(".dayFiveHigh");
  let dayFiveHigh = response.data.daily[4].temperature.maximum;
  updateDayFiveHigh.innerHTML = Math.round(dayFiveHigh);

  let updateDayFiveWeatherIcon = document.querySelector(".dayFiveWeatherIcon");
  let dayFiveWeatherIcon = response.data.daily[4].condition.icon;
  updateDayFiveWeatherIcon.innerHTML = `img scr="${response.data.daily[4].condition.icon_url}`;

  let updateDaySix = document.querySelector("#daySix");
  updateDaySix.innerHTML = `${daysShort[now.getDay(5)]}`;

  let updateDaySixLow = document.querySelector(".daySixLow");
  let daySixLow = response.data.daily[5].temperature.minimum;
  updateDaySixLow.innerHTML = Math.round(daySixLow);

  let updateDaySixHigh = document.querySelector(".daySixHigh");
  let daySixHigh = response.data.daily[5].temperature.maximum;
  updateDaySixHigh.innerHTML = Math.round(daySixHigh);

  let updateDaySixWeatherIcon = document.querySelector(".daySixWeatherIcon");
  let daySixWeatherIcon = response.data.daily[5].condition.icon;
  updateDaySixWeatherIcon.innerHTML = `${daySixWeatherIcon}`;
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
