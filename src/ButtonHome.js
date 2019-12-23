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

    let style = document.createElement('style')
    style.textContent = `
      .fas{          
          cursor: pointer           
      }

      .fas :hover {
          color: gold;
          transform: scale(1.5);                              
          transition: color 0.1s ease-in-out         
      }
      `

    this.appendChild(style)
    this.appendChild(wrapper)

    let widget = getElem('#widget_1')

    this.onclick = event => {
      get_weather_by_name(widget, 'home-button', 'Kharkiv')
    }
  }
}
customElements.define('home-button', HomeButton)
