async function getNews(country, category, key, container) {
  let news_block = document
    .getElementsByTagName('main-component')[0]
    .shadow.querySelector(container)
  news_block ? (news_block.innerHTML = '') : null
  let news_url = `https://newsapi.org/v2/top-headlines?q=${key}&country=${country}&category=${category}&apiKey=28509d92c9744a5da35e5ad1ffa12635`

  empty_news = {
    0: {
      title: `No news related to ${country} `,
      description: `No news related to ${country} `,
      url: '#',
      urlToImage: '#',
      source: { name: `No news related to ${country} ` }
    }
  }

  fetch(news_url)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      response.articles.length === 0
        ? createNews(empty_news, container)
        : response.articles.forEach(news => {
            createNews(news, container)
            document
              .getElementsByTagName('main-component')[0]
              .shadow.querySelector(container).childNodes[0].className =
              'carousel-item active'
          })
    })
}
