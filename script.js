const input = document.querySelector('.input-search');
const btnSearch = document.querySelector('.btn-search');

btnSearch.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e5835e78201292c6a4fc159e7b157fef&units=metric&lang=ID`)
        .then(response => response.json())
        .then(response => {
            const wheaterInfo = document.querySelector('.wheater-info');
            const wheater = response;

            let wheaterUI = `   <div class="logo">${fetch(`https://openweathermap.org/img/wn/${wheater.weather[0].icon}@2x.png`)
                                .then(response => {
                                    const logo = document.querySelector('.logo');
                                    let UpdateLogo = `<img src="${response.url}" alt="">`

                                    logo.innerHTML = UpdateLogo;
                                })
                                }</div>


                                
                                <h1>${Math.floor(wheater.main.temp)}&deg;C</h1>
                                <p>${wheater.weather[0].description}</p>
                                <h2>${wheater.name}</h2>

                                <div class="row">

                                    <div class="humadity-info">
                                        <i class="bi bi-moisture"></i>
                                        <div class="info">
                                            <h3>${wheater.main.humidity}%</h3>
                                            <p>humadity</p>
                                        </div>
                                    </div>

                                    <div class="wind-info">
                                        <i class="bi bi-wind"></i>
                                        <div class="info">
                                            <h3>${Math.floor(wheater.wind.speed) * 3.6}km/h</h3>
                                            <p>Wind Speed</p>
                                        </div>
                                    </div>

                                </div>`;


            wheaterInfo.innerHTML = wheaterUI;
        })
})