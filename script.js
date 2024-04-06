const firstImage = document.querySelector(".img1");
const lastImage = document.querySelector(".img2");
const firstWin = "The winner is the first dice.";
const secondWin = "The winner is the second dice.";
const tie = "It's a tie!";
let firstRandom = Math.random() * 6 + 1;
firstRandom = Math.floor(firstRandom);
let lastRandom = Math.random() * 6 + 1;
lastRandom = Math.floor(lastRandom);
firstImage.src = `./images/dice${firstRandom}.png`;
lastImage.src = `./images/dice${lastRandom}.png`;
if (lastRandom > firstRandom) {
  document.querySelector("h1").textContent = secondWin;
  console.log(secondWin);
} else if (firstRandom > lastRandom) {
  document.querySelector("h1").textContent = firstWin;
} else {
  console.log(tie);
  document.querySelector("h1").textContent = tie;
}
document.querySelector(".btn").addEventListener("click", function () {
  location.reload();
});
