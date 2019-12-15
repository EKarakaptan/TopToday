class LocationButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="location" title="Current Location"><h3 class="fas fa-location-arrow m-0"></h3></a>
    `
    this.appendChild(wrapper)
    let widget = getElem('#widget_1')

    this.onclick = event => {
      function success(position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        get_weather_by_coord(widget, lat, lon)
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
