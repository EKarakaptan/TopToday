function createNews(news, container) {
  state = {
    title: news.title,
    description: news.description,
    url: news.url,
    urlToImage: news.urlToImage,
    source: news.source.name ? news.source.name : news.source.id
  }

  let news_elem_content = `
      <h5 class="card-title">${state.title}</h5>
      <p class="card-text">${state.description}</p>
      <div class="row">
          <div class="col-6">
              <a href="${state.url}">
                  <img src="${state.urlToImage}" class="card-img-top shadow rounded" width="200">
              </a>
          </div>
          <div class="col-6">
              <h6 class="Source Title font-italic">source: ${state.source}</h6>
          </div>
      </div>
    `
  let news_elem = document.createElement('div')

  news_elem.innerHTML = news_elem_content
  news_elem.className = 'carousel-item'
  news_elem.setAttribute('data-interval', 20000)

  getElem(container).appendChild(news_elem)
}
