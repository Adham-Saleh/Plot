import View from "./view.js";

class FormView extends View {
  _parentElement = document.querySelector(".answer-form");

  constructor() {
    super();
    this.addHandlerSubmitAnswers();
    this.addHandlerRestartBtn();
  }

  addHandlerSubmitAnswers(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const userAnswers = [...new FormData(this)];
      const answers = Object.fromEntries(userAnswers);
      handler(answers);
    });
  }

  addHandlerRestartBtn() {
    this._parentElement.addEventListener("click", function (e) {
      const restBtn = e.target.closest(".restart");
      if (!restBtn) return;
      window.location.reload();
    });
  }
}

export default new FormView();
