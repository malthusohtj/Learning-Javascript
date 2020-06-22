//Challenge 1: Your Age in Days
const ageConvert = () => {
  let birthYear = prompt("Hello there! What year were you born in?");
  let ageInDays = (2020 - birthYear) * 365;
  let resultString = `You are ${ageInDays} days old.`;
  let h1Result = document.createElement("h1");
  let resultContent = document.createTextNode(resultString);
  h1Result.setAttribute("id", "ageInDays");
  h1Result.appendChild(resultContent);
  document.getElementById("result").appendChild(h1Result);
};

const reset = () => {
  document.getElementById("ageInDays").remove();
};

document.getElementById("click-me").addEventListener("click", ageConvert);
document.getElementById("reset").addEventListener("click", reset);
