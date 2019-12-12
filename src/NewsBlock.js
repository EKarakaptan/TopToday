function createNews(news, container) {
  let news_elem = document.createElement('div')
  news_elem.className = 'carousel-item'
  news_elem.setAttribute('data-interval', 8000)
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
    `
  document
    .getElementsByTagName('main-component')[0]
    .shadow.querySelector(container)
    .appendChild(news_elem)
}
