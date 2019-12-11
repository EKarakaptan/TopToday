class NavElement extends HTMLElement {
  constructor() {
    super();
    this.awesome_link2 = document.createElement("link");
    this.awesome_link2.rel = "stylesheet";
    this.awesome_link2.href =
      "https://kit-free.fontawesome.com/releases/latest/css/free.min.css";
    this.awesome_link2.media = "all";

    this.bootstrap_link1 = document.createElement("link");
    this.bootstrap_link1.rel = "stylesheet";
    this.bootstrap_link1.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    this.bootstrap_link1.integrity =
      "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
    this.bootstrap_link1.crossOrigin = "anonymous";

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(this.awesome_link2);
    this.shadow.appendChild(this.bootstrap_link1);
  }
}
customElements.define("nav-element", NavElement);

class NavButton extends NavElement {
  constructor(id, fa_icon, title) {
    super();
    let custom_elem = document.createElement("a");
    custom_elem.className = "navbar-brand text-light m-auto";
    custom_elem.id = id;
    custom_elem.innerHTML = fa_icon;
    custom_elem.title = title;

    custom_elem.onclick = function(event) {
      let ID = event.target.parentNode.id;
      let startTime = new Date().valueOf();
      history.push({ ID, startTime });
      localStorage.setItem("history", JSON.stringify(history));
      event.target.parentNode.innerHTML =
        '<i class="fas fa-circle-notch fa-spin"></i>';
    };

    this.shadow.appendChild(custom_elem);
  }

  async setIcon(fa_icon) {
    console.log((this.shadow.querySelector("a").innerHTML = fa_icon));
  }
}
customElements.define("nav-button", NavButton);

(function create_home_button() {
  let nav_home = new NavButton("home", `<i class="fas fa-home"></i>`, `Home`);
  nav_home_button.appendChild(nav_home);
  nav_home_button.onclick = function(e) {
    e.stopPropagation();
    get_weather_by_name(widget_1, "Kharkiv");
    document.getElementById("carousel1").innerHTML = null;
    news_request("UA", "general", "", "carousel1");
    nav_home.setIcon(`<i class="fas fa-home"></i>`);
  };
})();

(function create_location_button() {
  let nav_location = new NavButton(
    "location",
    `<i class="fas fa-location-arrow"></i>`,
    `Current Location`
  );
  nav_location_button.appendChild(nav_location);
  nav_location_button.onclick = function(e) {
    e.stopPropagation();
    function success(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      get_weather_by_coord(widget_1, lat, lon);
    }
    error = () => console.log("Unable to retrieve your location");
    navigator.geolocation
      ? console.log("Locating…")
      : console.log("Geolocation is not supported by your browser");
    navigator.geolocation.getCurrentPosition(success, error);
    nav_location.setIcon(`<i class="fas fa-location-arrow"></i>`);
  };
})();

(function create_random_button() {
  let nav_random = new NavButton(
    "random",
    `<i class="fas fa-globe"></i>`,
    `Random City`
  );
  nav_random_button.appendChild(nav_random);
  nav_random_button.onclick = function(event) {
    console.log(event.target);
    // event.stopPropagation();
    // nav_random_button.onclick = event => {
    event.stopPropagation();
    rand = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    };
    let lat = rand(-90, 90);
    let lon = rand(-180, 180);
    get_weather_by_coord(widget_2, lat, lon);

    // document.getElementById("carousel2").innerHTML = null;
    // news_request(country, "general", "", "carousel2");
    // new HistoryItem(city, country, id, temp);
    // nav_random.setIcon(`<i class="fas fa-globe"></i>`);
  };
})();
