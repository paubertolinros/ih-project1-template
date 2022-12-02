//!!!!!!!!!!!! per cadascun dels quadres posar un html (exemple cards)
//Variable per HTML de l'obra d'art. En el cas que fos un Array d'objectes podria afegir més obres?
//Obra1
/*let gridAndColorsOne = `
  <div id="paint">`
  class="grid"
  "class="grid2"
  */

let gridAndColorsOne = `
  <div id ="ArtworkGrid" >
    <div id="a0" class = "white">a</div>
    <div id="a1" class = "white">b</div>
    <div id="a2" class = "white">c</div>
    <div id="a3" class = "white">d</div>
    <div id="a4" class = "white">e</div>
    <div id="a5" class = "white">f</div>
    <div id="a6" class = "white">g</div>
  </div>
  `
let gridAndColorsTwo = `
    <div id = "ArtworkGrid" >
      <div id="a0" class="white">a0</div>
      <div id="a1" class="white">a1</div>
      <div id="a2" class="white">a2</div>
      <div id="a3" class="white">a3</div>
      <div id="a4" class="white">a4</div>
      <div id="a5" class="white">a5</div>
      <div id="a6" class="white">a6</div>
      <div id="a7" class="white">a7</div>
      <div id="a8" class="white">a8</div>
      <div id="a9" class="white">a9</div>
      <div id="a10" class="white">a10</div>
      <div id="a11" class="white">a11</div>
      <div id="a12" class="white">a12</div>
      <div id="a13" class="white">a13</div>
      <div id="a14" class="white">a14</div>
      <div id="a15" class="white">a15</div>
      <div id="a16" class="white">a16</div>
      <div id="a17" class="white">a17</div>
      <div id="a18" class="white">a18</div>
      <div id="a19" class="white">a19</div>
    </div>
`

// Obra 1 per comprar
const painting1Solution = {
  a0: "white",
  a1: "white",
  a2: "red",
  a3: "blue",
  a4: "white",
  a5: "white",
  a6: "yellow"
} 
// if (game.level === 2) {
//      nextLevelButton.setAttribute('disabled', '')
//     }
// Obra 2 per comprar
const painting2Solution = {
  a0: "grey",
  a1: "white",
  a2: "yellow",
  a3: "grey",
  a4: "white",
  a5: "red",
  a6: "yellow",
  a7: "grey",
  a8: "white",
  a9: "white",
  a10: "black",
  a11: "grey",
  a12: "white",
  a13: "yellow",
  a14: "white",
  a15: "blue",
  a16: "red",
  a17: "white",
  a18: "black",
  a19: "white"
} 

//Button colors
let colorsForPaint = ` 
  <div class="palette-colors">
    <button class="#015CA0 blue"></button>
    <button class="#DE271D red"></button>
    <button class="#ECDB6B yellow"></button>
    <button class="#ffffff white"></button>
    <button class="#d4d4d4 grey"></button>
    <button class="#000000 black"></button>
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

const getDiv = document.getElementById("ArtworkGrid");