class HomeButton extends HTMLElement {
  constructor() {
    super()
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    let widget1 = document
      .getElementsByTagName('main-component')[0]
      .shadow.querySelector('#widget_1')

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
    this.weatherRequestButton.innerText = `Home`

    this.onclick = event => {
      get_weather_by_name(widget1, 'Kharkiv')
      getNews('UA', 'general', '', 'carousel1')
    }
    wrapper.appendChild(this.weatherRequestButton)
  }
  connectedCallback() {
    // this.click()
  }
}
customElements.define('home-button', HomeButton)
