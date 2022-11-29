class Game{
  constructor(grid) {
    this.grid = grid;
    this.pickedColorClass = [];
    this.pickedColors = [];
    this.realArtwork = undefined;
    this.maxAteempts = 10;
    this.attempts = 0;
    this.seconds = 3;
    console.log(this.pickedColors)
    console.log(this.grid)
  };
  _restSeconds() {
    this.seconds = this.seconds - 1;
    
  }
// Per comprovar si s'han acertat els colors
  _compareSquares(myArtWorkk, realArtwork) {
    if (myArtWorkk === realArtwork) {
      return true;
      } else {
      return false;
    };
  }

  // Si guanya es mostra una pàgina, si perd una altra
  _lastPage() {

  }

  _update() {
  
  }

  start() {
    
    this._update(); //igual després la necessito
  }

}