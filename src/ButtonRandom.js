class RandomButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="random" title="Random City"><i class="fas fa-globe"></i></a>
    `
    let widget = getElem('#widget_2')
    this.appendChild(wrapper)

    this.onclick = event => {
      function rand(min, max) {
        return Math.round(Math.random() * (max - min) + min)
      }
      let lat = rand(-90, 90)
      let lon = rand(-180, 180)
      let widget = getElem('#widget_2')
      get_weather_by_coord(widget, lat, lon)
    }

    this.click()
  }
}

customElements.define('random-button', RandomButton)
