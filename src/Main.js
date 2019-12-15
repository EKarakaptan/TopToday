class Main extends HTMLElement {
  constructor() {
    super()
  }

  insertComponent(query_selector, element) {
    this.querySelector(query_selector).appendChild(
      document.createElement(element)
    )
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <div id="navbar" class="bg-light sticky-top">
        <nav class="navbar navbar-dark bg-dark p-0">
            <div class="container p-0">
                <div id="nav_menu_button" class="nav-item dropdown pl-2"></div>
                <div id="nav_news_icon" class="navbar text-light m-0 p-0"></div>
                <a id="nav_home_button" class="navbar-brand text-light m-auto"></a>
                <a id="nav_location_button" class="navbar-brand text-light m-auto"></a>
                <a id="nav_random_button" class="navbar-brand text-light m-auto"></a>
                <form id="nav_city_input"></form>
                <img id="avatar" class="rounded float-right m-auto" width="40" hidden="true"></img>
                <div id="nav_auth_button" class="nav-item dropdown m-auto"></div>
            </div>
        </nav>
    </div>

    <div id="regform" class="container bg-light d-flex justify-content-around pt-1"></div>

    <div id="widgets_block" class="container bg-light pt-1">
        <div class="card-deck">
            <div class="card shadow-sm">
                <div class="card-body mb-2 p-2 rounded" align="right">
                    <div id="widget_1"></div>
                    <div class="card-body p-1">
                        <div id="carousel1_nav" class="carousel slide" data-ride="carousel">
                            <div id="carousel1" class="carousel-inner"></div>
                            <a class="carousel-control-prev" href="#carousel1_nav" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel1_nav" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm">
                <div id="anchor2"></div>
                <div class="card-body mb-2 p-2 rounded" >
                    <div id="widget_2"></div>
                    <div class="card-body p-1">
                        <div id="carousel2_nav" class="carousel slide" data-ride="carousel">
                            <div id="carousel2" class="carousel-inner"></div>
                            <a class="carousel-control-prev" href="#carousel2_nav" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel2_nav" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container bg-light pt-2">
        <div id="history_block" class="container-fluid card-container">
            <h5 class="card-title">Recent places</h5>
            <div id="recent_places" style="height: 150px" class="row text-center flex-nowrap flex-wrap rounded">
            </div>
        </div>
    </div>
    
    <div id="footer" class="container bg-light">
        <footer class="page-footer">
            <div class="footer-copyright text-center py-3 text-muted">
                ©TopToday - Eugene Karakaptan - A-Level FEA15(JS) 2019 powered by NewsAPI.org
            </div>
        </footer>
    </div>
    `
    this.appendChild(wrapper)
    this.insertComponent('#nav_menu_button', 'menu-component')
    this.insertComponent('#nav_home_button', 'home-button')
    this.insertComponent('#nav_location_button', 'location-button')
    this.insertComponent('#nav_random_button', 'random-button')
    this.insertComponent('#nav_city_input', 'input-component')
    this.insertComponent('#nav_auth_button', 'auth-button')
  }

  disconnectedCallback() {
    // браузер вызывает этот метод при удалении элемента из документа
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
  }

  static get observedAttributes() {
    return [
      /* массив имён атрибутов для отслеживания их изменений */
    ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // вызывается при изменении одного из перечисленных выше атрибутов
  }

  adoptedCallback() {
    // вызывается, когда элемент перемещается в новый документ
    // (происходит в document.adoptNode, используется очень редко)
  }
}
customElements.define('main-element', Main)
document.body.appendChild(document.createElement('main-element'))

getElem = elemSelector =>
  document.querySelector('main-element').querySelector(elemSelector)

const data = {
  city1: 'Kharkiv',
  country1: 'UA',
  city2: '',
  country2: '',
  category: 'general',
  keyword: ''
}
