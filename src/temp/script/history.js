let history = [];

class HistoryItem extends HTMLElement {
    constructor(city, country, id, temp) {
        super();
        let item = document.createElement("div");
        item.className = "col-3 p-1";
        item.city = city;
        item.country = country;
        item.name = id;
        item.innerHTML = `
      <a href="#">
      <div class="thumbnail text-center shadow-lg">
        <img src="https://picsum.photos/id/6/300/200" alt="recent_place" class="rounded img-responsive">
          <div class="caption">
          <h3 id="h_temp" class="text-weight-bold text-right text-white m-0 p-2"><mark class="p-1 rounded"></mark></h3>  
          <h6 class="text-weight-bold text-dark bg-warning">${city}-${country}</h6>
          </div>
      </div>
    </a>
      `;

        let img = item.getElementsByTagName("img")[0];
        img.onclick = function(event) {
            document.querySelector("#container-widget_2") ?
                document.querySelector("#container-widget_2").remove() :
                null;
            addWidget(item.name, "widget_2");
        };
        recent_places.appendChild(item);
        item.getElementsByTagName("mark")[0].innerText = temp;
    }
}
customElements.define("history-item", HistoryItem);