class Main extends HTMLElement {
  constructor() {
    super()
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
    />
    <div id="navbar" class="bg-light sticky-top">
        <nav class="navbar navbar-dark bg-dark p-0">
            <div class="container p-0">
                <div id="nav_news_button" class="nav-item dropdown pl-2"></div>
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

    <div id="widgets_block" class="container bg-light">
        <div class="row">
            <div class="col">
                <div class="container card shadow-sm mb-2 p-2 rounded" style="width: 90%;" align="right">
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

            <div class="col">
                <div id="anchor2"></div>
                <div class="container card shadow-sm mb-2 p-2 rounded" style="width: 90%">
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

    <div class="container bg-light">
        <div id="history_block" class="container-fluid card-container">
            <h5 class="card-title">Recent places</h5>
            <div id="recent_places" style="height: 221px" class="row text-center flex-nowrap flex-wrap rounded">
            </div>
        </div>
    </div>

    <div id="footer" class="container bg-light">
        <footer class="page-footer">
            <div class="footer-copyright text-center py-3 text-muted">
                ©TopToday - Eugene Karakaptan - A-Level FEA15 2019 powered by NewsAPI.org
            </div>
        </footer>
    </div>
    `
    let style = document.createElement('style')
    style.textContent = `
        .wrapper {          
          justify-content: center;
        }
    `
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(style)
    this.shadow.appendChild(wrapper)
  }

  insertComponent(query_selector, element) {
    this.shadow
      .querySelector(query_selector)
      .appendChild(document.createElement(element))
  }

  connectedCallback() {
    this.insertComponent('#nav_home_button', 'home-button')
    this.insertComponent('#nav_location_button', 'location-button')
    this.insertComponent('#nav_random_button', 'random-button')
  }
}

customElements.define('main-component', Main)
document.body.appendChild(document.createElement('main-component'))
