const userBirthday = document.querySelector(".birthday");
const userLuckyNumber = document.querySelector(".lucky-number");
const checkButton = document.querySelector(".check-button");

//Gifs and Result
const loadingGif = document.querySelector(".loading-gif");
const luckyGif = document.querySelector(".lucky-gif");
const luckyGifMirror = document.querySelector(".lucky-gif-mirror");
const resultStatement = document.querySelector(".result-statement");

//graphic is used to hide all input elements and add gifs and stuff
const graphic = document.querySelectorAll(".graphic");

//To display the luckyNumber and birthdate after clicking check
const statement = document.querySelector(".statement");

console.log(graphic.length);

//Sums the digits of the bday
function getSumOfDate(date) {
  let firstDigit = Math.floor(date / 10);
  let secondDigit = date % 10;
  console.log("first", firstDigit);
  console.log("sec", secondDigit);

  let sumOfDate = firstDigit + secondDigit;
  console.log(sumOfDate);
  return sumOfDate;
}

//Checks the bdate is divisible by luckyNumber
function checkLucky(date, luckyNum) {
  if (date % luckyNum === 0) {
    console.log("You r lucky");

    setTimeout(function () {
      resultStatement.style.display = "block";
      resultStatement.innerText = "You're LUCKY!";
      luckyGif.style.display = "block";
      luckyGifMirror.style.display = "block";
    }, 5000);
  } else {
    setTimeout(function () {
      resultStatement.style.display = "block";
      resultStatement.innerText = "You're not so lucky :(";
      console.log("Not lucky");
    }, 5000);
  }
}

function showGifAndHideContent() {
  //graphic is an array so iterating to hide all the elements having class graphic
  for (let i = 0; i < graphic.length; i++) {
    console.log(graphic[i]);

    graphic[i].style.display = "none";
  }
  loadingGif.style.display = "block"; //Shows the loading gif

  setTimeout(function () {
    loadingGif.style.display = "none";
  }, 5000);
}

function getBirthdayandLuckyNumber() {
  showGifAndHideContent();

  birthday = userBirthday.value;
  luckyNumber = userLuckyNumber.value;

  let bdayArray = birthday.split("-");
  //Accessing only the date from the array
  let date = bdayArray[bdayArray.length - 1];

  sumOfDate = getSumOfDate(date);
  checkLucky(sumOfDate, luckyNumber);
  statement.innerText = `Your birthdate is ${date} and lucky number is ${luckyNumber}`;
  statement.style.display = "block";
}

checkButton.addEventListener("click", getBirthdayandLuckyNumber);
