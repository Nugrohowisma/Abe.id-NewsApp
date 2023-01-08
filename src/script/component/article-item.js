class ArticleItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set article(article) {
    this._article = article;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .card {
        border-radius: 10px;
        background-image: url("${this._article.urlToImage}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #ffffff;
        border: 3px solid #ffffff;
        box-shadow: 0px 6px 28px 2px rgba(0, 0, 0, 0.04);
        color: black;
        transition: all 0.3s ease 0s;
      }
      
      .card:hover {
        border-radius: 16px;
        background-color: #ffffff;
        border: 3px solid #495c83;
        box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.051);
      }

      .card-info {
        margin : 35% 20px 20px 20px;
        padding: 5%;
        background: rgb(255,255,255);
      }

      .card-info > p {
        font-size: 10px;
      }
      
      .card-info > a {
        font-size: 10px;
        text-decoration: none;
        color: rgb(101, 101, 101);
      }
      
      .card-info > h6 {
        text-align: justify;
      }
      </style>

      <div class="card">
      <div class="card-info">
      <h6>Source : ${this._article.source.name}</h6> 
      <p>Update : ${this._article.publishedAt}</p>
      <h6>${this._article.title}</h6>
      <h6><a href="${this._article.url}">${this._article.description}</a></h6>
      </div>
      </div>
    `;
  }
}

customElements.define("article-item", ArticleItem);
