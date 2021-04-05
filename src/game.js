class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.player = null; //PLAYER
    this.npc = null; //NPC
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
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

    //inicialmente la mainentity será new Entity, cuando funcione correctamente haremos
    this.player = new Entity(this.canvas, 5, "red"); //this.player = new Player

    //Idealmente la SecEntity inicial debería aparecer en algun punto aleatorio del canvas
    this.npc = new Entity(this.canvas, 20, "blue"); //this.player = new Npc

    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        this.npc.setDirection("up"); //this.npc will move randomly in the canvas
        this.player.setDirection("up");
      } else if (event.key === "ArrowDown") {
        this.npc.setDirection("down"); //this.npc will move randomly in the canvas
        this.player.setDirection("down");
      }
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }
  startLoop() {
    const loop = () => {
      //1. ACTUALIZAR los estados del jugador y las otras entidades
      // -- 1.0 Nuestro Player ya está creada en la función start
      // -- 1.1 Crear los otros NPC en posiciones aleatorias
      // -- 1.2 Comprobar si el Player ha colisionado con algun NPC
      this.checkCollisions();

      // -- 1.3 Actualizar la posición del jugador y del/los NPC
      this.player.updatePosition();
      this.npc.updatePosition();

      this.player.handleScreenCollision();
      this.npc.handleScreenCollision();
      // -- 1.4 Mover las secEntity (teoricamente no hace falta
      //-- comprobar si están fuera de la pantalla ya que son objetos de la clase
      //-- SecEntity hija de clase Entity donde definiré en handleScreenCollision() que no
      // -- puedan salir del canvas)
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
    };
    window.requestAnimationFrame(loop);
  }
  checkCollisions() {
    if (this.player.didCollide(this.npc)) {
      console.log("Main Entity and Second Entity balance their frequencies");
    }
  }
  gameOver() {}
  updateGameStats() {}
}
