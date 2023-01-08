import "../component/article-list";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const articleListElement = document.querySelector("article-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchArticle(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    articleListElement.articles = results;
  };

  const fallbackResult = (message) => {
    articleListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
