# Frequencies Game

## Description
This is a classic play catch game using HTML, CSS, JS & JS Canvas. The main objective of the game is easy:

- Catch all the crazy red balls.

By doing this, red balls will turn blue and will decrease their frequency/speed.

## MVP (DOM - CANVAS)

The player can be moved in four directions using the arrow keys in your keyboard. He has to chase the red balls which move randomly and quick through the canvas. Each time the player/blue ball touches a red ball, the red ball turns blue and decrease its speed (its frequency has been balanced). The player wins if he can touch all the red balls in 20 seconds, he has three lives. If he can't touch all the red balls, he loses.

## Backlog

- Add more npcs
- Add score
- Add lives
- Once logic is completed, create graphical interface
- Add sounds
- Add difficulty levels

## Data structure

1.  index.html

2.  main.js

3.  game.js

4.  entity.js

5.  player.js

6.  npc.js

7.  timer.js

    ### 1. index.html

    ### 2. main.js

    Functions required:

    1. buildDOM(htmlString) {}: Should take a string of hardcoded HTML, create an element and append it to the DOM.

    2. createSplashScreen() {}: Function to create the splashScreen that we will create passing an htmlString to buildDom() function and append it to the body. This function will also create the startButton constant in which we will add an addEventListener function to call the startGame function with a "click" event.

    3. removeSplashScreen() {}: Function to remove the splashScreen created in createSplashScreen(). The value of splashScreen still exists but the code has been removed from the DOM.

    4. createGameScreen() {}: Function to create the gameScreen passing an htmlString to buildDom() function and append it to the body.

    5. removeGameScreen() {}: Function to remove the gameScreen.

    6. createWinnerScreen() {}: Function to create the winnerScreen passing an htmlString to builDom() function and append it to the body.

    7. removeWinnerScreen() {}: Function to remove winnerScreen.

    8. createGameOverScreen() {}: Function to create the gameOverScreen passing an htmlString to builDom() function and append it to the body.

    9. removeGameOverScreen() {}: Function to remove the gameOverScreen.

    8. startGame() {}: Function that includes the functions removeSplashScreen() and createGameScreen(). In this function is also created one game instance of Game class, the gameScreen created in createGameScreen() is assigned to this instance and we can access to game.start() method.

    9. endGame() {}:

    ### 3. game.js

    1. Includes Game class with the following properties:
        - Canvas.
        - Player.
        - Array of Npcs.
        - gameIsOver.
        - gameScreen.
        - gameOverScreen.
        - score.
        - livesElement.
        - timer.
        - npcQuantiy.
        - framesCounter.
         gameIsOver, timer and null properties.

    2. Includes the following methods:
        - start(): includes the following commands:
            - Selects the lives and score elements from the gameScreen.
            - Generates canvas container and dimensions.
            - Generates a Player instance.
            - In the handleKeyDown function we have an addEventListener to setDirection when a key is pressed.

        - startLoop(): 
        - checkCollisions():
        - updateTimer():
        - gameOver(status):
        - updateGameStats():        

    ### 4. entity.js

    1.  Includes Entity class with the with the following properties:
        - Canvas.
        - ctx.
        - size.
        - speed.
        - color.

    2. Doesn't include any method.

        
    ### 5. player.js

    1. Player extends Entity class and has the following properties:
        - width.
        - height.
        - direction.
        - lives.
        - x.
        - y.
        - image.
        - image.src.
        - frames.
        - framesIndex.
    
    2. Includes the following methods:
        - updatePosition() 
        - balance(npc)
        - handleScreenCollision()
        - didCollide(npc)
        - removeLife()
        - draw(framesCounter)
        - animate(framesCounter)

    ### 6. npc.js

    1. NPC extends Entity class and has the following properties:
        - width
        - height
        - direction
        - x
        - y
        - speed
        - hasBeenBalanced
        - counter
        - image
        - image.src
        - frames
        - framesIndex
    
    2. Includes the following methods:
        - updatePosition()
        - draw(framesCounter)
        - animate(framesCounter)

    ### 7. timer.js

    1. Includes Timer Class with the following properties:
        - currentTime
        - intervalId

    2. Includes the following methods:
        - startCount(callback)
        - getMinutes()
        - getSeconds()
        - twoDigitsNumber(num)
        - stopCount()
        - resetCount()
        - splitCount(minutes, seconds)
    
    Timer is a decreasing counter in a 1 second interval. Its methods return minutes and seconds in 2 digit format values according to counter value. Returns both values so they can be printed into the DOM. When reaches 0, turns the gameOver flag into true, calls endGame and createEndGame methods.

###

​

## States y States Transitions

- splashScreen
    - Start the game
    - Goes to gameScreen when Start button is clicked

- gameScreen
    - Game running while Countdown > 0
    - Goes to gameoverScreen when lives < 0

- gameoverScreen 
    - Shows Game Over message
    - Goes back to gameScreen when Start Again button is clicked

- winScreen
    - Shows 'You Win' message
    - Goes back to gameScreen when Start Again button is clicked

## Task

- Main - buildDom
- Main - createSplashScreen
- Main - addEventListener
- Main - removeSplashScreen
- Main - createGameScreen
- Main - startGame
- Game - start
- Game - startLoop
- Entity - setDirection
- Player - updatePosition
- Entity - handleScreenCollision
- Entity - draw
- Game - handleKeyDown
- Game - checkCollisions
- Npc - updatePosition
- Entity - didCollide
- Entity - removeLife

## Links

### Trello

[Link url](https://trello.com/b/O7sQeAVI/frequencies-game)

### Git

URls for the project repo and deploy [Link Repo](https://github.com/pdelbarrio/frequencies-game) [Link Deploy](https://pdelbarrio.github.io/frequencies-game/)

### Slides

URls for the project presentation [Link Slides.com](https://docs.google.com/presentation/d/1Kvlvr_PY9buggDArpTdxO4SjCEyPKqkAucrx3zwd5as/edit?usp=sharing)
