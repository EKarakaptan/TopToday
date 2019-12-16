const history = []

class HistoryItem extends HTMLElement {
  constructor(city, country, id, temp, icon) {
    super()
    let item = document.createElement('div')
    item.className = 'col-3 p-1'
    item.city = city
    item.country = country
    item.name = id
    item.innerHTML = `
      <a href="#">
      <div class="thumbnail text-center shadow rounded">
        <img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${state.icon}.png" alt="recent_place" class="rounded img-responsive">
          <div class="caption">
          <h3 id="h_temp" class="text-weight-bold text-right text-white m-0 p-2"><mark class="p-1 rounded"></mark></h3>  
          <h6 class="text-weight-bold text-dark bg-warning">${city}-${country}</h6>
          </div>
      </div>
      </a>
      `
    let style = document.createElement('style')
    style.textContent = `
      img {
      max-width: 100%;
      position: relative;
      top: -18px;
      left: -15px;
      }

      .thumbnail {
          position: relative;          
          background: linear-gradient(25deg, #d9ecef 0%, #83c0ca 100%);           
      }

      .caption {
          position: absolute;
          top: 40%;
          left: 0;
          width: 100%;
          Opacity: 80%
      }

      .card-container>.row {
          overflow-x: auto;
      }
      `
    // let img = item.getElementsByTagName('img')[0]
    // img.onclick = function(event) {
    //   document.querySelector('#container-widget_2')
    //     ? document.querySelector('#container-widget_2').remove()
    //     : null
    //   addWidget(item.name, 'widget_2')
    // }
    getElem('#recent_places').appendChild(item)
    getElem('#recent_places').appendChild(style)
    item.getElementsByTagName('mark')[0].innerText = `${temp}°C`
  }
}
customElements.define('history-item', HistoryItem)
