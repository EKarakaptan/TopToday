async function getNews(country, category, key, container) {
  let news_url = `https://newsapi.org/v2/top-headlines?q=${key}&country=${country}&category=${category}&apiKey=28509d92c9744a5da35e5ad1ffa12635`
  fetch(news_url)
    .then(response => response.json())
    .then(response => {
      response.articles.forEach(news => {
        createNews(news, container)
        document
          .getElementsByTagName('main-component')[0]
          .shadow.querySelector(container).childNodes[0].className =
          'carousel-item active'
      })
    })
}
