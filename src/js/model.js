import { API_URL } from "./config.js";

const getCreditData = async function (dataType) {
  const mainData = await fetch(`${API_URL}${dataType}?size=1&is_xml=true`);
  const data = await mainData.json();
  return data;
};

const generateRandomNumbers = function (numberOfDeigits) {
  const template = new Array(numberOfDeigits).fill(0);
  const randomDigits = template.map(() => Math.floor(Math.random() * 9) + 1);
  return randomDigits.join("");
};

const generateCcNumber = function () {
  const template = new Array(4).fill(0);
  const randomDigits = template.map(() => generateRandomNumbers(4));
  return randomDigits.join(" ");
};

const generateCcType = function () {
  const creditTypes = ["Visa", "Master", "Mizza"];
  const randomCardType = creditTypes.at(
    Math.floor(Math.random() * creditTypes.length)
  );
  return randomCardType;
};

export const createCreditData = async function () {
  const user = await getCreditData("users");
  const creditData = {
    card__type: generateCcType(),
    username: `${user.first_name} ${user.last_name}`,
    cc__number: generateCcNumber(),
    id: String(user.id),
    ex__date: `${user.date_of_birth.split("-")[1]}/${user.date_of_birth
      .split("-")[0]
      .slice(-2)}`,
    ccv: generateRandomNumbers(3),
    customer__service: `(+${generateRandomNumbers(3)})${generateRandomNumbers(
      6
    )}`,
    bank__name: `${user.address.street_name} Bank`,
  };
  localStorage.setItem("cardInfo", JSON.stringify(creditData));
  return creditData;
};

export const checkUserAnswers = function (answers) {
  const correctAnswers = JSON.parse(localStorage.getItem("cardInfo"));
  let correctAnswersCount = 0;
  for (const [ansKey, ansValue] of Object.entries(answers)) {
    const checkAnswer =
      answers[ansKey].toLowerCase().replace(/\s/g, "") ===
      correctAnswers[ansKey].toLowerCase().replace(/\s/g, "");
    if (checkAnswer) correctAnswersCount++;
  }
  return correctAnswersCount;
};
