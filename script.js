//Challenge 1: Your Age in Days
const ageConvert = () => {
  let birthYear = prompt("Hello there! What year were you born in?");
  let ageInDays = (2020 - birthYear) * 365;
  let resultString = `You are ${ageInDays} days old.`;
  let h1Result = document.createElement("h1");
  let resultContent = document.createTextNode(resultString);
  h1Result.setAttribute("id", "ageInDays");
  h1Result.appendChild(resultContent);
  document.getElementById("result-container").appendChild(h1Result);
};

const reset = () => {
  document.getElementById("ageInDays").remove();
};

document.getElementById("click-me").addEventListener("click", ageConvert);
document.getElementById("reset").addEventListener("click", reset);

//Challenge 2: Cat Generator
const generateCat = () => {
  let catImg = document.createElement("img");
  catImg.src =
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  catImg.style.width = "250px";
  catImg.style.height = "auto";
  catImg.style.margin = "10px auto";
  let catFlexBox = document.getElementById("cat-flexbox");
  catFlexBox.appendChild(catImg);
};

document.getElementById("generate-cat").addEventListener("click", generateCat);

//Challenge 3: Rock Paper Scissors
let rockImg = document.getElementById("rock");
rockImg.addEventListener("click", () => {
  rpsGame(rockImg);
});
let paperImg = document.getElementById("paper");
paperImg.addEventListener("click", () => {
  rpsGame(paperImg);
});
let scissorsImg = document.getElementById("scissors");
scissorsImg.addEventListener("click", () => {
  rpsGame(scissorsImg);
});

const rpsRandom = () => {
  let choices = ["rock", "paper", "scissors"];
  let botChoice = choices[Math.floor(Math.random() * choices.length)];
  return botChoice;
};

const winnerComputer = (userChoice, botChoice) => {
  let rpsRules = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  let userScore = rpsRules[userChoice][botChoice];
  if (userScore == 1) {
    return "You win";
  } else if (userScore == 0.5) {
    return "Draw";
  } else {
    return "You lose";
  }
};

const frontEndChanges = (userChoice, botChoice, resultMessage) => {
  let imgSources = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let userChoiceImg = document.createElement("img");
  userChoiceImg.src = imgSources[userChoice];
  userChoiceImg.setAttribute("width", "20%");
  userChoiceImg.setAttribute("height", "250px");
  userChoiceImg.setAttribute("margin", "10px 0px");
  userChoiceImg.setAttribute("border", "2px solid black");
  let botChoiceImg = document.createElement("img");
  botChoiceImg.src = imgSources[botChoice];
  botChoiceImg.setAttribute("width", "20%");
  botChoiceImg.setAttribute("height", "250px");
  botChoiceImg.setAttribute("margin", "10px 0px");
  botChoiceImg.setAttribute("border", "2px solid black");

  let resultMessageSpan = document.createElement("div");
  let resultMessageH2 = document.createElement("h2");
  resultMessageH2.innerHTML = resultMessage;
  resultMessageSpan.style.border = "2px solid black";
  resultMessageSpan.appendChild(resultMessageH2);

  document.getElementById("rps-flexbox").appendChild(userChoiceImg);
  document.getElementById("rps-flexbox").appendChild(resultMessageSpan);
  document.getElementById("rps-flexbox").appendChild(botChoiceImg);
};

const rpsGame = (userClick) => {
  console.log(userClick);
  let userChoice = userClick.id;
  let botChoice = rpsRandom();
  let resultMessage = winnerComputer(userChoice, botChoice);
  frontEndChanges(userChoice, botChoice, resultMessage);
};

//Challenge 4: Change Button Colours
document.getElementById("background").addEventListener("change", function () {
  changeButtonColour(this.value);
});
let allButtons = document.getElementsByTagName("button");

let allButtonsCopy = [];

for (let i = 0; i < allButtons.length; i++) {
  allButtonsCopy.push(allButtons[i].classList[1]);
}

function changeButtonColour(inputOption) {
  if (inputOption === "red") {
    buttonRed();
  } else if (inputOption === "green") {
    buttonGreen();
  } else if (inputOption === "reset") {
    buttonReset();
  } else if (inputOption === "random") {
    buttonRandom();
  }
}

function buttonRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
}

function buttonReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(allButtonsCopy[i]);
  }
}

function buttonRandom() {
  let randomButtonClasses = [
    "btn-danger",
    "btn-success",
    "btn-primary",
    "btn-warning",
  ];
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(
      randomButtonClasses[
        Math.floor(Math.random() * randomButtonClasses.length)
      ]
    );
  }
}
