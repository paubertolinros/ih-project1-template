// ArtWork level 1
let gridAndColorsOne = `
  <div id ="ArtworkGrid" >
    <div id="a0" class = "white"></div>
    <div id="a1" class = "white"></div>
    <div id="a2" class = "white"></div>
    <div id="a3" class = "white"></div>
    <div id="a4" class = "white"></div>
    <div id="a5" class = "white"></div>
    <div id="a6" class = "white"></div>
  </div>`;
// ArtWork level 2
let gridAndColorsTwo = `
<div id = "ArtworkGrid">
      <div id="a0" class="white"></div>
      <div id="a1" class="white"></div>
      <div id="a2" class="white"></div>
      <div id="a3" class="white"></div>
      <div id="a4" class="white"></div>
      <div id="a5" class="white"></div>
      <div id="a6" class="white"></div>
      <div id="a7" class="white"></div>
      <div id="a8" class="white"></div>
      <div id="a9" class="white"></div>
      </div>
`
// Artwork level 3
let gridAndColorsThree = `
  <div id = "ArtworkGrid" >
    <div id="a0" class="white"></div>
    <div id="a1" class="white"></div>
    <div id="a2" class="white"></div>
    <div id="a3" class="white"></div>
    <div id="a4" class="white"></div>
    <div id="a5" class="white"></div>
    <div id="a6" class="white"></div>
    <div id="a7" class="white"></div>
    <div id="a8" class="white"></div>
    <div id="a9" class="white"></div>
    <div id="a10" class="white"></div>
    <div id="a11" class="white"></div>
    <div id="a12" class="white"></div>
    <div id="a13" class="white"></div>
    <div id="a14" class="white"></div>
    <div id="a15" class="white"></div>
    <div id="a16" class="white"></div>
    <div id="a17" class="white"></div>
    <div id="a18" class="white"></div>
    <div id="a19" class="white"></div>
  </div>`;
// Result Artwork 1
const painting1Solution = {
  a0: "white",
  a1: "white",
  a2: "red",
  a3: "blue",
  a4: "white",
  a5: "white",
  a6: "yellow"
}; 
// Result Artwork 2
const painting2Solution = {
  a0: "red",
  a1: "red",
  a2: "white",
  a3: "white",
  a4: "white",
  a5: "yellow",
  a6: "white",
  a7: "white",
  a8: "black",
  a9: "blue"
 
}; 
// Result Artwork 3
const painting3Solution = {
  a0: "grey",
  a1: "white",
  a2: "yellow",
  a3: "grey",
  a4: "white",
  a5: "red",
  a6: "yellow",
  a7: "grey",
  a8: "white",
  a9: "white",
  a10: "black",
  a11: "grey",
  a12: "white",
  a13: "yellow",
  a14: "grey",
  a15: "blue",
  a16: "red",
  a17: "white",
  a18: "black",
  a19: "white"
};
//Hints Level 1
const hintsLevel1 = `
<main class="hints-container">
  <ul>
    <li><strong class="strong-li-hints blue">Blue</strong>: <span class= "hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints yellow">Yellow</strong>: <span class="hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints red">Red</strong>: <span class="hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints grey">Grey</strong>: <span class="hints-number-size">0</span> squares</li>
    <li><strong class="strong-li-hints black">Black</strong>: <span class="hints-number-size">0</span> squares</li>
    <li><strong class="strong-li-hints white">White</strong>: <span class="hints-number-size">4</span> squares</li>
  </ul>
</main>`;
//Hints Level 2
const hintsLevel2 = `
<main class="hints-container">
  <ul>
    <li><strong class="strong-li-hints blue">Blue</strong>: <span class= "hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints yellow">Yellow</strong>: <span class="hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints red">Red</strong>: <span class="hints-number-size">2</span> squares</li>
    <li><strong class="strong-li-hints grey">Grey</strong>: <span class="hints-number-size">0</span> squares</li>
    <li><strong class="strong-li-hints black">Black</strong>: <span class="hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints white">White</strong>: <span class="hints-number-size">5</span> squares</li>
  </ul>
</main>`
//Hints Level 3
const hintsLevel3 = `
<main class="hints-container">
  <ul>
    <li><strong class="strong-li-hints blue">Blue</strong>: <span class= "hints-number-size">1</span> square</li>
    <li><strong class="strong-li-hints yellow">Yellow</strong>: <span class="hints-number-size">3</span> squares</li>
    <li><strong class="strong-li-hints red">Red</strong>: <span class="hints-number-size">2</span> squares</li>
    <li><strong class="strong-li-hints grey">Grey</strong>: <span class="hints-number-size">5</span> squares</li>
    <li><strong class="strong-li-hints black">Black</strong>: <span class="hints-number-size">2</span> squares</li>
    <li><strong class="strong-li-hints white">White</strong>: <span class="hints-number-size">7</span> squares</li>
  </ul>
</main>
`;
//Button colors
let colorsForPaint = ` 
  <div class="palette-colors">
    <button class="#015CA0 blue"></button>
    <button class="#DE271D red"></button>
    <button class="#ECDB6B yellow"></button>
    <button class="#ffffff white"></button>
    <button class="#d4d4d4 grey"></button>
    <button class="#000000 black"></button>
  </div>`;
//Win Page Image level 1
const artWorkWinPage1 = `
  <img src="img/Composition II in Red, Blue and Yellow - Mondrian.jpeg" alt="Composition II in Red, Blue and Yellow - Mondrian">
  <h1 id = "title-win-page">Composition II in <font color="#DE271D">Red</font>, <font color="#015CA0">Blue</font> and <font color="#ECDB6B">Yellow</font> - 1930</h1>
  <p id="description-win-page"> <strong>Mondrian</strong> was born in 1872 in the Netherlands and died in 1944 in New York.<br>He developed a new concept of abstraction called <strong>Neoplasticism</strong>, a movement focused on reducing <strong>art to its minimum expression</strong> by only using the primary colors <strong>red, blue, white, yellow and black<strong>, and geometric forms.</p>`;
//Win Page Image level 2
const artWorkWinPage2 = `
  <img src="img/Composition 1921.jpg" alt="Composition 1921 - Mondrian">
  <h1 id = "title-win-page">Composition <font color="#DE271D">1</font><font color="#ECDB6B">9</font><font color="#015CA0">2</font><font color="#000000">1</font></h1>
  <p id="description-win-page">One of Mondrian's <strong>neoplastic art goals</strong> was to try to <strong>escape</strong> from <strong>sentimental</strong>, <strong>non subjective</strong> art, <strong>detaching</strong> it from any <strong>historical, cultural or geographical</strong> contingencies.</p>`;
//Win Page Image level 3
const artWorkWinPage3 = `
  <img src="img/Composition in Red, Yellow, blue and black - Mondrian.jpg" alt="in Red, Yellow, blue and black - Mondrian">
  <h1 id = "title-win-page">Composition en <font color="#DE271D">Rouge</font>, <font color="#ECDB6B">Jaune</font>, <font color="#015CA0">Bleu</font>, <font color="#000000">Noir</font> - 1921</h1>
  <p id="description-win-page"><strong>Mondrian</strong>, together with many other abstract artists, created the <strong><em>De Stijl</em></strong> movement one of which's main objectives was to <strong>facilitate the enforcement of Neoplasticism</strong> into <strong>architecture</strong> and/or any <strong>other artistic</strong> disciplines. As an example, there's the <strong>Schröder House</strong> (1924), which was inspired by Mondrian's neoplastic style and was designated by UNESCO as a World Heritage Site in 2000.</p>`;
// HTML selectors
////////Start Page
const startPage = document.getElementById('start-page');
const startButton = document.getElementById('start');
////////Show ArtWork Page
const artWorkPage = document.getElementById('artwork-page');
const getSeconds = document.getElementById('seconds');
const artWorkImage = document.getElementById("artwork-image");
////////Game Page
const gamePage = document.getElementById('game-page');
const finishButton = document.getElementById('check-button');
const getInstructions = document.getElementById("instructions");
const instructionsImage = document.getElementById("instru-left");
const hintsImage = document.getElementById("hints-rigth");
const getHintsContainer = document.getElementById("hints");
const newArtWork = document.querySelector(".art-work");
const newColorsPalette = document.querySelector(".paint-colors");
const getDiv = document.getElementById("ArtworkGrid");
////////Win Page
const winPage = document.getElementById('win-page');
////////Lose Page
const losePage = document.getElementById('lose-page');
const tryAgain = document.querySelector('.try-again-button');
const artWorkWinPage = document.getElementById("show-Artwork-description");

