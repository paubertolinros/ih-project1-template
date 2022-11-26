window.onload = function () {
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const artWorkPage = document.getElementById('artwork-page');
  const gamePage = document.getElementById('game-page')
  
  startButton.onclick = function () {
    artWorkPage.style = "display: flex"
    startPage.style = "display: none";
    setTimeout(() => {
      artWorkPage.style = "display: none"
      gamePage.style = "display: flex"
    }, 3000)
    game.start();
  }
}