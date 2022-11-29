const colors = [
  basicArtwok = [
    { name: "red" },
    { name: "blue" },
    { name: "yellow" },
    { name: "black" },
    { name: "white"}
  ],
  intermediateArtwok = [
    { name: "red" },
    { name: "blue" },
    { name: "yellow" },
    { name: "black" },
    { name: "white" },
    { name: "grey"}
  ]
]

let realArtwork = `
    <div class="real-grid">
      <div class="a white">a</div>
      <div class="b white">b</div>
      <div class="c red">c</div>
      <div class="d blue">d</div>
      <div class="e white">e</div>
      <div class="f white">f</div>
      <div class="g yellow">g</div>
    </div>
    `
    console.log(realArtwork)
//!!!!!!!!!!!! per cadascun dels quadres posar un html (exemple cards)
//Variable per HTML de l'obra d'art. En el cas que fos un Array d'objectes podria afegir més obres?
let gridAnColors = `
    <div class="grid">
      <div class="a white">a</div>
      <div class="b white">b</div>
      <div class="c red">c</div>
      <div class="d blue">d</div>
      <div class="e white">e</div>
      <div class="f white">f</div>
      <div class="g yellow">g</div>
    </div>
    `
    console.log(gridAnColors)
let colorsForPaint = ` 
    <div class="palette-colors">
      <button class="#015CA0 blue">Blue</button>
      <button class="#DE271D red">Red</button>
      <button class="#ECDB6B yellow">Yellow</button>
      <button class="#ffffff white">White</button>
      <button class="Grey grey">Grey</button>
      <button class="#000000 black">Black</button>
    </div>`
 //Aquí hauria de posar la foto de l'obra al html, perquè ara ho he posat directament a l'index HTML  
let artWorkpicture = 0;

// on he de posar les següents duies línies? a fora del onload o dins?
const game = new Game(gridAnColors);
const paintingColors = new PaintingColors(colorsForPaint);
// això és el mateix que posar window.addEventListener("load", (event) => {})
window.onload = function () {
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const artWorkPage = document.getElementById('artwork-page');
  const gamePage = document.getElementById('game-page');
  const losePage = document.getElementById('lose-page');
  const winPage = document.getElementById('win-page');

   //gamePage.style = "display: flex"//només per poder treballar en la pàgina del joc
  startButton.onclick = function () {
    artWorkPage.style = "display: flex";
    startPage.style = "display: none";
    setTimeout(() => {
      artWorkPage.style = "display: none";
      gamePage.style = "display: flex";
    }, 3000);
    game.start(); //em funciona igual amb o sense, és perquè no hi ha res al method?
  }

  // Carregar obra d'art al HTML
  const newArtWork = document.querySelector(".art-work")
  newArtWork.innerHTML = gridAnColors;

  // Carregar colors al HTML 
  const newColorsPalette = document.querySelector(".paint-colors")
  newColorsPalette.innerHTML = colorsForPaint;

 
  // cada color és clicable
  const getButtonColors = document.querySelectorAll(".palette-colors button");
  getButtonColors.forEach((elem) => {
    elem.addEventListener("click", () => {
      console.log(`${elem.classList[0]} color button clicked!`)
      game.pickedColors.push(elem.classList[0])
    //hauria d'agafar la class que és el color, push a l'array pickedColors i després quan fa click al quadre agafa el color de l'array i el posa al background del quadrat  
   //let getColorClass = getButtonColors.className//.forEach((elem) => elem.classList)//!!!!!!!!!!!!!!!!!!!!
      //console.log(getColorClass)   
    });
  });

  // cada quadrat és clicable i he guardat al paràmetre els squares del html, però això només em permetrà jugar amb aquest quadre...
  const geometricForms = document.querySelectorAll('.grid div')
  console.log(geometricForms)
  geometricForms.forEach((elem) => {
    //Crec que se m'està anant l'olla, vaig a desconnectar 
    elem.addEventListener("click", () => {
      console.log(`${elem.className} square clicked!`)
      let getcolor = game.pickedColors[0]
      console.log(`${getcolor} is fantastic!`)
      elem.style.background = `${getcolor}`
      game.pickedColors = [];
    });
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
 
  //depenent de si guanya o perd s'ha de mostrar una de les dues pàgines, ara està la de guanyar
  finishButton.onclick = function () {
    const getArtWorkCompare = document.querySelectorAll(".grid div")
    getArtWorkCompare.forEach((elem) => {
     _compareSquares(elem.style) === (elem.style)
    })
    gamePage.style = "display: none";
    winPage.style = "display: flex";
    losePage.style = "display: none"
  }
}