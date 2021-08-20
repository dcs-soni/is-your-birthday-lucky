const userBirthday = document.querySelector(".birthday");
const userLuckyNumber = document.querySelector(".lucky-number");

//Check nd Reset Buttons
const checkButton = document.querySelector(".check-button");
const resetButton = document.querySelector(".reset-button");

//Gifs and Result
const loadingGif = document.querySelector(".loading-gif");
const luckyGif = document.querySelector(".lucky-gif");
const luckyGifMirror = document.querySelector(".lucky-gif-mirror");
const resultStatement = document.querySelector(".result-statement");

//graphic is used to hide all input elements and add gifs and stuff
const graphic = document.querySelectorAll(".graphic");

//To display the luckyNumber and birthdate after clicking check
const statement = document.querySelector(".statement");

//Alert box 
const alertBox = document.querySelector(".alert");
const crossButton = document.querySelector(".cross-btn");

console.log(graphic.length);

let sumOfBday = 0;

//Sums the digits of the bday
function getSumOfBday(bday) {
  
  while(bday){
    sumOfBday += bday % 10;
    bday = Math.floor(bday / 10);
  }
  console.log(sumOfBday);
  return sumOfBday;
}

//Checks the bdate is divisible by luckyNumber
function checkLucky(date, luckyNum) {
  if (date % luckyNum === 0) {
    console.log("You r lucky");

    setTimeout(function () {
      resultStatement.style.display = "block";
      resultStatement.innerText = "Yayy!! Your birthday is LUCKY!";
      luckyGif.style.display = "block";
      luckyGifMirror.style.display = "block";
    }, 5000);
  } else {
    setTimeout(function () {
      resultStatement.style.display = "block";
      resultStatement.innerText = "Your birthday is not lucky :(";
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
  
  birthday = userBirthday.value;
  luckyNumber = userLuckyNumber.value;
  
  if(!birthday || !luckyNumber){
    resultStatement.style.display = "block";
    resultStatement.style.top = "35%";
    resultStatement.style.fontSize = "1rem";

    resultStatement.innerText = "Please enter some value";
  } else {
    showGifAndHideContent();

  

    let bdayInput = parseInt(birthday.split("-").join(""));
  
    let sum = getSumOfBday(bdayInput);
    checkLucky(sum, luckyNumber);
    statement.innerText = `Sum of birthdate is ${sum} and lucky number is ${luckyNumber}`;
    statement.style.display = "block";
  }


}

crossButton.addEventListener("click", () => {
  alertBox.style.display = "none";
})
resetButton.addEventListener("click", () => {
  userBirthday.value = " ";
  luckyNumber.value = " ";
})
checkButton.addEventListener("click", getBirthdayandLuckyNumber);

