async function news_request(news_country, news_category, key, container) {
    let news_url = `https://newsapi.org/v2/top-headlines?q=${key}&country=${news_country}&category=${news_category}&apiKey=28509d92c9744a5da35e5ad1ffa12635`;
    fetch(news_url)
        .then(response => response.json())
        .then(response => {
            response.articles.forEach(element => {
                createNews(element, container);
                document.getElementById(container).childNodes[0].className =
                    "carousel-item active";
            });
        });
}

function createNews(news, container) {
    let news_elem = document.createElement("div");
    news_elem.className = "carousel-item";
    news_elem.setAttribute("data-interval", 8000);
    news_elem.innerHTML = `
    <h5 class="card-title">${news.title}</h5>
    <p class="card-text">${news.description}</p>
    <div class="row">
        <div class="col-6">
            <a href="${news.url}">
                <img src="${news.urlToImage}" class="card-img-top shadow rounded" width="200">
            </a>
        </div>
        <div class="col-6">
            <h6 class="Source Title font-italic">source: ${news.source.name}</h6>
        </div>
    </div>
`;
    document.getElementById(container).appendChild(news_elem);
}