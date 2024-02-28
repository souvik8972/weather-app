const apikey = "5513f4bb5ef40b16152452692e2c2a2d"
document.addEventListener("DOMContentLoaded", (event) => {

    let city = "kolkata"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    checkWeather(apiUrl)
});

const weatherIcon = document.querySelector(".weather-icon")
weatherIcon.addEventListener("click",()=>{
    alert("HH")
})
async function checkWeather(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json()
    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
    console.log(data.weather[0].main)
    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;

        default:
            // Handle unexpected weather condition
            break;
    }

}

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")




searchBtn.addEventListener("click", () => {

    const city = searchBox.value || "kolkata"
    console.log(city)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    checkWeather(apiUrl)

})