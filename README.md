# Frequencies Game

## Description

Juego basado en la película Frequencies, ambientada en un mundo donde las personas se rigen por frecuencias. Si una persona tiene la frecuencia muy alta tiene buena suerte pero no tiene emociones, si tiene la frecuencia baja es torpe pero tiene emociones. El jugador/personaje empieza con 0 unidades de frecuencia e inicia el juego donde hay otros elementos moviéndose aleatoriamente por el canvas con diferentes niveles de frecuencia. Su misión es ir colisionando con el resto de elementos para ir nivelando las frecuencias en una cuenta atrás. Si logra el equilibrio entre todos los elementos sube de nivel y se encuentra con otra pantalla con más personajes con los que nivelar la frecuencia. Si acaba el tiempo y no logra el equilibrio de frecuencias pierde una vida, tiene tres vidas.

## MVP (DOM - CANVAS)

El jugador debe moverse e interactuar con otro elemento que se mueve aleatoriamente por el canvas para lograr equilibrar su nivel de frecuencia. El jugador tiene 0 nivel de frecuencia y el otro elemento tiene 10, cuando colisionen ambos deben ponerse a 5. En este MVP hay una cuenta atrás de 10 segundos. Si consigue equilibrarse gana, si pasa el tiempo sin equilibrarse pierde.

The player has to interact with another element that move randomly around the canvas to balance their frequency level. The player has 0 level of frequency and the other element has 10. When they collide, both levels must have equal frequency level, 5 in this case. In this MVP there's a countdown of 10 seconds. If the player gets balanced with the other element wins, if the time runs out without getting balanced, the player loses.

## Backlog

- Add more players and time
- Add score
- Add lives
- Once logic is completed, create graphical interface
- Add sounds
- Add difficulty levels

## Data structure

1.  index.html

2.  main.js

3.  game.js

4.  player.js

5.  timer.js

    ### 1. index.html

    ### 2. main.js

    Functions required:

    1. buildDOM(htmlString) {}: Should take a string of hardcoded HTML, create an element and append it to the DOM.

    2. createSplashScreen() {}: Function to create the splashScreen that we will create passing an htmlString to buildDom() function and append it to the body. This function will also create the startButton constant in which we will add an addEventListener function to call the startGame function with a "click" event.

    3. removeSplashScreen() {}: Function to remove the splashScreen created in createSplashScreen(). The value of splashScreen still exists but the code has been removed from the DOM.

    4. createGameScreen() {}: Function to create the gameScreen passing an htmlString to buildDom() function and append it to the body.

    5. removeGameScreen() {}: Function to remove the gameScreen.

    6. createGameOverScreen() {}:

    7. removeGameOverScreen() {}:

    8. startGame() {}: Function that includes the functions removeSplashScreen() and createGameScreen(). In this function is also created one game instance of Game class, the gameScreen created in createGameScreen() is assigned to this instance and we can access to game.start() method.

    9. endGame() {}:

    10. createInfoScreen() {}:

    11. removeInfoScreen() {}:

    ### 3. game.js

    1. Includes 1 Game class with the canvas, player, gameIsOver, timer and null properties.

    Includes X methods:

         Start: includes the following commands:

            Selects the lives and score elements from the gameScreen.
            Generates canvas container and dimensions.
            Generates a Player instance.

    ### 4. player.js

    1.  Includes 1 Player class with the lives, the size, the initial position, the direction and the speed properties.

    Includes X methods:

        setDirection
        updatePosition
        handleScreenCollision
        removeLive
        draw

###

​

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- infoScreen
- winScreen

## Task

- Main - buildDom
- Main - createSplashScreen
- Main - addEventListener
- Main - removeSplashScreen
- Main - createGameScreen
- Main - startGame

- Game - start
- Game - clearCanvas
- Game - updateCanvas
- Game - drawCanvas
- Game - setGameOver
- Game - collision
- Game - addEventListener

## Links

### Trello

[Link url](https://trello.com/b/O7sQeAVI/frequencies-game)

### Git

URls for the project repo and deploy [Link Repo](https://github.com/pdelbarrio/frequencies-game) [Link Deploy](http://github.com/)

### Slides

URls for the project presentation (slides) [Link Slides.com](http://slides.com/)
