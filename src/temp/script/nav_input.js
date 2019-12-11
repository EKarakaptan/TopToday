const nav_input = document.createElement("template");

nav_input.innerHTML = `
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
`;

customElements.define(
  "nav-input",
  class extends HTMLElement {
    constructor() {
      super();
      let x = document.createElement("div");
      nav_city_input.appendChild(x);
      x.appendChild(nav_input.content.cloneNode(true));
    }
  }
);

document.createElement("nav-input");
