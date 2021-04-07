class Player extends Entity {
  constructor(canvas, speed, playerImgSrc) {
    super(canvas, speed);

    // this.color = color;

    this.width = 100;
    this.height = 120;

    this.direction = 0;

    this.lives = 3;

    this.x = 50;
    this.y = this.canvas.height / 2 - this.height / 2;

    this.image = new Image();
    this.image.src = playerImgSrc;
    this.frames = 5;
    this.framesIndex = 0;
  }

  updatePosition() {
    switch (this.direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
      case "stop":
        break;
    }
  }

  balance(npc) {
    npc.hasBeenBalanced = true;
  }

  didCollide(npc) {
    //seleccionamos los 4 laterales del Player
    const playerLeft = this.x;
    const playerRight = this.x + this.size;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    //seleccionamos los 4 laterales del NPC
    const npcLeft = npc.x;
    const npcRight = npc.x + npc.size;
    const npcTop = npc.y;
    const npcBottom = npc.y + npc.size;

    //Pensar la logica de colisión entre Player y NPC
    //LOGICA PROVISIONAL:
    // const crossLeft = npcLeft === playerRight && npcLeft === playerLeft;
    // const crossRight = npcRight === playerLeft && npcRight === playerRight;
    // const crossBottom = npcBottom === playerTop && npcBottom === playerBottom;
    // const crossTop = npcTop === playerBottom && npcTop === playerTop;

    const crossLeft = npcLeft <= playerRight && npcLeft >= playerLeft;
    const crossRight = npcRight >= playerLeft && npcRight <= playerRight;
    const crossBottom = npcBottom >= playerTop && npcBottom <= playerBottom;
    const crossTop = npcTop <= playerBottom && npcTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    //this method will be in Player Class only
    this.lives -= 1;
  }

  draw(framesCounter) {
    //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.animate(framesCounter);
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 2) this.framesIndex = 0;
    }
  }
}
