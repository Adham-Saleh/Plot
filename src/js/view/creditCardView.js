import View from "./view.js";

class CreditCardView extends View {
  _parentElemnt = document.querySelector(".container");

  _frontCreditCard = document.querySelector(".front-credit-card");
  _backCreditCard = document.querySelector(".back-credit-card");

  constructor() {
    super();
    this._addHandlerRotateCreditCard();
  }

  _addHandlerRotateCreditCard() {
    this._parentElemnt.addEventListener("click", () => {
      this._frontCreditCard.classList.toggle("hidden");
      this._backCreditCard.classList.toggle("hidden");
    });
  }
}

export default new CreditCardView();
