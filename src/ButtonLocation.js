class LocationButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="location" title="Current Location">
      <h4 class="fas fa-location-arrow m-0"></h4>
    </a>
    `
    let style = document.createElement('style')
    style.textContent = `
      #location {                   
          cursor: pointer           
      }

      #location :hover {
          color: #ffbf3c;
          transform: scale(1.15);                              
          transition: transform 0.05s ease-in-out         
      }
      `
    this.appendChild(wrapper)
    this.appendChild(style)

    let widget = getElem('#widget_1')

    this.onclick = event => {
      function success(position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        get_weather_by_coord(widget, lat, lon, 'location-button')
        wrapper.innerHTML = `
        <a class="navbar-brand text-light m-auto" id="location" title="Random City">
          <h4 class="fas fa-circle-notch fa-spin m-0 text-warning"></h4>
        </a>
        `
      }

      function error() {
        console.log('Unable to retrieve your location')
      }
      navigator.geolocation
        ? console.log('Locating…')
        : console.log('Geolocation is not supported by your browser')
      navigator.geolocation.getCurrentPosition(success, error)
    }

    this.click()
  }
}
customElements.define('location-button', LocationButton)
