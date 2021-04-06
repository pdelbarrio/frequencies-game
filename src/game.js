class Game {
  constructor(gameScreen, gameOverScreen) {
    this.canvas = null;
    this.ctx = null;
    this.player = null; //PLAYER
    this.npc = null; //NPC
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.gameOverScreen = gameOverScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.timer = null;
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

    //Create the timer and start de countdown
    this.timer = new Timer();
    this.timer.startCount();
    this.timerClock = document.querySelector(".countdown-timer");

    this.player = new Player(this.canvas, 5, "red", 3);

    this.npc = new Npc(this.canvas, 3, "blue");
    //Probar con más NPCs

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
      //1. ACTUALIZAR los estados del jugador y las otras entidades
      // -- 1.0 Nuestro Player ya está creado en la función start
      // -- 1.1 Crear los otros NPC en posiciones aleatorias
      // -- 1.2 Comprobar si el Player ha colisionado con algun NPC
      this.updateTimer();
      this.checkCollisions();

      // -- 1.3 Actualizar la posición del jugador y del/los NPC
      this.player.updatePosition();
      this.npc.updatePosition();

      //this.npc.updatePosition(); //como hacer update si de momento está quieto

      this.player.handleScreenCollision();

      // -- 1.4 Mover las NPC
      //
      //2. LIMPIAR CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //3. DIBUJAR DE NUEVO EL CANVAS CON LAS POSICIONES ACTUALIZADAS
      this.player.draw();
      this.npc.draw();
      //4. ROMPER EL LOOP EN CASO DE GAME OVER (LIVES <=0 O TIMER <=0)
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
      //5. ACTUALIZAR PUNTUACIÓN Y VIDAS QUE MOSTRAMOS POR PANTALLA (HTML)
      this.updateGameStats();
    };
    window.requestAnimationFrame(loop);
  }
  checkCollisions() {
    if (this.player.didCollide(this.npc)) {
      // console.log("Player and NPC collide and balance their frequencies");

      //this.player.direction = "stop";
      this.npc.speed = 0;
      //Probando lógica del método balance() del Player.
      //Debería ejecutar el método balance() y seguir el movimiento hasta otro NPC
      this.player.balance(this.npc);
      this.npc.color = "red";
      console.log(this.npc.hasBeenBalanced);
      //PRIMERA VERSIÓN MVP -> Cuando colisionan PLAYER y NPC - Se llama a winScreen en Main
      this.gameIsOver = true;
      this.gameOver("win");
    }
  }

  updateTimer() {
    this.timerClock.textContent = this.timer.splitCount();
    if (this.timer.currentTime < 5) {
      this.timerClock.style.color = "red";
    }
    if (this.timer.currentTime <= 0) {
      this.player.lives -= 1;
      console.log(this.player.lives);
      this.timerClock.style.color = "black";
      this.timer.currentTime = 5;
      this.player.x = 50;
      this.player.y = this.canvas.height / 2 - this.player.size / 2;
      this.npc.x = (this.canvas.width - this.npc.size) * Math.random();
      this.npc.y = (this.canvas.width - this.npc.size) * Math.random();

      if (this.player.lives <= 0) {
        this.gameIsOver = true;
        this.gameOver("lose");
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
