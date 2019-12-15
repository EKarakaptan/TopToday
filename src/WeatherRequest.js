async function get_weather_by_id(container, id) {
  let weather_url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => createWidget(container, response))
}

async function get_weather_by_name(container, city, country_code) {
  let weather_url = country_code
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
    : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => createWidget(container, response))
    .finally(response => console.log('finished'))
}

async function get_weather_by_coord(container, lat, lon, caller) {
  let weather_url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => {
      if (response.message !== 'accurate') {
        rand = (min, max) =>
          Math.round(Math.random() * (max - min) + min)
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
          <h3 class="fas fa-globe m-0"></h3>
        </a>
        `
      } else {
        if (caller === 'location-button') {
          getElem('#location').innerHTML = `
        <a class="navbar-brand text-light m-auto" id="location" title="Current Location">
          <h3 class="fas fa-location-arrow m-0"></h3>
        </a>
        `
        }
      }
    })
    .catch(err => console.log(err))
}
