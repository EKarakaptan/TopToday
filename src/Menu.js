class Menu extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `    
    <div class="nav-item dropdown">
        <a class="navbar-brand text-warning" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-cloud-sun-rain"></i> TopToday
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
            <div id="News_selector">
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="business" id="c0" />
                    <label class="form-check-label" for="c0">
                        <i class="fas fa-wallet"></i> business
                    </label>
                </div>
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="entertainment" id="c1" />
                    <label class="form-check-label" for="c1">
                        <i class="fas fa-film"></i> entertainment
                    </label>
                </div>
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="general" id="c2" checked />
                    <label class="form-check-label" for="c2">
                        <i class="fas fa-flag"></i> general
                    </label>
                </div>
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="health" id="c3" />
                    <label class="form-check-label" for="c3">
                        <i class="fas fa-heartbeat"></i> health
                    </label>
                </div>
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="science" id="c4" />
                    <label class="form-check-label" for="c4">
                        <i class="fas fa-microscope"></i> science
                    </label>
                </div>
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="sports" id="c5" />
                    <label class="form-check-label" for="c5">
                        <i class="fas fa-football-ball"></i> sports
                    </label>
                </div>
                <div class="form-check form-check-inline dropdown-item text-light">
                    <input class="form-check-input" type="radio" name="category" value="technology" id="c6" />
                    <label class="form-check-label" for="c6">
                        <i class="fas fa-microchip"></i> technology
                    </label>
                </div>
            </div>            
            <div id='key' class="form-check form-check-inline dropdown-item p-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="keywords..."
                        aria-label="Text input with radio button" id="keyword" />
                </div>
            </div>            
        </div>
    </div>
    `
    this.appendChild(wrapper)

    getElem(`#News_selector`).onchange = event => {
      data.category = `${event.target.value}`
      getNews(
        data.country1,
        data.category,
        data.keyword,
        '#carousel1'
      )
      getNews(
        data.country2,
        data.category,
        data.keyword,
        '#carousel2'
      )
    }

    getElem(`#key`).onchange = event => {
      data.keyword = getElem(`#keyword`).value
      getNews(
        data.country1,
        data.category,
        data.keyword,
        '#carousel1'
      )
      getNews(
        data.country2,
        data.category,
        data.keyword,
        '#carousel2'
      )
    }
  }
}
customElements.define('menu-component', Menu)
