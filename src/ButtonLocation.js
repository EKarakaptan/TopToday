class LocationButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="location" title="Current Location"><i class="fas fa-location-arrow"></i></a>
    `
    let widget = getElem('#widget_1')
    this.appendChild(wrapper)

    this.onclick = event => {
      function success(position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let widget1 = getElem('#widget_1')
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
