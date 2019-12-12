class LocationButton extends HTMLElement {
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
    this.weatherRequestButton.innerText = `Location`

    this.onclick = event => {
      function success(position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        get_weather_by_coord(
          document
            .getElementsByTagName('main-component')[0]
            .shadow.querySelector('#widget_1'),
          lat,
          lon
        )
        getNews('UA', 'general', '', '#carousel1')
      }

      function error() {
        console.log('Unable to retrieve your location')
      }
      navigator.geolocation
        ? console.log('Locating…')
        : console.log('Geolocation is not supported by your browser')
      navigator.geolocation.getCurrentPosition(success, error)
    }

    wrapper.appendChild(this.weatherRequestButton)
  }
  connectedCallback() {
    this.click()
  }
}
customElements.define('location-button', LocationButton)
