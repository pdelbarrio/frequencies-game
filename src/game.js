class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }
  start() {
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.player = new this.player(this.canvas, 5);
  }
  startLoop() {}
  checkCollisions() {}
  gameOver() {}
  updateGameStats() {}
}
