class Game{
  constructor() {
    this.pickedColorClass = [];
    this.pickedColors = [];
    this.maxAteempts = 10;
    this.attempts = 0;
    this.seconds = 3;
    this.intervalId = null;
    this.userAnswer = [];
    console.log(this.userAnswer)
  };
  _restSeconds() {
    this.seconds = this.seconds - 1; 
  };
  _stopSeconds() {
    clearInterval(this.intervalId);
    this.seconds = 3;
  }

  start() {
   // Carregar obra d'art al HTML
  //const newArtWork = document.querySelector(".art-work")
  newArtWork.innerHTML = gridAnColorsOne;
  // Carregar colors al HTML 
  //const newColorsPalette = document.querySelector(".paint-colors")
  newColorsPalette.innerHTML = colorsForPaint;
   // this._update(); //igual després la necessito
  };

  compareArtWorks() {
    let getRealResult =  Object.values(painting1)
    for (let i = 0; i < getRealResult.length; i++){
      if (this.userAnswer[i] === getRealResult[i]) {
        console.log("You win!:)")
        winPage.style = "display: flex";
        losePage.style = "display: none";
      }if (this.userAnswer[i] !== getRealResult[i]){
        console.log("You lose! :(")
        losePage.style = "display: flex";
        winPage.style = "display: none";
        break;
      }
    }
  }
  cleanAll() {
    const game = new Game();
    newArtWork.innerHTML = gridAnColorsOne;
   // this.userAnswer = [];
 }

}