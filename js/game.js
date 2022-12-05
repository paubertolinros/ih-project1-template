class Game{
  constructor(gridAndColorsOptions, rigthResult, level, correctImage, winPageThings, seconds, hints) {
    this.gridAndColorsOptions = gridAndColorsOptions;
    this.rigthResult = rigthResult;
    this.correctImage = correctImage;
    this.pickedColorClass = [];
    this.pickedColors = [];
    this.seconds = seconds;
    this.intervalId = null;
    this.userAnswer = [];
    this.level = level;
    this.hints = hints;
    this.winPageThings = winPageThings;
    console.log(this.seconds)
  };
  /*_Interval() {
    this.intervalId = setInterval(() =>
   this.seconds = this.seconds -1)
  ,1000}*/
  
  _restSeconds() {
    this.seconds--; 
    console.log(this.seconds)
  };
  _stopSeconds() {
    clearInterval(this.intervalId);
  }

  _printResetCorrectSeconds(){
    getSeconds.textContent = this.seconds;
  }
  printArtWorkImage() {
    const artWorkImage = document.getElementById("artwork-image");
    artWorkImage.src=this.correctImage;
  }
  
  printArtWorkAndColors() {
    newArtWork.innerHTML = this.gridAndColorsOptions;
    const getDiv = document.getElementById("ArtworkGrid");
    getDiv.classList.add(`grid${this.level}`);
    newColorsPalette.innerHTML = colorsForPaint;
  };
  _printHints() {
    getHintsContainer.innerHTML = this.hints;
  }

  compareArtWorks() {
    let getRealResult =  Object.values(this.rigthResult)
    for (let i = 0; i < getRealResult.length; i++){
      if (this.userAnswer[i] === getRealResult[i]) {
        winPage.style = "display: flex";
        losePage.style = "display: none";
        this.printWinPage();
        //this._printResetCorrectSeconds()
      } else if (this.userAnswer[i] !== getRealResult[i]){
        losePage.style = "display: flex";
        winPage.style = "display: none";
        break;
      }
    }
  }
  cleanAll() {
    this.userAnswer = [];
    this.level = 1;
    this.printArtWorkAndColors();
  }
  
  /*changeSecondColor() {
    if (this.seconds === 14) {
      getSeconds.style.color = "#015CA0";
    } if (this.seconds === 13) {
      getSeconds.style.color = "#ECDB6B";
    } if (this.seconds === 12) {
      getSeconds.style.color = "#aaaaaa"
    } if (this.seconds === 11) {
      getSeconds.style.color = "#DE271D"
    } if (this.seconds === 10) {
      getSeconds.style.color = "#015CA0";
    } if (this.seconds === 9) {
      getSeconds.style.color = "#ECDB6B"
    } if (this.seconds === 8) {
      getSeconds.style.color = "#aaaaaa"
    } if (this.seconds === 7) {
      getSeconds.style.color = "#015CA0";
    } if (this.seconds === 6) {
      getSeconds.style.color = "#ECDB6B";
    } if (this.seconds === 5) {
      getSeconds.style.color = "#aaaaaa"
    } if (this.seconds === 4) {
      getSeconds.style.color = "#DE271D"
    } if (this.seconds === 3) {
      getSeconds.style.color = "#015CA0";
    } if (this.seconds === 2) {
      getSeconds.style.color = "#ECDB6B"
    } if (this.seconds === 1) {
      getSeconds.style.color = "#aaaaaa"
    } if (this.seconds === 1) {
      getSeconds.style.color = "#DE271D"
    }
  }*/

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
        break
        
      }
  }

  printWinPage() {
    artWorkWinPage.innerHTML = this.winPageThings;
  }

}