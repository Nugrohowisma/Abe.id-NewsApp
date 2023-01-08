import "./article-item.js";

class ArticleList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";

    this._articles.forEach((article) => {
      const articleItemElement = document.createElement("article-item");
      articleItemElement.article = article;
      this.shadowDOM.appendChild(articleItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("article-list", ArticleList);
