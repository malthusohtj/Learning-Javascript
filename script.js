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
