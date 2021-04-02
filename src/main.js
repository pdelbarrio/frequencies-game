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
}

//Splash screen
function createSplashScreen() {}
function removeSplashScreen() {}

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
