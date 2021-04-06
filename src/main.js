"use strict";

//Initialising instances
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let winScreen;
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
}

//Game screen
function createGameScreen() {
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  if (winScreen) {
    removeWinnerScreen();
  }
  gameScreen = builDom(`
  <main class="game container">
      <header>
          <div class="timer">
            <span class="countdown-timer">
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
//You win Screen
function createWinnerScreen() {
  if (gameScreen) {
    removeGameScreen();
  }
  winScreen = builDom(`
  <main>
    <h1>YOU WIN!</h1>
    <button>Start Again</button>
  </main>
  `);

  document.body.appendChild(winScreen);
  const startButton = winScreen.querySelector("button");

  startButton.addEventListener("click", startGame);

  return winScreen;
}
function removeWinnerScreen() {
  winScreen.remove();
}

//Game over screen
function createGameOverScreen() {
  if (gameScreen) {
    removeGameScreen();
  }

  gameOverScreen = builDom(`
  <main>
    <h1>GAME OVER</h1>
    <button>Start Again</button>
  </main>
  `);

  document.body.appendChild(gameOverScreen);
  const startButton = gameOverScreen.querySelector("button");

  startButton.addEventListener("click", startGame);

  return gameOverScreen;
}

function removeGameOverScreen() {
  gameOverScreen.remove();
}

//Setting the game state - start or game over
function startGame() {
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  removeSplashScreen();
  createGameScreen();

  game = new Game(gameScreen, gameOverScreen);

  game.start();
}

function endGame(status) {
  if (status === "lose") {
    removeGameScreen();
    createGameOverScreen();
  } else if (status === "win") {
    removeGameScreen();
    createWinnerScreen();
  }
}

//Info Screen
function createInfoScreen() {}
function removeInfoScreen() {}

window.addEventListener("load", createSplashScreen);
