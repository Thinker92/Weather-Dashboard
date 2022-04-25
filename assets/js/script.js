var cities = [];

var searchInputForm = document.querySelector("#searchForm");
var searchInputEl = document.querySelector("#inputCity");
var prevSearchEl = document.querySelector("#pastSearch");
var cityObjectEl = document.querySelector("#cityData");
var weekForecastContainerEl = document.querySelector("#fiveDay");
var weekForecastTitle = document.querySelector("#5dayTitle");
var todaysForecastEl = document.querySelector("#oneDay");
var todaysForecastTitle = document.querySelector("#cityName");
var todaysForecastData = document.querySelector("#cityDetails");

var formSubmitHandler = function(event) {
    event.preventDefault();
    var city = searchInputEl.value.trim();
    if (city) {
        console.log("User input was: " + city);
    } else {
        alert("Please enter a city")
    }
}

searchInputForm.addEventListener("submit", formSubmitHandler);


