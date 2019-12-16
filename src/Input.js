class Input extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <form id="input_form" class="input-group pl-1 pb-1 ml-auto mr-auto">
    <input id="input_value" type="text" class="form-control border-right-0" placeholder="City name..." aria-label="Search" aria-describedby="button-addon2" />
    <div class="input-group-append warning">
        <p class="input-group-text bg-white text-warning" id="err" data-toggle="tooltip" data-placement="bottom" title="Clear">
            <i class="fas fa-chevron-left"></i>
        </p>
        <button class="btn btn-outline-warning" type="button" id="go">
            <i class="fas fa-search"></i>
        </button>
    </div>
    </form>
    `
    this.appendChild(wrapper)

    getElem('#input_form').onsubmit = event => {
      event.preventDefault()
      let city_request = event.target.querySelector('#input_value').value
      let widget = getElem('#widget_2')
      let arr_request = city_request.split(',')
      arr_request[0] ? (data.city2 = arr_request[0].trim()) : null
      arr_request[1] ? (data.country2 = arr_request[1].trim()) : null
      get_weather_by_name(widget, city_request)
    }
  }
}
customElements.define('input-component', Input)
