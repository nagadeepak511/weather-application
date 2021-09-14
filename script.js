const iconUrl = (code) => {return `http://openweathermap.org/img/wn/${code}@2x.png`}
const apiUrl = (city) => {return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`}

function onStart() {
    displayResults('Vijayawada')
}

function displayResults(city) {
    fetch(apiUrl(city))
    .then((res) => {return res.json()})
    .then((data) => {
        document.getElementById('content-container').innerHTML = `
            <div id='content-header'>
                <h1 id="content-city-name">${data.name}</h1>
            </div>
            <img id="content-icon" src="${iconUrl(data.weather[0].icon)}" alt="">
            <h1 id="content-temperature">${Math.round(data.main.feels_like - 273.15)}<span id="content-temp-unit">&deg;C</span><span id="content-temp-min">MIN: ${Math.round(data.main.temp_min - 273.15)}&deg;C</span></h1>
            <div id="content-details-container">
                <div class="content-details">
                    <i class="fas fa-cloud"></i>
                    <span class="content-details-heading">${Math.round(data.clouds.all)}%</span>
                </div>
                <div class="content-details">
                    <i class="fas fa-wind"></i>
                    <span class="content-details-heading">${Math.round(data.wind.speed)}km/h</span>
                </div>
                <div class="content-details">
                    <i class="fas fa-tint"></i>
                    <span class="content-details-heading">${Math.round(data.main.humidity)}%</span>
                </div>
            </div>
        `
    })
}

function callFunc(){
    displayResults(document.getElementById('search-by-city').value)
}