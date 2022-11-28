window.onload = function () {
  const game = new Game(/*squares*/);//si poso squares no em funciona, em diu que no està definit
  const paintingColors = new PaintingColors(colors);
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const artWorkPage = document.getElementById('artwork-page');
  const gamePage = document.getElementById('game-page');
  const losePage = document.getElementById('lose-page');
  const winPage = document.getElementById('win-page');
  // cada quadrat és clicable
  game.squares = document.querySelectorAll('.grid div').forEach((elem) => {
    elem.addEventListener("click", () => console.log("button clicked!"))
  });
  // cada color és clicable
  paintingColors.colors = document.querySelectorAll()
  const finishButton = document.getElementById('check-button');
  // cada botó última pàgina (guanyar/perdre) et porta a la pàgina d'inici
  const backMenuButton = document.querySelectorAll('.menu-button').forEach((elem) => {
    elem.onclick = ()=> {
    startPage.style = "display: flex"
    winPage.style = "display: none";
    losePage.style = "display: none";
  }
  })
  console.log(backMenuButton)
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
  finishButton.onclick = function () {
    gamePage.style = "display: none";
    winPage.style = "display: flex";
    losePage.style = "display: none"
  }
}