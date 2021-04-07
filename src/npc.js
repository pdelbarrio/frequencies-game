class Npc extends Entity {
  constructor(canvas, speed, color) {
    super(canvas, speed, color);

    this.color = color;

    this.direction = 0;

    this.x = (this.canvas.width - this.size) * Math.random();
    this.y = (this.canvas.height - this.size) * Math.random();

    this.speed = speed;

    this.hasBeenBalanced = false;
    this.counter = 0;
  }

  updatePosition() {
    if (this.counter >= 30) {
      this.counter = 0;
      this.direction = Math.floor(Math.random() * 5);
    }

    switch (this.direction) {
      case 1:
        if (this.x + this.speed < this.canvas.width - this.size) {
          this.x += this.speed;
        }
        break;
      case 2:
        if (this.x - this.speed > 0) {
          this.x -= this.speed;
        }
        break;
      case 3:
        if (this.y + this.speed < this.canvas.height - this.size) {
          this.y += this.speed;
        }
        break;
      case 4:
        if (this.y - this.speed > 0) {
          this.y -= this.speed;
        }
        break;
    }
    this.counter++;
  }
}
