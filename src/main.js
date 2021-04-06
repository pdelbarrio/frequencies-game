"use strict";

//Initialising instances
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let infoScreen;

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

function printTime() {
  printMinutes();
  printSeconds();
}
function printMinutes() {
  let minutes = timer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}
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
}

//Game screen
function createGameScreen() {
  gameScreen = builDom(`
  <main class="game container">
      <header>
          <div class="timer">
            <span class="countdown-timer">
            <span id="minDec" class="number">0</span>
            <span id="minUni" class="number">0</span>
            <span>:</span>
            <span id="secDec" class="number">0</span>
            <span id="secUni" class="number">0</span>
            </span>
          </div>

          <div class="lives">
              <span class="label">Lives:</span>
              <span class="value"></span>
          </div>

          <div class="score">
              <span class="label">Score:</span>
              <span class="value"></span>
          </div>
      </header>

      <div class="canvas-container">
          <canvas></canvas>
      </div>
  </main>
  `);

  document.body.appendChild(gameScreen);
  return gameScreen;
}
function removeGameScreen() {
  gameScreen.remove();
}

//Game over screen
function createGameOverScreen() {}

function removeGameOverScreen() {}

//Setting the game state - start or game over
function startGame() {
  removeSplashScreen();
  createGameScreen();

  game = new Game(gameScreen);

  game.start();
}

function endGame(score) {}

//Info Screen
function createInfoScreen() {}
function removeInfoScreen() {}

window.addEventListener("load", createSplashScreen);
