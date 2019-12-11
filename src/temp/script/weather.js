let addWidget = function(cityid, containerid) {
  window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
  window.myWidgetParam.push({
    id: 15,
    cityid: cityid,
    appid: "e5986c1eac34b648189cb6f1a03886b9",
    units: "metric",
    containerid: containerid
  });
  (function() {
    var script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
  })();
};

// nav_random_button.onclick = event => {
//   event.stopPropagation();
//   rand = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
//   };
//   let lat_r = rand(-90, 90);
//   let lon_r = rand(-180, 180);
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat_r}&lon=${lon_r}&APPID=e5986c1eac34b648189cb6f1a03886b9`
//   )
//     .then(response => response.json())
//     .then(response => {
//       let country = response.sys.country;
//       let city = response.name;
//       let id = response.id;
//       let temp = `${Math.round(response.main.temp - 273.15)}℃`;
//       if (id === 0) {
//         setTimeout(() => event.target.click(), 1000);
//         return;
//       }
//       document.querySelector("#container-widget_2")
//         ? document.querySelector("#container-widget_2").remove()
//         : null;
//       addWidget(id, "widget_2");
//       document.getElementById("carousel2").innerHTML = null;
//       news_request(country, "general", "", "carousel2");
//       new HistoryItem(city, country, id, temp);
//       nav_random.setIcon(`<i class="fas fa-globe"></i>`);
//     })
//     .catch(err => console.log(err));
// };
