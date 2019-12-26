async function get_weather_by_id(container, id) {
  let weather_url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => createWidget(container, response))
}

async function get_weather_by_name(container, caller, city, country_code) {
  let weather_url = country_code
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
    : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => {
      createWidget(container, response, caller)
      if (caller !== 'home-button') {
        getElem('#input_value').value = ''
      }
      return
    })
}

async function get_weather_by_coord(container, lat, lon, caller) {
  let weather_url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => {
      if (response.message !== 'accurate') {
        rand = (min, max) => Math.round(Math.random() * (max - min) + min)
        let lat = rand(-90, 90)
        let lon = rand(-180, 180)
        setTimeout(
          () => get_weather_by_coord(container, lat, lon, caller),
          1100
        )
        return
      }

      createWidget(container, response.list[0])

      if (caller === 'random-button') {
        getElem('#random').innerHTML = `
        <a class="navbar-brand text-light m-auto" id="random" title="Random City">
          <h4 class="fas fa-globe m-0"></h4>
        </a>
        `
      } else {
        if (caller === 'location-button') {
          getElem('#location').innerHTML = `
        <a class="navbar-brand text-light m-auto" id="location" title="Current Location">
          <h4 class="fas fa-location-arrow m-0"></h4>
        </a>
        `
        }
      }
    })
    .catch(err => console.log(err))
}

async function get_forecast_by_name(container, caller, city, country_code) {
  let weather_url = country_code
    ? `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country_code}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
    : `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => {
      console.log(response.list)
      response.list.map(current => {
        let time = new Date(current.dt * 1000).toLocaleString()
        let w_pic = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`
        let w = current.weather[0].main
        let t_max = Math.round(current.main.temp_max)
        let t_min = Math.round(current.main.temp_min)
        let t_feels = Math.round(current.main.feels_like)
        let forecast_item = document.createElement('ul')
        forecast_item.innerHTML = `
        <li class="calendar__item">
                <br>
                ${time}
                <img src=${w_pic} width="32" height="32" alt="Today">
                <p>${t_max}</p>
                <p>${t_min}</p>
                <p>${t_feels}</p>
              </li>
        `
        forecast_block2.appendChild(forecast_item)
      })

      // createForecast(container, response, caller)
    })
}
// get_forecast_by_name(forecast_block, '', 'Kharkiv', 'UA')
