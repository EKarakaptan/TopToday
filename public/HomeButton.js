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
  state = {
    name: wr.name,
    country: wr.sys.country,
    description: wr.weather[0].description,
    icon: wr.weather[0].icon,
    temp: Math.round(wr.main.temp),
    wind: wr.wind.speed,
    humidity: wr.main.humidity,
    pressure: Math.round(wr.main.pressure * 0.75),
    time: new Date(wr.dt * 1000).toLocaleTimeString()
  }

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
            <h2 class="widget-right__title">${state.name}, ${state.country}</h2>
            <p class="widget-right__description">${state.description}</p>
          </div>
        </div>
        <img
          src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${state.icon}.png"
          width="128"
          height="128"
          alt="Weather in ${state.name}, ${state.country}"
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
      <div class="widget-right__footer widget-right__footer--brown">
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
  weather_elem.parentNode.setAttribute('country', state.country)
}

class HomeButton extends HTMLElement {
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
    this.weatherRequestButton.innerText = `Home`

    this.onclick = event => {
      get_weather_by_name(
        document
          .getElementsByTagName('main-component')[0]
          .shadow.querySelector('#widget_1'),
        'Kharkiv'
      )
      getNews('UA', 'general', '', '#carousel1')
    }
    wrapper.appendChild(this.weatherRequestButton)
  }
  connectedCallback() {
    // this.click()
  }
}
customElements.define('home-button', HomeButton)
