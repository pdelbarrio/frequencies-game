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

    //Create the timer and start de countdown
    this.timer = new Timer();
    this.timer.startCount();
    this.timerClock = document.querySelector(".countdown-timer");

    // this.player = new Player(this.canvas, 6, "red", 3);
    this.player = new Player(this.canvas, 5, "/img/player.png");

    //Probar con más NPCs
    for (let i = 0; i < 3; i++) {
      const newNpc = new Npc(this.canvas, 2, "blue");
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
      //1. ACTUALIZAR los estados del jugador y las otras entidades
      // -- 1.0 Nuestro Player ya está creado en la función start
      // -- 1.1 Crear los otros NPC en posiciones aleatorias, se crean en start para que no haya loop de creacion de npcs

      // -- 1.2 Comprobar si el Player ha colisionado con algun NPC
      this.updateTimer();
      this.checkCollisions();

      // -- 1.3 Actualizar la posición del jugador y del/los NPC
      this.player.updatePosition();

      // this.npc.updatePosition();
      this.npcs.forEach((npc) => {
        npc.updatePosition();
      });

      this.player.handleScreenCollision();

      // -- 1.4 Mover las NPC
      //
      //2. LIMPIAR CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //3. DIBUJAR DE NUEVO EL CANVAS CON LAS POSICIONES ACTUALIZADAS
      this.player.draw(this.framesCounter);

      // this.npc.draw();
      this.npcs.forEach((npc) => {
        npc.draw();
      });

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
    let balance = true;
    this.npcs.forEach((npc) => {
      if (this.player.didCollide(npc)) {
        npc.color = "red";

        npc.hasBeenBalanced = true;
      }
      if (npc.hasBeenBalanced === false) {
        balance = false;
      }
    });

    //Cuando esto funcione ponerlo dentro de un if para gameOver = true
    if (balance) {
      this.gameIsOver = true;
      this.gameOver("win");
    }

    /*
    //codigo del GameOver("win") con un solo NPC:
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
    }*/
  }

  updateTimer() {
    this.timerClock.textContent = this.timer.splitCount();
    if (this.timer.currentTime < 5) {
      this.timerClock.style.color = "red";
    }
    if (this.timer.currentTime <= 0) {
      this.player.lives -= 1;

      this.timerClock.style.color = "white";
      this.timer.currentTime = 20;
      this.player.x = 50;
      this.player.y = this.canvas.height / 2 - this.player.size / 2;
      //borro el array de NPCs
      this.npcs = [];
      //Vuelvo a crear el array de NPCs
      for (let i = 0; i < 3; i++) {
        const newNpc = new Npc(this.canvas, 2, "blue");
        this.npcs.push(newNpc);
      }

      // this.npc.x = (this.canvas.width - this.npc.size) * Math.random();
      // this.npc.y = (this.canvas.width - this.npc.size) * Math.random();

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
