async function get_weather_by_coord(container, lat, lon) {
  let weather_url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => {
      if (response.id === 0) {
        setTimeout(() => nav_random_button.click(), 1000)
        return
      }
      createWidget(container, response.list[0])
    })
}

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
}

function createWidget(container, wr) {
  let weather_elem = document.createElement('div')
  weather_elem.innerHTML = `
      <link
      href="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/css/openweathermap-widget-right.min.css"
      rel="stylesheet"
    />
    <div class="widget-right weather-right--type1 widget-right--brown">
      <div class="widget-right__header widget-right__header--brown">
        <div class="widget-right__layout">
          <div>
            <h2 class="widget-right__title">${wr.name}, ${wr.sys.country}</h2>
            <p class="widget-right__description">${
              wr.weather[0].description
            }</p>
          </div>
        </div>
        <img
          src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${
            wr.weather[0].icon
          }.png"
          width="128"
          height="128"
          alt="Weather in ${wr.name}, ${wr.sys.country}"
          class="weather-right__icon weather-right__icon--type1"
        />
      </div>
      <div class="weather-right weather-right--brown">
        <div class="weather-right__layout">
          <div class="weather-right__temperature">
            ${Math.round(wr.main.temp)}<span>°C</span>
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
                      ${wr.main.temp}<span>°C</span>
                    </td>
                  </tr>
                  <tr class="weather-right__items">
                    <td class="weather-right__item">Wind</td>
                    <td class="weather-right__item weather-right__wind-speed">
                      ${wr.wind.speed} m/s
                    </td>
                  </tr>
                  <tr class="weather-right-card__items">
                    <td class="weather-right__item">Humidity</td>
                    <td class="weather-right__item weather-right__humidity">
                      ${wr.main.humidity}%
                    </td>
                  </tr>  
                  <tr class="weather-right-card__items">
                    <td class="weather-right__item">Pressure</td>
                    <td class="weather-right__item weather-right__pressure">
                      ${wr.main.pressure} hPa
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-right__footer widget-right__footer--brown">
        <div class="widget-right__layout">
          <a href="https://openweathermap.org/" target="_blank" class="widget-right__link"
            >OpenWeatherMap</a
          >
          <div class="widget-right__date">
            ${new Date(wr.dt * 1000).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>  
    `

  container.childNodes[0] ? container.childNodes[0].remove() : null
  container.appendChild(weather_elem)
}

class WidgetButton extends HTMLElement {
  constructor() {
    super()
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    let style = document.createElement('style')
    style.textContent = `
        .wrapper {          
          justify-content: center;
          padding-top: 100px;          
          width: 100%;
          padding: 20px;    
          border-radius: 5px;
          margin: 0 10px;
          box-sizing: border-box;
          display: flex;       

        }

        button {
          padding: 20px;
          background: linear-gradient(90deg, #ffe319 0%, #feb326 100%);          
          border: 2px solid #fff;
          border-radius: 5px;
          box-sizing: border-box;
          margin: 0 10px;
          cursor: pointer;              
    
        }

        button:hover {
          background: linear-gradient(180deg, #ffe319 0%, #feb326 100%);
          text-shadow: 1px 1px 1px orange, 0 0 2em red;
          color: white;     
          transition: text-shadow 0.3s ease-in-out;        
          
        }
    `

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(style)
    this.shadow.appendChild(wrapper)

    this.weatherRequestButton = document.createElement('button')
    this.weatherRequestButton.innerText = `Get Weather`
    this.onclick = event => get_weather_by_name(widget1, 'Kharkiv')
    wrapper.appendChild(this.weatherRequestButton)
  }
}
customElements.define('widget-button', WidgetButton)

let getWeatherByNameButton = document.createElement('widget-button')
document.body.appendChild(getWeatherByNameButton)
