class Entity {
  constructor(canvas, speed, color) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    //only Player class will have lives property
    //this.lives = lives;

    this.size = 100;

    //Erase in Entity when this.player in Game is a player instance
    this.x = 50;
    this.y = this.canvas.height / 2 - this.size / 2;
    //Direction will be managed by numbers 1, 0, -1. (multiply speed * direction)
    //this.directionX -- To be used later
    //this.directionY -- To be used later
    this.direction = 0;
    this.speed = speed;
    this.color = color;
  }

  //Erase in Entity when this.player in Game is a player instance
  setDirection(direction) {
    // +1 down -1 up
    if (direction === "up") this.direction = -1;
    else if (direction === "down") this.direction = 1;
    //Later we will add 4 conditionals to move this.directionX and this.directionY on -1 and 1
  }

  updatePosition() {
    this.y += this.direction * this.speed;
    console.log(this.y);
  }

  handleScreenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const entityTop = this.y;
    const entityBottom = this.y + this.size;

    //Later we will change this behaviour TO STOP when player hits ANY SIDE of the canvas
    if (entityBottom >= screenBottom) this.setDirection("up");
    else if (entityTop <= screenTop) this.setDirection("down");
  }

  removeLife() {
    //this method will be in Player Class only
    this.lives -= 1;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  //Cuando confirmemos que colisiona OK mandaremos este metodo a mainentity
  didCollide(npc) {
    const playerLeft = this.x;
    const playerRight = this.x + this.size;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    const npcLeft = npc.x;
    const npcRight = npc.x + npc.size;
    const npcTop = npc.y;
    const npcBottom = npc.y + npc.size;

    //Pensar la logica de colisión entre mainEntity y secEntity
    //LOGICA PROVISIONAL:
    const crossLeft = npcLeft === playerRight && npcLeft === playerLeft;
    const crossRight = npcRight === playerLeft && npcRight === playerRight;
    const crossBottom = npcBottom === playerTop && npcBottom === playerBottom;
    const crossTop = npcTop === playerBottom && npcTop === playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
