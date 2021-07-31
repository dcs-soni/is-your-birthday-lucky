const userBirthday = document.querySelector(".birthday");
const userLuckyNumber = document.querySelector(".lucky-number");
const checkButton = document.querySelector(".check-button");

function getDate(bday) {
  let bdayArray = bday.split("-");
  let date = bdayArray[bdayArray.length - 1];

  let firstDigit = Math.floor(date / 10);
  let secondDigit = date % 10;
  console.log("first", firstDigit);
  console.log("sec", secondDigit);

  let sumOfDate = firstDigit + secondDigit;
  console.log(sumOfDate);
  return sumOfDate;
}

function checkLucky(date, luckyNum) {
  if (date % luckyNum === 0) {
    console.log("You r lucky");
  } else {
    console.log("Not lucky");
  }
}

function getBirthdayandLuckyNumber() {
  birthday = userBirthday.value;
  luckyNumber = userLuckyNumber.value;
  sumOfDate = getDate(birthday);
  checkLucky(sumOfDate, luckyNumber);
}

checkButton.addEventListener("click", getBirthdayandLuckyNumber);
