let news_category = "general";
let country_home = "ua";
let country1 = "ua";
let country2 = "gb";
let city_home = "706483"; //kharkiv
let city1 = "706483"; //kharkiv
let city2 = "2639189"; //romsey
let lat = 0; //(-90 +90)
let lon = 0; //(-180 +180)
//let key = keyword.value;
//Добавление виджета в контейнер
let addWidget = function(cityid, containerid, style) {
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
//обработчик радио в меню
let checkbox = document.body.querySelector(`#Cat_listener`);
checkbox.addEventListener("change", function() {
    news_category = `${event.target.value}`;
    document.body.querySelector(`#cat_ind`).innerHTML =
        event.target.nextSibling.nextSibling.innerHTML;
    key = keyword.value;
    news_request(country1, 1, news_category, key);
    news_request(country2, 2, news_category, key);
    //console.log(event, news_category, key);
});

//----Загрузка со старта

// addWidget(city_home, "widget_1");
// news_request(country_home, 1, news_category, key);
// addWidget(city2, "widget_2");
// news_request(country2, 2, news_category, key);

//оригинальный класс виджета: widget-right weather-right--type1 widget-right--brown
//меняем на: widget-center weather-center--type1 widget-right--brown shadow-lg mb-2 rounded
//
//change_class = () => {
//    arr = document.body.getElementsByClassName('widget-right weather-right--type1 widget-right--brown')
//    for (i = 0; i < arr.length; i++) {
//        arr[i].className = 'widget-center weather-center--type1 widget-right--brown shadow-lg mb-2 rounded'
//    }
//}
//Обработчик на кнопке Random
rand = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};
random.onclick = async() => {
    lat_r = rand(-90, 90);
    lon_r = rand(-180, 180);
    //    let interval = setInterval(function () {
    //    if (id2 > 0) {
    //    return
    //    }i++
    //    console.log(i)
    //    },1000)
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat_r}&lon=${lon_r}&APPID=e5986c1eac34b648189cb6f1a03886b9`
    ).then(response => {
        response.json().then(response => {
            country2 = response.sys.country;
            city2 = response.name;
            id2 = response.id;
            lat2 = response.coord.lat;
            lon2 = response.coord.lon;
            timezone2 = response.timezone;
            // console.log(
            //   lat_r,
            //   lon_r,
            //   response,
            //   country2,
            //   id2,
            //   city2,
            //   lat2,
            //   lon2,
            //   timezone2
            // );
            if (id2 > 0) {
                document.querySelector("#err").innerHTML =
                    '<i class="fas fa-check"></i>';
                document.querySelector("#Req").innerHTML = city2;
                document.querySelector("#err").title = `ID: ${id2}
                ${city2}, ${country2}
                latitude: ${lat2}°
                Longitude: ${lon2}°
                timezone: ${timezone2}`;
                document.querySelector("#container-widget_2").remove();
                addWidget(id2, "widget_2");
                news_request(country2, 2, news_category, key);
                return;
            }
            random.click();
        });
    });
};
//Обработчик событий на кнопке Current Place
current.onclick = () => {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
    mapLink.href = "";
    mapLink.textContent = "";
    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        status.textContent = "";
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Lat: ${Math.round(latitude)}°, Lon: ${Math.round(
      longitude
    )}°`;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=e5986c1eac34b648189cb6f1a03886b9`
        ).then(response => {
            if (response.status >= 400) {
                document.querySelector("#err").innerHTML =
                    '<i class="fas fa-exclamation-triangle"></i>';
                document.querySelector("#err").title = response.statusText;
                return;
            }
            document.querySelector("#err").innerHTML = '<i class="fas fa-check"></i>';
            response.json().then(response => {
                country1 = response.sys.country;
                city1 = response.name;
                id1 = response.id;
                lat1 = response.coord.lat;
                lon1 = response.coord.lon;
                timezone1 = response.timezone;
                document.querySelector("#err").title = `ID: ${id1}
                        ${city1}, ${country1}
                        latitude: ${lat1}°
                        Longitude: ${lon1}°
                        timezone: ${timezone1}`;
                document.querySelector("#container-widget_1").remove();
                addWidget(id1, "widget_1");
                news_request(country1, 1, news_category, key);
                // console.log(
                //   latitude,
                //   longitude,
                //   response,
                //   country1,
                //   id1,
                //   city1,
                //   lat1,
                //   lon1,
                //   timezone1
                // );
            });
        });
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }
    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
};
//Функция запроса по названию города
async function request() {
    let req = Req.value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${req}&APPID=e5986c1eac34b648189cb6f1a03886b9`
    ).then(response => {
        if (response.status >= 400) {
            document.querySelector("#err").innerHTML =
                '<i class="fas fa-exclamation-triangle"></i>';
            document.querySelector("#err").title = response.statusText;
            return;
        }
        document.querySelector("#err").innerHTML = '<i class="fas fa-check"></i>';
        response.json().then(response => {
            country2 = response.sys.country;
            city2 = response.name;
            id2 = response.id;
            lat2 = response.coord.lat;
            lon2 = response.coord.lon;
            timezone2 = response.timezone;
            document.querySelector("#err").title = `ID: ${id2}
                        ${city2}, ${country2}
                        latitude: ${lat2}°
                        Longitude: ${lon2}°
                        timezone: ${timezone2}`;
            document.querySelector("#container-widget_2").remove();
            addWidget(id2, "widget_2");
            news_request(country2, 2, news_category, key);
            //console.log(req, response, country2, id2, city2, lat2, lon2, timezone2);
        });
    });
}
//Обработчик событий на кнопе Go
go.onclick = () => {
    //console.log(Req, Req.value)
    if (!checkTxt(Req.value) || Req.value == "" || Req.value.length > 30) {
        Req.className = "form-control border-right-0 text-danger";
        document.querySelector("#err").innerHTML =
            '<i class="fas fa-exclamation-triangle"></i>';
        document.querySelector("#err").title = "Wrong input data";
    } else {
        Req.className = "form-control border-right-0 text-body";
        document.querySelector("#err").innerHTML = '<i class="fas fa-check"></i>';
        document.querySelector("#err").title = "input data ok";
        request();
        document.location.href = "#anchor2";
    }
};
//Обработчик на Input
Req.addEventListener("keyup", function(event) {
    if (!checkTxt(Req.value) || Req.value == "" || Req.value.length > 30) {
        Req.className = "form-control border-right-0 text-danger";
        document.querySelector("#err").innerHTML =
            '<i class="fas fa-exclamation-triangle"></i>';
        document.querySelector("#err").title = "Wrong input data";
    } else {
        Req.className = "form-control border-right-0 text-body";
        document.querySelector("#err").innerHTML = '<i class="fas fa-check"></i>';
        document.querySelector("#err").title = "input data ok";
    }
    if (event.key === "Enter") {
        event.preventDefault();
        request();
        document.location.href = "#anchor2";
    }
});
//Обработчик на кнопке Home
home.onclick = () => {
    document.querySelector("#container-widget_1").remove();
    addWidget(city_home, "widget_1");
    news_request(country_home, 1, news_category, key);
};
//Обработчик на индикаторе статуса запроса (сброс ввода)
err.onclick = () => {
    Req.value = "";
    err.innerHTML = '<i class="fas fa-chevron-left"></i>';
    err.title = "Clear";
};
//Текущее время
(startTime = () => {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    setTimeout("startTime()", 1000);
})()

Req.onclick = () => {
    Req.className = "form-control border-right-0 text-body";
};
checkTxt = str => {
    return /^[A-z]+$/.test(str);
    //return /^[a-zA-Z]+[,]{1}[\s]{1}[a-z]{2}$/.test(str)
    //return isNaN(str)
};
//Запрос на новости

//sources
//https://newsapi.org/v2/sources?apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/sources?language=en&apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/sources?language=en&country=us&apiKey=28509d92c9744a5da35e5ad1ffa12635

//headlines
//https://newsapi.org/v2/top-headlines?country=us&apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/top-headlines?q=trump&apiKey=28509d92c9744a5da35e5ad1ffa12635

//everything
//https://newsapi.org/v2/everything?q=bitcoin&apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/everything?q=apple&from=2019-08-29&to=2019-08-29&sortBy=popularity&apiKey=28509d92c9744a5da35e5ad1ffa12635
//https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=28509d92c9744a5da35e5ad1ffa12635

async function news_request(news_country, news_card, news_category, key) {
    let news_url = `https://newsapi.org/v2/top-headlines?q=${key}&country=${news_country}&category=${news_category}&apiKey=28509d92c9744a5da35e5ad1ffa12635`;
    fetch(news_url).then(response => {
        response.json().then(response => {
            for (i = 0; i < 5; i++) {
                let news_title = response.articles[i].title;
                let news_description = response.articles[i].description;
                let news_content = response.articles[i].content;
                let news_url = response.articles[i].url;
                let news_urltoimage = response.articles[i].urlToImage;
                let news_author = response.articles[i].source.name;
                console.log(news_country, news_card, news_category, key);
                document.querySelector(
                    `#news${news_card}_title${i}`
                ).innerHTML = news_title;
                document.querySelector(
                    `#news${news_card}_description${i}`
                ).innerHTML = news_description;
                document.querySelector(
                    `#news${news_card}_author${i}`
                ).innerHTML = `source: ${news_author}`;
                document.querySelector(
                    `#news${news_card}_img${i}`
                ).src = news_urltoimage;
                document.querySelector(`#news${news_card}_url${i}`).href = news_url;
            }
        });
    });
}