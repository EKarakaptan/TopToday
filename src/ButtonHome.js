class HomeButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="home" title="Home"><h3 class="fas fa-home m-0"></h3></a>
    `
    this.appendChild(wrapper)
    let widget = getElem('#widget_1')
    console.log(widget.id[widget.id.length - 1])

    this.onclick = event => {
      get_weather_by_name(widget, 'Kharkiv')
    }
  }
}
customElements.define('home-button', HomeButton)
