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
  
  <main class="splashScreen">
      
      <h2>FREQUENCIES</h2>
      <div class="text-box">
        <a id="start-button" href="#" class="">START GAME</a>
      </div>      
  </main>

  `);

  document.body.appendChild(splashScreen);
  const startButton = splashScreen.querySelector("#start-button");

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
            </span>
          </div>

          <div class="lives">
              <span class="label">Lives:</span>
              <span class="value"></span>
          </div>

          <div class="score">
              <span class="label"></span>
              <span class="value"></span>
          </div>
      </header>

      <div class="canvas-container">
          <canvas></canvas>
          
      </div>
      <div style="display: none">        
        <audio id="colision-sound" preload="auto" controls="none" src="sounds/sound13.wav"></audio>
        <audio id="win-sound" preload="auto" controls="none" src="sounds/sound01.mp3"></audio>
        <audio id="gameover" preload="auto" controls="none" src="sounds/gameover.mp3"></audio>
        <audio id="lifelost" preload="auto" controls="none" src="sounds/lifelost.mp3"></audio>
        <audio id="gamestart" preload="auto" controls="none" src="sounds/start.wav"></audio>
    </div>
  </main>
  `);

  document.body.appendChild(gameScreen);
}
function removeGameScreen() {
  gameScreen.remove();
}
//You win Screen
function createWinnerScreen() {
  winScreen = builDom(`
  
  <main class="splashScreen">
      
      <h2>YOU WIN</h2>
      <div class="text-box">
        <a id="start-button" href="#" class="">START AGAIN</a>
      </div>
      <div style="display: none">
        <audio id="background-music" preload="auto" controls="none"  src="sounds/bg-drone.mp3"></audio>
        <audio id="colision-sound" preload="auto" controls="none" src="sounds/sound13.wav"></audio>
        <audio id="win-sound" preload="auto" controls="none" src="sounds/sound01.mp3"></audio>
        <audio id="gameover" preload="auto" controls="none" src="sounds/gameover.mp3"></audio>
      </div>
  </main>
  `);

  document.body.appendChild(winScreen);
  const startButton = winScreen.querySelector("#start-button");

  startButton.addEventListener("click", startGame);
}
function removeWinnerScreen() {
  winScreen.remove();
}

//Game over screen
function createGameOverScreen() {
  gameOverScreen = builDom(`
  
  <main class="splashScreen">
      
      <h2>GAME OVER</h2>
      <div class="text-box">
        <a id="start-button" href="#" class="">START AGAIN</a>
      </div>
      <div style="display: none">        
        <audio id="gameover" preload="auto" controls="none" src="sounds/gameover1.wav"></audio>
      </div>
  </main>
  `);

  document.body.appendChild(gameOverScreen);
  const startButton = gameOverScreen.querySelector("#start-button");

  startButton.addEventListener("click", startGame);
}

function removeGameOverScreen() {
  gameOverScreen.remove();
}

//Setting the game state - start or game over
function startGame() {
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  if (winScreen) {
    removeWinnerScreen();
  }
  removeSplashScreen();
  createGameScreen();

  game = new Game(gameScreen, gameOverScreen);

  game.start();
}

function endGame(status) {
  removeGameScreen();
  if (status === "lose") {
    createGameOverScreen();
  } else if (status === "win") {
    createWinnerScreen();
  }
}

//Info Screen
function createInfoScreen() {}
function removeInfoScreen() {}

window.addEventListener("load", createSplashScreen);
