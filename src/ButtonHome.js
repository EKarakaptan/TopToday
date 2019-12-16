class HomeButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="home" title="Home">
      <h4 class="fas fa-home m-0"></h4>
    </a>
    `
    this.appendChild(wrapper)
    let widget = getElem('#widget_1')

    this.onclick = event => {
      get_weather_by_name(widget, 'home-button', 'Kharkiv')
    }
  }
}
customElements.define('home-button', HomeButton)
