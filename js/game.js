class Game{
  constructor(gridAnColorsOptions, rigthResult) {
    this.gridAnColorsOptions = gridAnColorsOptions;
    this.rigthResult = rigthResult;
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

  printArtWorkAndColors() {
    console.log("call print art work and colorss");
   // Carregar obra d'art al HTML
  //const newArtWork = document.querySelector(".art-work")
    newArtWork.innerHTML = this.gridAnColorsOptions;
  // Carregar colors al HTML 
  //const newColorsPalette = document.querySelector(".paint-colors")
    newColorsPalette.innerHTML = colorsForPaint;
   // this._update(); //igual després la necessito
    console.log(gridAnColorsOne);
    console.log(colorsForPaint);
  
  };

  compareArtWorks() {
    let getRealResult =  Object.values(this.rigthResult)
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
    // Tornar variable si s'ha guanyat o perdut 
    // return isWin; 
  }
  cleanAll() {
    this.userAnswer = [];
    //const game = new Game(painting1);
    newArtWork.innerHTML = gridAnColorsOne;
 }

}