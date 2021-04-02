"use strict";

//Initialising instances
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let infoScreen;

function builDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
}
