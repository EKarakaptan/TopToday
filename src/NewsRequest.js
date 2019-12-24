async function getNews(country, category, key, container) {
  let news_block = getElem(container)
  news_block ? (news_block.innerHTML = '') : null
  let news_url = `https://newsapi.org/v2/top-headlines?q=${key}&country=${country}&category=${category}&apiKey=28509d92c9744a5da35e5ad1ffa12635`

  let empty_news = {
    description: 'No news related to this country',
    url: '#url',
    urlToImage: 'favicon.png',
    source: { name: 'NewsAPI.org' }
  }
  fetch(news_url)
    .then(response => response.json())
    .then(response => {
      if (response.totalResults === 0) {
        createNews(empty_news, container)
        getElem(container).childNodes[0].className =
          'carousel-item active'
        return
      }
      response.articles.forEach(news => {
        createNews(news, container)
        getElem(container).childNodes[0].className =
          'carousel-item active'
      })
    })
}
