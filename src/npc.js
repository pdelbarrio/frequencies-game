class Npc extends Entity {
  //Idealmente pasaremos positionX y positionY
  //primero fijas y despues aleatorias
  constructor(canvas, speed, color) {
    super(canvas, speed, color);

    this.color = color;

    this.direction = 0;

    this.x = 0;
    this.y = 0;

    // this.dx = 1 * this.speed;
    // this.dy = 1 * this.speed;

    this.speed = speed;

    this.hasBeenBalanced = false;
  }

  handleScreenCollision() {
    const screenLeft = 0;
    const screenRight = this.canvas.width;
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const entityTop = this.y;
    const entityBottom = this.y + this.size;
    const entityLeft = this.x;
    const entityRight = this.x + this.size;

    if (entityRight >= screenRight) {
      this.direction = 5;
      this.x--;
    } else if (entityLeft <= screenLeft) {
      this.direction = 5;
      this.x++;
    }

    if (entityBottom >= screenBottom) {
      this.direction = 5;
      this.y--; //Subimos un pixel para que no se quede en "stop" al tocar bottom
    } else if (entityTop <= screenTop) {
      this.direction = 5;
      this.y++; //Bajamos un pixel para que no se quede en "stop" al tocar el top
    }
  }

  updatePosition() {
    this.direction = Math.floor(Math.random() * 4) + 1;

    switch (this.direction) {
      case 1:
        this.x += this.speed;
        break;
      case 2:
        this.x -= this.speed;
        break;
      case 3:
        this.y += this.speed;
        break;
      case 4:
        this.y -= this.speed;
        break;
      case 5:
        break;
    }
  }
}
