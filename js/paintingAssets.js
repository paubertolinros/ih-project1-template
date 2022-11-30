//!!!!!!!!!!!! per cadascun dels quadres posar un html (exemple cards)
//Variable per HTML de l'obra d'art. En el cas que fos un Array d'objectes podria afegir més obres?
//Obra1
let gridAnColorsOne = `
  <div class="grid">
    <div id="a" class = "white">a</div>
    <div id="b" class = "white">b</div>
    <div id="c" class = "white">c</div>
    <div id="d" class = "white">d</div>
    <div id="e" class = "white">e</div>
    <div id="f" class = "white">f</div>
    <div id="g" class = "white">g</div>
  </div>
  `
//Paint colors
let colorsForPaint = ` 
  <div class="palette-colors">
    <button class="#015CA0 blue">Blue</button>
    <button class="#DE271D red">Red</button>
    <button class="#ECDB6B yellow">Yellow</button>
    <button class="#ffffff white">White</button>
    <button class="Grey grey">Grey</button>
    <button class="#000000 black">Black</button>
  </div>`
// Obra 1 per comprar
const painting1 = {
  a: "white",
  b: "white",
  c: "red",
  d: "blue",
  e: "white",
  f: "white",
  g: "yellow"
} 
const paintingHTML = `` // HTML de base

// HTMl elements
const losePage = document.getElementById('lose-page');
const winPage = document.getElementById('win-page');
const startPage = document.getElementById('start-page');
const startButton = document.getElementById('start');
const artWorkPage = document.getElementById('artwork-page');
const gamePage = document.getElementById('game-page');
const getSeconds = document.getElementById('seconds');
//const getButtonColors = document.querySelectorAll(".palette-colors button");
// el botó de la Game Page t'ha de portar a la pàgina de win or lose, és clicable
const finishButton = document.getElementById('check-button');
  
 //Aquí hauria de posar la foto de l'obra al html, perquè ara ho he posat directament a l'index HTML  
let artWorkpicture = 0;

const newArtWork = document.querySelector(".art-work")
const newColorsPalette = document.querySelector(".paint-colors")