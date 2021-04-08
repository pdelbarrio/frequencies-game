class Game {
  constructor(gameScreen, gameOverScreen) {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.npcs = [];
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.gameOverScreen = gameOverScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.timer = null;
    this.npcQuantiy = 5;
    this.framesCounter = 0;
  }

  start() {
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    //Start sound
    document.getElementById("gamestart").currentTime = 0.5;
    document.getElementById("gamestart").play();

    //Create the timer and start de countdown
    this.timer = new Timer();
    this.timer.startCount();
    this.timerClock = document.querySelector(".countdown-timer");

    // this.player = new Player(this.canvas, 6, "red", 3);
    this.player = new Player(this.canvas, 5, "img/player1.png");

    //Probar con más NPCs
    for (let i = 0; i < this.npcQuantiy; i++) {
      const newNpc = new Npc(this.canvas, 20, "img/npc2.png");
      this.npcs.push(newNpc);
    }

    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        this.player.direction = "up";
      } else if (event.key === "ArrowDown") {
        this.player.direction = "down";
      } else if (event.key === "ArrowLeft") {
        this.player.direction = "left";
      } else if (event.key === "ArrowRight") {
        this.player.direction = "right";
      }
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }
  startLoop() {
    const loop = () => {
      this.framesCounter++;
     
      this.updateTimer();
      this.checkCollisions();

      
      this.player.updatePosition();

      
      this.npcs.forEach((npc) => {
        npc.updatePosition();
      });

      this.player.handleScreenCollision();

      
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.player.draw(this.framesCounter);

      
      this.npcs.forEach((npc) => {
        npc.draw(this.framesCounter);
      });

      
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
      
      this.updateGameStats();
    };
    window.requestAnimationFrame(loop);
  }
  checkCollisions() {
    let balance = true;
    this.npcs.forEach((npc) => {
      if (this.player.didCollide(npc)) {
        npc.image.src = "img/player1.png";

        document.getElementById("colision-sound").currentTime = 0.5;
        document.getElementById("colision-sound").play();
        npc.hasBeenBalanced = true;
        npc.speed = 3;
        
      }
      if (npc.hasBeenBalanced === false) {
        balance = false;
      }
    });

    
    if (balance) {
      this.gameIsOver = true;
      this.gameOver("win");
      document.getElementById("win-sound").currentTime = 0.5;
      document.getElementById("win-sound").play();
    }

   
  }

  updateTimer() {
    this.timerClock.textContent = this.timer.splitCount();
    if (this.timer.currentTime < 6) {
      this.timerClock.style.color = "red";
      this.timerClock.style.fontSize = 30;
    }
    if (this.timer.currentTime <= 0) {
      //Probar un contador de vidas con corazones
      this.player.lives -= 1;

      document.getElementById("lifelost").currentTime = 0.5;
      document.getElementById("lifelost").play();

      this.timerClock.style.color = "white";
      this.timer.currentTime = 5;
      this.player.x = 50;
      this.player.y = this.canvas.height / 2 - this.player.size / 2;
      //borro el array de NPCs
      this.npcs = [];
      //Vuelvo a crear el array de NPCs
      for (let i = 0; i < this.npcQuantiy; i++) {
        const newNpc = new Npc(this.canvas, 20, "img/npc2.png");
        this.npcs.push(newNpc);
      }

      
      if (this.player.lives <= 0) {
        this.gameIsOver = true;
        this.gameOver("lose");
        document.getElementById("gameover").currentTime = 0.5;
        document.getElementById("gameover").play();
        this.timer.resetCount();
      }
    }
  }

  gameOver(status) {
    //Calls the createGameOverScreen in main
    endGame(status);
  }
  updateGameStats() {
    this.livesElement.innerHTML = this.player.lives;
  }
}
