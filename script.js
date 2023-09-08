const youElement = document.getElementById("you");
const gameElement = document.getElementById("game");
const resultElement = document.getElementById("result");

const options = ["Rock", "Paper", "Scissor"];
let state = "N";


function chooseRock() {
  state = "Rock";
  youElement.innerText = "You choose Rock";
  // gameElement.innerText = `${state}`;
  Game();
}
function choosePaper() {
  state = "Paper";
  youElement.innerText = "You choose Paper";
  Game();

}
function chooseScissor() {
  state = "Scissor";
  youElement.innerText = "You choose Scissor";
  Game();
}

function Game() {
  const index = Math.floor(Math.random() * 3);
  const Ai = options[index];
  gameElement.innerText = `Computer choose ${Ai}`;

  if (state === Ai) {
    resultElement.innerText = "Draw!";
  } else if ((state === "Rock" && Ai === "Scissor") || (state === "Scissor" && Ai === "Paper") || (state === "Paper" && Ai === "Rock")) {
    resultElement.innerText = "Win!";
  } else {
    resultElement.innerText = "Lose!";
  }



}