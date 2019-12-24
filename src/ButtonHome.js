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
      #home {                   
          cursor: pointer           
      }

      #home :hover {
          color: #ffbf3c;          
          transform: scale(1.15);                              
          transition: transform 0.05s ease-in-out         
      }
      `

    this.appendChild(wrapper)
    this.appendChild(style)
    let widget = getElem('#widget_1')

    this.onclick = event => {
      get_weather_by_name(widget, 'home-button', 'Kharkiv')
    }
  }
}
customElements.define('home-button', HomeButton)