class Game{
  constructor(gridAndColorsOptions, rigthResult, level, correctImage) {
    this.gridAndColorsOptions = gridAndColorsOptions;
    this.rigthResult = rigthResult;
    this.correctImage = correctImage;
    this.pickedColorClass = [];
    this.pickedColors = [];
    this.maxAteempts = 10;
    this.attempts = 0;
    this.seconds = 7;
    this.intervalId = null;
    this.userAnswer = [];
    this.level = level;
    console.log(this.userAnswer)
    console.log(this.pickedColors)
  };
  _restSeconds() {
    this.seconds = this.seconds - 1; 
  };
  _stopSeconds() {
    clearInterval(this.intervalId);
    this.seconds = 7;
  }

  printArtWorkImage() {
    const artWorkImage = document.getElementById("artwork-image");
    artWorkImage.src=this.correctImage;
  }

  printArtWorkAndColors() {
    console.log("call print art work and colorss");
   // Carregar obra d'art al HTML
  //const newArtWork = document.querySelector(".art-work")
    newArtWork.innerHTML = this.gridAndColorsOptions;
    const getDiv = document.getElementById("ArtworkGrid");
    getDiv.classList.add(`grid${this.level}`)
    console.log("class a ver")
    //codi ale
    // const div. = docvument(of) agafo el ID dels grids i li agegeixo la class
    // div.classList.add(`grid${this.level}`)
  // Carregar colors al HTML 
  //const newColorsPalette = document.querySelector(".paint-colors")
    newColorsPalette.innerHTML = colorsForPaint;
   // this._update(); //igual després la necessito
    console.log(gridAndColorsOne);
    console.log(colorsForPaint);
  
  };

  compareArtWorks() {
    let getRealResult =  Object.values(this.rigthResult)
    for (let i = 0; i < getRealResult.length; i++){
      if (this.userAnswer[i] === getRealResult[i]) {
        console.log("You win!:)")
        winPage.style = "display: flex";
        losePage.style = "display: none";
      } else if (this.userAnswer[i] !== getRealResult[i]){
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
    this.printArtWorkAndColors();
 }

}