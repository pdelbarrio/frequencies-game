"use strict";

//Initialising instances
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let infoScreen;

//Create DOM elements from a string representation
function builDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  return tempDiv.children[0];
}

//Splash screen
function createSplashScreen() {
  splashScreen = builDom(`
  <main>
    <h1>Frequencies Game</h1>
    <button>Start</button>
  </main>

  `);

  document.body.appendChild(splashScreen);
  const startButton = splashScreen.querySelector("button");

  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
  console.log(splashScreen);
}

//Game screen
function createGameScreen() {}
function removeGameScreen() {}

//Game over screen
function createGameOverScreen() {}
function removeGameOverScreen() {}

//Setting the game state - start or game over
function startGame() {}
function endGame(score) {}
window.addEventListener("load", createSplashScreen);

//Info Screen
function createInfoScreen() {}
function removeInfoScreen() {}

window.addEventListener("load", () => {
  let game = new Game();
});
