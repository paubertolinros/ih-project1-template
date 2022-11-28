const colors = [
  basicArtwok = [
    { color: "red" },
    { color: "blue" },
    { color: "yellow" },
    { color: "black" },
    { color: "white"}
  ],
  intermediateArtwok = [
    { color: "red" },
    { color: "blue" },
    { color: "yellow" },
    { color: "black" },
    { color: "white" },
    { color: "grey"}
  ]
]
//Variable per HTML de l'obra d'art
let gridAnColors = `
        <div class="grid">
          <div class="a">a</div>
          <div class="b">b</div>
          <div class="c">c</div>
          <div class="d">d</div>
          <div class="e">e</div>
          <div class="f">f</div>
          <div class="g">g</div>
        </div>
        <div class="palette-colors">
          <button class="blue">Blue</button>
          <button class="red">Red</button>
          <button class="yellow">Yellow</button>
          <button class="white">White</button>
          <button class="Grey">Grey</button>
          <button class="black">Black</button>
        </div>
        `
const squares = 0;
const game = new Game(squares);
const paintingColors = new PaintingColors(colors);
// això és el mateix que posar window.addEventListener("load", (event) => {})
window.onload = function () {
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const artWorkPage = document.getElementById('artwork-page');
  const gamePage = document.getElementById('game-page');
  const losePage = document.getElementById('lose-page');
  const winPage = document.getElementById('win-page');

  // Carregar obra d'art al HTML
  const newArtWork = document.querySelector(".art-work")
  console.log(newArtWork)
  newArtWork.innerHTML = gridAnColors;

  // cada quadrat és clicable i he guardat al paràmetre els squares del html, però això només em permetrà jugar amb aquest quadre...
  game.grid = document.querySelectorAll('.grid div').forEach((elem) => {
    elem.addEventListener("click", () => console.log("square clicked!"));
  });
  // cada color és clicable
  const getButtonColors = document.querySelectorAll(".palette-colors button").forEach((elem) => {
    elem.addEventListener("click", () => console.log("color button clicked!"));
  });
  // el botó de la Game Page t'ha de portar a la pàgina de win or lose, és clicable
  const finishButton = document.getElementById('check-button');
  // cada botó última pàgina (guanyar/perdre) et porta a la pàgina d'inici
  const backMenuButton = document.querySelectorAll('.menu-button').forEach((elem) => {
    elem.onclick = () => {
      startPage.style = "display: flex"
      winPage.style = "display: none";
      losePage.style = "display: none";
    }
  });
  //gamePage.style = "display: flex"//només per poder treballar en la pàgina del joc
  startButton.onclick = function () {
    artWorkPage.style = "display: flex"
    startPage.style = "display: none";
    setTimeout(() => {
    artWorkPage.style = "display: none"
    gamePage.style = "display: flex"
    }, 3000)
    game.start(); //em funciona igual amb o sense, és perquè no hi ha res al method?
  }
  //depenent de si guanya o perd s'ha de mostrar una de les dues pàgines, ara està la de guanyar
  finishButton.onclick = function () {
    gamePage.style = "display: none";
    winPage.style = "display: flex";
    losePage.style = "display: none"
  }
  //per posar al html el grid
  //let htmlGrid = "";
  //game.grid.forEach((squares) => {
    //html += `<div class="grid">
          //<div class="a">a</div>
           //<div class="b">b</div>
          // <div class="c">c</div>
          // <div class="d">d</div>
          // <div class="e">e</div>
          // <div class="f">f</div>
          // <div class="g">g</div>
        // </div>`
  //})
}