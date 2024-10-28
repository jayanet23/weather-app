const btnSearch = document.querySelector('.btn-search');
const input = document.querySelector('.input-search');
// when search button onclick
btnSearch.addEventListener('click', function (e) {
    getWeatherData();
})

// get weather data
function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e5835e78201292c6a4fc159e7b157fef&units=metric&lang=ID`)
        .then(response => response.json())
        .then(response => {
            const weather = response;
            updateUI(weather);
            input.value = '';
        })
        .catch(() => {
            alert('lokasi tidak diketahui, masukkan lokasi yang benar kawan😁🙏👍')
        })
}

// update weather data ui
function updateUI(weather) {
    const weatherInfo = document.querySelector('.weather-info');
    let updateWeather = `<div class="logo">${updateImage(weather)}</div>
        <h1>${Math.floor(weather.main.temp)}&deg;C</h1>
        <p>${weather.weather[0].description}</p>
        <h2>${weather.name}</h2>
        <div class="row">
            <div class="humadity-info">
                <i class="bi bi-moisture"></i>
                <div class="info">
                    <h3>${weather.main.humidity}%</h3>
                    <p>humadity</p>
                </div>
            </div>
            <div class="wind-info">
                <i class="bi bi-wind"></i>
                <div class="info">
                <h3>${Math.floor(weather.wind.speed) * 3.6}km/h</h3>
                <p>Wind Speed</p>
                </div>
                </div>
                </div>`;
    weatherInfo.innerHTML = updateWeather;
}

// update image weather
function updateImage(weather) {
    fetch(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        .then(response => {
            const logo = document.querySelector('.logo');
            let UpdateLogo = `<img src="${response.url}" alt="weather image description">`
            logo.innerHTML = UpdateLogo;
        })
}

// when user click enter button do getWeatherData()
input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13 ) {
        getWeatherData();
    }
})