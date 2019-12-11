async function get_weather_by_coord(container, lat, lon) {
  let weather_url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&units=metric&APPID=e5986c1eac34b648189cb6f1a03886b9`
  fetch(weather_url)
    .then(response => response.json())
    .then(response => {
      if (response.message !== 'accurate') {
        rand = (min, max) => Math.round(Math.random() * (max - min) + min)
        let lat = rand(-90, 90)
        let lon = rand(-180, 180)
        setTimeout(() => get_weather_by_coord(container, lat, lon), 1100)

        return
      }
      createWidget(container, response.list[0])
      console.log(response.list[0].name)
    })
    .catch(err => console.log(err))
}

class RandomButton extends HTMLElement {
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
    this.weatherRequestButton.innerText = `Random`

    this.onclick = event => {
      function rand(min, max) {
        return Math.round(Math.random() * (max - min) + min)
      }
      let lat = rand(-90, 90)
      let lon = rand(-180, 180)
      get_weather_by_coord(
        document
          .getElementsByTagName('main-component')[0]
          .shadow.querySelector('#widget_2'),
        lat,
        lon
      )
    }
    wrapper.appendChild(this.weatherRequestButton)
  }
}
customElements.define('random-button', RandomButton)
