class Entity {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    //only MainEntity class will have lives property
    //this.lives = lives;

    this.size = 100;

    this.x = 50;
    this.y = this.canvas.height / 2 - this.size / 2;
    //Direction will be managed by numbers 1, 0, -1. (multiply speed * direction)
    //this.directionX -- To be used later
    //this.directionY -- To be used later
    this.direction = 0;
    this.speed = 5;
  }

  setDirection(direction) {
    // +1 down -1 up
    if (direction === "up") this.direction = -1;
    else if (direction === "down") this.direction = 1;
    //Later we will add 4 conditionals to move this.directionX and this.directionY on -1 and 1
  }

  updatePosition() {
    this.y += this.direction * this.speed;
  }

  handleScreenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const entityTop = this.y;
    const entityBottom = this.y + this.size;

    //Later we will change this behaviour to stop when player hits any side of the canvas
    if (entityBottom >= screenBottom) this.setDirection("up");
    else if (entityTop <= screenTop) this.setDirection("down");
  }

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    this.ctx.fillStyle = "#66D3FA";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  //Cuando confirmemos que colisiona OK mandaremos este metodo a mainentity
  didCollide(secentity) {
    const mainEntityLeft = this.x;
    const mainEntityRight = this.x + this.size;
    const mainEntityTop = this.y;
    const mainEntityBottom = this.y + this.size;

    const secEntityLeft = secentity.x;
    const secEntityRight = secentity.x + secentity.size;
    const secEntityTop = secentity.y;
    const secEntityBottom = secentity.y + secentity.size;


    //Pensar la logica de colisión entre mainEntity y secEntity
    const crossLeft = 
  }
}
