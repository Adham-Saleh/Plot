import View from "./view.js";

class CardView extends View {
  _parentElement = document.querySelector(".amer-jr");

  constructor() {
    super();
    this._addHandlerCloseCard();
  }

  _addHandlerCloseCard() {
    this._parentElement.addEventListener("click", (e) => {
      this._parentElement.classList.toggle("filter");
    });
  }
}

export default new CardView();
