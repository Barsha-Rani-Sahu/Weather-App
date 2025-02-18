const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") return;

    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("city").textContent = data.name;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("windSpeed").textContent = data.wind.speed;

    // Change weather icon based on condition
    const weatherIcon = document.getElementById("weather-icon");
    const weatherCondition = data.weather[0].main.toLowerCase();

    if (weatherCondition.includes("cloud")) {
        weatherIcon.src = "cloud.png";
    } else if (weatherCondition.includes("rain")) {
        weatherIcon.src = "rain.png";
    } else if (weatherCondition.includes("clear")) {
        weatherIcon.src = "moon.png";
    } else {
        weatherIcon.src = "weather.png";
    }
}
