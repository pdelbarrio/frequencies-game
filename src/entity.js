class Entity {
  constructor(canvas, speed, color) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 10;

    this.speed = speed;
    this.color = color;
  }

  //Erase in Entity when this.player in Game is a player instance

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
      this.direction = "stop";

      this.x--; //Movemos pixel a la izquierda para que no se quede en "stop" al tocar ScreenRight
    } else if (entityLeft <= screenLeft) {
      this.direction = "stop";

      this.x++; //Movemos pixel a la derecha para que no se quede en "stop" al tocar ScreenLeft
    }

    if (entityBottom >= screenBottom) {
      this.direction = "stop";

      this.y--; //Subimos un pixel para que no se quede en "stop" al tocar bottom
    } else if (entityTop <= screenTop) {
      this.direction = "stop";

      this.y++; //Bajamos un pixel para que no se quede en "stop" al tocar el top
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
