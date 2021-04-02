# Frequencies Game

## Description

Juego basado en la película Frequencies, ambientada en un mundo donde las personas se rigen por frecuencias. Si una persona tiene la frecuencia muy alta tiene buena suerte pero no tiene emociones, si tiene la frecuencia baja es torpe pero tiene emociones. El jugador/personaje empieza con 0 unidades de frecuencia e inicia el juego donde hay otros elementos moviéndose aleatoriamente por el canvas con diferentes niveles de frecuencia. Su misión es ir colisionando con el resto de elementos para ir nivelando las frecuencias en una cuenta atrás. Si logra el equilibrio entre todos los elementos sube de nivel y se encuentra con otra pantalla con más personajes con los que nivelar la frecuencia. Si acaba el tiempo y no logra el equilibrio de frecuencias pierde una vida, tiene tres vidas.



## MVP (DOM - CANVAS)

El jugador debe moverse e interactuar con otro elemento que se mueve aleatoriamente por el canvas para lograr equilibrar su nivel de frecuencia. El jugador tiene 0 nivel de frecuencia y el otro elemento tiene 10, cuando colisionen ambos deben ponerse a 5. En este MVP hay una cuenta atrás de 10 segundos. Si consigue equilibrarse gana, si pasa el tiempo sin equilibrarse pierde.

The player has to interact with another element that move randomly around the canvas to balance their frequency level. The player has 0 level of frequency and the other element has 10. When they collide, both levels must have equal frequency level, 5 in this case. In this MVP there's a countdown of 10 seconds. If the player get balanced with the other element wins, if the times run out without getting balanced, the player loses.

## Backlog

- Add more players and time
- Add score
- Add lives
- Once logic is completed, create graphical interface
- Add sounds
- Add difficulty levels

## Data structure

1. index.html

2. main.js

3. game.js

4. player.js

5. timer.js

   ### 1. index.html

   ### 2. main.js

   Functions required:

   buildDOM(string) {}: Should take a string of hardcoded HTML, create an element and append it to the DOM

   

   

   

   

   ### 

   ​	

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen

## Task

Task definition in order of priority

## Links

### Trello

[Link url](https://trello.com/b/O7sQeAVI/frequencies-game)

### Git

URls for the project repo and deploy [Link Repo](http://github.com/) [Link Deploy](http://github.com/)

### Slides

URls for the project presentation (slides) [Link Slides.com](http://slides.com/)