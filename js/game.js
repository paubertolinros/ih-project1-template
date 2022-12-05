class Game{
  constructor(gridAndColorsOptions, rigthResult, level, correctImage, winPageInfo, seconds, hints) {
    this.gridAndColorsOptions = gridAndColorsOptions;
    this.rigthResult = rigthResult;
    this.correctImage = correctImage;
    this.pickedColorClass = [];
    this.pickedColors = [];
    this.userAnswer = [];
    this.seconds = seconds;
    this.intervalId = null;
    this.level = level;
    this.hints = hints;
    this.winPageInfo = winPageInfo;
    console.log(this.pickedColorClass)
    console.log(this.pickedColors)
  };
  _restSeconds() {
    this.seconds--; 
  };
  _stopSeconds() {
    clearInterval(this.intervalId);
  };
  _printResetCorrectSeconds(){
    getSeconds.textContent = this.seconds;
  };
  printArtWorkImage() {
    const artWorkImage = document.getElementById("artwork-image");
    artWorkImage.src=this.correctImage;
  };
  printArtWorkAndColors() {
    newArtWork.innerHTML = this.gridAndColorsOptions;
    const getDiv = document.getElementById("ArtworkGrid");
    getDiv.classList.add(`grid${this.level}`);
    newColorsPalette.innerHTML = colorsForPaint;
  };
  _printHints() {
    getHintsContainer.innerHTML = this.hints;
  };
  compareArtWorks() {
    let getRealResult =  Object.values(this.rigthResult)
    for (let i = 0; i < getRealResult.length; i++){
      if (this.userAnswer[i] === getRealResult[i]) {
        winPage.style = "display: flex";
        losePage.style = "display: none";
        this.printWinPage();
      } else if (this.userAnswer[i] !== getRealResult[i]){
        losePage.style = "display: flex";
        winPage.style = "display: none";
        break;
      };
    };
  };
  cleanAll() {
    this.userAnswer = [];
    this.level = 1;
    this.printArtWorkAndColors();
  };
  changeSecondColor() {
    switch (this.seconds) {
      case 14:
        getSeconds.style.color = "#015CA0";
        break;
      case 13:
        getSeconds.style.color = "#aaaaaa";
        break;
      case 12:
        getSeconds.style.color = "#DE271D";
        break;
      case 11:
        getSeconds.style.color = "#015CA0";
        break;
      case 10:
        getSeconds.style.color = "#ECDB6B";
        break;
      case 9:
        getSeconds.style.color = "#aaaaaa";
        break;
      case 8:
        getSeconds.style.color = "#DE271D";
        break;
      case 7:
        getSeconds.style.color = "#015CA0";
        break;
      case 6:
        getSeconds.style.color = "#ECDB6B";
        break;
      case 5:
        getSeconds.style.color = "#aaaaaa";
        break;
      case 4:
        getSeconds.style.color = "#DE271D";
        break;
      case 3:
        getSeconds.style.color = "#015CA0";
        break;
      case 2:
        getSeconds.style.color = "#ECDB6B";
        break;
      case 1:
        getSeconds.style.color = "#aaaaaa"
        break;
      case 0:
        getSeconds.style.color = "#DE271D";
        break;
      default:
        getSeconds.style.color = "#ECDB6B";
        break;    
    };
  };
  printWinPage() {
    artWorkWinPage.innerHTML = this.winPageInfo;
  };
};