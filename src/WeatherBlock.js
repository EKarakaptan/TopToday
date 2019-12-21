function createWidget(container, response, caller) {
  state = {
    city: response.name,
    country: response.sys.country,
    description: response.weather[0].description,
    icon: response.weather[0].icon,
    temp: Math.round(response.main.temp),
    wind: response.wind.speed,
    humidity: response.main.humidity,
    pressure: Math.round(response.main.pressure * 0.75),
    time: new Date(response.dt * 1000).toLocaleTimeString(),
    country_name: codes.find(
      country => country.code === response.sys.country
    ).name
  }

  let widgetId = container.id[container.id.length - 1]
  let weather_elem = document.createElement('div')
  let weather_elem_content = `
    <link
        href="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/css/openweathermap-widget-right.min.css"
        rel="stylesheet"
      />
      <div class="widget-right weather-right--type1 widget-right--brown">
        <div class="widget-right__header widget-right__header--brown">
          <div class="widget-right__layout">
            <div>
              <h2 class="widget-right__title">${state.city}, ${state.country_name} (${state.country})</h2>
              <p class="widget-right__description">${state.description}</p>
            </div>
          </div>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${state.icon}.png"
            width="128"
            height="128"
            alt="Weather in ${state.city}, ${state.country_name}"
            class="weather-right__icon weather-right__icon--type1"
          />
        </div>
        <div class="weather-right weather-right--brown">
          <div class="weather-right__layout">
            <div class="weather-right__temperature">
              ${state.temp}<span>°C</span>
            </div>
            <div class="weather-right__weather">
              <div class="weather-right-card">
                <table class="weather-right__table">
                  <tbody>
                    <tr class="weather-right__items">
                      <th colspan="2" class="weather-right__item">Details</th>
                    </tr>
                    <tr class="weather-right__items">
                      <td class="weather-right__item">Feels like</td>
                      <td class="weather-right__item weather-right__feels">
                        ${state.temp}<span>°C</span>
                      </td>
                    </tr>
                    <tr class="weather-right__items">
                      <td class="weather-right__item">Wind</td>
                      <td class="weather-right__item weather-right__wind-speed">
                        ${state.wind} m/s
                      </td>
                    </tr>
                    <tr class="weather-right-card__items">
                      <td class="weather-right__item">Humidity</td>
                      <td class="weather-right__item weather-right__humidity">
                        ${state.humidity}%
                      </td>
                    </tr>  
                    <tr class="weather-right-card__items">
                      <td class="weather-right__item">Pressure</td>
                      <td class="weather-right__item weather-right__pressure">
                        ${state.pressure} mmHg
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="widget-right__footer widget-right__footer--brown pt-1">
          <div class="widget-right__layout">
            <a href="https://openweathermap.org/" target="_blank" class="widget-right__link"
              >OpenWeatherMap</a
            >
            <div class="widget-right__date">
              ${state.time}
            </div>
          </div>
        </div>
      </div> 
    `
  weather_elem.innerHTML = weather_elem_content
  container.childNodes[0]
    ? (container.childNodes[0].innerHTML = weather_elem_content)
    : container.appendChild(weather_elem)

  getNews(
    state.country,
    data.category,
    data.keyword,
    `#carousel${widgetId}`
  )

  if (widgetId == 1) {
    data.country1 = state.country
    data.city1 = state.city
  } else {
    if (widgetId == 2) {
      data.country2 = state.country
      data.city2 = state.city
    }
  }

  if (caller !== 'history-item') {
    new HistoryItem(
      state.city,
      state.country,
      2,
      state.temp,
      state.icon
    )
  }
  return
}
