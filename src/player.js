class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;

    this.size = 100;
    this.x = 50;
    this.y = canvas.height / 2 - this.size / 2;

    this.direction = 0;
    this.speed = 5;
  }

  setDirection(direction) {}
}
