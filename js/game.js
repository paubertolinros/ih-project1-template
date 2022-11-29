class Game{
  constructor(grid) {
    this.grid = grid;
    this.pickedSquare = [];
    this.pickedColors = [];
    this.realArtwork = undefined;
    this.attempts = 0;
    console.log(this.pickedColors)
    console.log(this.grid)
  };
  
// Per comprovar si s'han acertat els colors
  _compareSquares(myArtWork, definitiveArtwork) {
    if (myArtWork === definitiveArtwork) {
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