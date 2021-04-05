class Npc extends Entity {
  //Idealmente pasaremos positionX y positionY
  //primero fijas y despues aleatorias
  constructor(canvas, positionX, positionY, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.x = positionX;
    this.y = positionY;

    this.speed = speed;

    this.hasBeenBalanced = false;
  }
  randomMovement();
}
