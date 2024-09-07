import * as model from "./model.js";
import NavBar from "./view/navBarView.js";
import CreditCardView from "./view/creditCardView.js";
import StartChallengeView from "./view/startChallengeView.js";
import startChallengeView from "./view/startChallengeView.js";
import FormView from "./view/formView.js";
import formView from "./view/formView.js";
import cardView from "./view/cardView.js";

let curTime = 2;
let challengeEnded = false;

const updateTimer = function () {
  StartChallengeView.updateTimer(curTime);
};

const manageTimeInterval = function (every) {
  const interval = setInterval(function () {
    updateTimer();
    if (!challengeEnded && curTime < 1) {
      curTime = 30;
      controlCreditCardData();
      challengeEnded = true;
    }
    if (curTime === 0) {
      clearInterval(interval);
      return endChallenge();
    }
    curTime--;
  }, every * 1000);
};

const endChallenge = function () {
  if (curTime === 0 && challengeEnded) {
    clearInterval(manageTimeInterval);
    startChallengeView.displayAnswersInputs();
  }
};

const controlTimer = function () {
  StartChallengeView.updateTimer(3);
  manageTimeInterval(1);
};

const controlCreditCardData = async function () {
  const userData = await model.createCreditData();
  startChallengeView.generateCreditCardData(userData);
};

const controlSubmit = function (answers) {
  const correctAnswersCount = model.checkUserAnswers(answers);
  const msg = `${correctAnswersCount} / 7, mentality: ${(
    (correctAnswersCount / 7) *
    100
  ).toFixed(2)}%`;
  formView.renderMessage(msg);
};

const init = function () {
  startChallengeView.addHandlerStartChallenge(controlTimer);
  FormView.addHandlerSubmitAnswers(controlSubmit);
};
init();
