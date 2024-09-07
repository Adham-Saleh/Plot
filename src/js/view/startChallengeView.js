import View from "./view.js";

class StartChallengeView extends View {
  _parentElement = document.querySelector("main");
  timer = this._parentElement.firstElementChild.lastElementChild;

  constructor() {
    super();
    this.addHandlerStartChallenge();
  }

  updateTimer(time) {
    this.timer.innerHTML = time;
  }

  generateCreditCardData(user) {
    const cardInfo = this._parentElement.querySelectorAll(".cc");
    for (const [key, value] of Object.entries(user))
      cardInfo.forEach((node) => {
        node.classList.contains(`${key}`) ? (node.innerHTML = value) : "";
      });
  }

  addHandlerStartChallenge(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const startBtn = e.target.closest(".startBtn")?.lastElementChild;
      if (!startBtn) return;
      startBtn.style.display = "none";
      handler();
    });
  }

  displayAnswersInputs() {
    const creditCardContainer = this._parentElement.querySelector(".container");
    const answerForm = this._parentElement.querySelector(".form-container");
    creditCardContainer.innerHTML = "";
    answerForm.classList.toggle("hidden");
  }
}

export default new StartChallengeView();
