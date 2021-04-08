class Npc extends Entity {
  constructor(canvas, speed, playerImgSrc) {
    super(canvas, speed);

    // this.color = color;

    // this.size = 50;

    this.width = 100;
    this.height = 120;

    this.direction = 0;

    this.x = (this.canvas.width - this.width) * Math.random();
    this.y = (this.canvas.height - this.height) * Math.random();

    this.speed = speed;

    this.hasBeenBalanced = false;
    this.counter = 0;

    this.image = new Image();
    this.image.src = playerImgSrc;
    this.frames = 5;
    this.framesIndex = 0;
  }

  updatePosition() {
    if (this.counter >= 15) {
      this.counter = 0;
      this.direction = Math.floor(Math.random() * 5);
    }

    switch (this.direction) {
      case 1:
        if (this.x + this.speed < this.canvas.width - this.width) {
          this.x += this.speed;
        }
        break;
      case 2:
        if (this.x - this.speed > 0) {
          this.x -= this.speed;
        }
        break;
      case 3:
        if (this.y + this.speed < this.canvas.height - this.height) {
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
