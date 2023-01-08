class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        margin-top: 50px;
        padding: 50px;
        text-align: center;
      }
      
      .search-container > .search {
        border: none;
        border-radius: 8px;
        padding: 12px 18px;
        color: #2e3e5d;
        background-color: #b8b5ff;
      }
      
      .search-container > .button {
        margin: 8px;
        border: none;
        border-radius: 8px;
        padding: 12px 18px;
        cursor: pointer;
        color: white;
        background-color: #7a86b6;
        transition: all 0.3s ease 0s;
      }
      
      .search-container > .button:hover {
        background-color: #495c83;
        box-shadow: 0px 6px 28px 2px rgba(0, 0, 0, 0.2);
      }
      </style>
      
  <div id="search-container" class="search-container">
    <p id="search" style="margin-bottom:100px;"></p>
    <h1>Temukan Beragam Berita Menarik</h1>
    <p>Yang sedang Trend dan Populer saat ini</p>
    <input class="search" type="text" placeholder="Temukan berita..." id="searchElement">
    <input class="button" id="searchButtonElement" type="submit" value="Cari">
  </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
