class DataSource {
  static searchArticle(keyword) {
    return fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&apiKey=1bd79c5b80414e6696dc16e191fc0876`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.articles) {
          return Promise.resolve(responseJson.articles);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
