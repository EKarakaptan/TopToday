class HomeButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="home" title="Home"><i class="fas fa-home"></i></a>
    `
    let widget = getElem('#widget_1')
    this.appendChild(wrapper)

    this.onclick = event => {
      get_weather_by_name(widget, 'Kharkiv')
    }
  }
}
customElements.define('home-button', HomeButton)
