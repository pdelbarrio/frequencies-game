class Entity {
  constructor(canvas, speed, color) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 100;

    this.speed = speed;
    this.color = color;
  }

  //Erase in Entity when this.player in Game is a player instance

  handleScreenCollision() {
    //crear para ScreenLeft y ScreenRight
    const screenLeft;
    const screenRight;

    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const entityTop = this.y;
    const entityBottom = this.y + this.size;

    const entityRight;
    const entityLeft;

    //Later we will change this behaviour TO STOP when player hits ANY SIDE of the canvas
    // if (entityBottom >= screenBottom) this.setDirection("up");
    // else if (entityTop <= screenTop) this.setDirection("down");

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
