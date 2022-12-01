//!!!!!!!!!!!! per cadascun dels quadres posar un html (exemple cards)
//Variable per HTML de l'obra d'art. En el cas que fos un Array d'objectes podria afegir més obres?
//Obra1
let gridAndColorsOne = `
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
let gridAndColorsTwo = `
    <ul class="grid2">
      <li id="a2" class="white">a</li>
      <li id="b2" class="white">b</li>
      <li id="c2" class="white">c</li>
      <li id="d2" class="white">d</li>
      <li id="e2" class="white">e</li>
      <li id="f2" class="white">f</li>
      <li id="g2" class="white">g</li>
      <li id="h2" class="white">h</li>
      <li id="i2" class="white">i</li>
      <li id="j2" class="white">j</li>
      <li id="k2" class="white">k</li>
      <li id="l2" class="white">l</li>
      <li id="m2" class="white">m</li>
      <li id="n2" class="white">n</li>
      <li id="o2" class="white">o</li>
      <li id="p2" class="white">p</li>
      <li id="q2" class="white">q</li>
      <li id="r2" class="white">r</li>
      <li id="s2" class="white">s</li>
      <li id="t2" class="white">t</li>
    </ul>
`

// Obra 1 per comprar
const painting1Solution = {
  a: "white",
  b: "white",
  c: "red",
  d: "blue",
  e: "white",
  f: "white",
  g: "yellow"
} 

// Obra 2 per comprar
const painting2Solution = {
  a: "white",
  b: "white",
  c: "red",
  d: "blue",
  e: "white",
  f: "white",
  g: "yellow"
} 

//Button colors
let colorsForPaint = ` 
  <div class="palette-colors">
    <button class="#015CA0 blue">Blue</button>
    <button class="#DE271D red">Red</button>
    <button class="#ECDB6B yellow">Yellow</button>
    <button class="#ffffff white">White</button>
    <button class="Grey grey">Grey</button>
    <button class="#000000 black">Black</button>
  </div>`

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