class Player extends Entity {
  constructor(lives) {
    this.lives = lives;
    this.x = 50;
    this.y = this.canvas.height / 2 - this.size / 2;
  }

  setDirection(direction) {
    // +1 down -1 up
    if (direction === "up") this.direction = -1;
    else if (direction === "down") this.direction = 1;
    //Later we will add 4 conditionals to move this.directionX and this.directionY on -1 and 1
  }

  balance() {}

  removeLife() {
    //this method will be in Player Class only
    this.lives -= 1;
  }
}
