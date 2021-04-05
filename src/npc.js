class Npc extends Entity {
  //Idealmente pasaremos positionX y positionY
  //primero fijas y despues aleatorias
  constructor(canvas, speed, color) {
    super(canvas, speed, color);

    this.color = color;

    this.direction = 0;

    this.x = 70;
    this.y = 20;

    // this.dx = 1 * this.speed;
    // this.dy = 1 * this.speed;

    this.speed = speed;

    this.hasBeenBalanced = false;
  }

  update() {
    this.draw(context);
    this.x += this.dx;
    this.y += this.dy;
  }

  updatePosition() {}
}
