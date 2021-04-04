class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.mainentity = null;
    this.secentity = null;
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

    //inicialmente la mainentity será new Entity, cuando funcione correctamente haremos mainentity = new MainEntity
    this.mainentity = new Entity(this.canvas, 5);
    //Idealmente la SecEntity inicial debería aparecer en algun punto aleatorio del canvas
    this.secentity = new Entity(this.canvas, 20);
    //Primero probaremos creando una secentity de la Entity
    //this.secentity = new Entity(this.canvas, "posicion diferente de mainentity")
    //Cuando confirmemos que colisiona crearemos SecEntity en posición random
    //this.secentity = new SecEntity(this.canvas, X)

    // document.body.addEventListener("keydown", (event) => {
    //   if (event.key === "ArrowUp") this.player.setDirection("up");
    //   else if (event.key === "ArrowDown") this.player.setDirection("down");
    // });
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") this.mainentity.setDirection("up");
      else if (event.key === "ArrowDown") this.mainentity.setDirection("down");
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }
  startLoop() {
    const loop = () => {
      //1. ACTUALIZAR los estados del jugador y las otras entidades
      // -- 1.0 Nuestra mainEntity ya está creada en la función start
      // -- 1.1 Crear las otras secEntity en posiciones aleatorias
      // -- 1.2 Comprobar si el mainEntity ha colisionado con alguna secEntity
      this.checkCollisions();
      // -- 1.3 Actualizar la posición del jugador
      this.mainentity.updatePosition();
      this.mainentity.handleScreenCollision();
      // -- 1.4 Mover las secEntity (teoricamente no hace falta
      //-- comprobar si están fuera de la pantalla ya que son objetos de la clase
      //-- SecEntity hija de clase Entity donde definiré en handleScreenCollision() que no
      // -- puedan salir del canvas)
      //
      //2. LIMPIAR CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //3. DIBUJAR DE NUEVO EL CANVAS CON LAS POSICIONES ACTUALIZADAS
      this.mainentity.draw();
      this.secentity.draw();
      //4. ROMPER EL LOOP EN CASO DE GAME OVER (LIVES <=0 O TIMER <=0)
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
      //5. ACTUALIZAR PUNTUACIÓN Y VIDAS QUE MOSTRAMOS POR PANTALLA (HTML)
    };
    window.requestAnimationFrame(loop);
  }
  checkCollisions() {
    if (this.mainentity.didCollide(this.secentity)) {
      console.log("Main Entity and Second Entity balance their frequencies");
    }
  }
  gameOver() {}
  updateGameStats() {}
}
