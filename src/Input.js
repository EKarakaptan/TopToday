const input = document.createElement('template')
input.innerHTML = `
<form class="input-group pl-3 pb-1 pt-1">
<input type="text" class="form-control border-right-0" id="Req" placeholder="weather in..." aria-label="Search" aria-describedby="button-addon2" />
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
class Input extends HTMLElement {
  constructor() {
    super()
    let elem = document.createElement('div')

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(elem)

    elem.appendChild(input.content.cloneNode(true))
  }
}

customElements.define('input-component', Input)
