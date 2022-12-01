

// això és el mateix que posar window.addEventListener("load", (event) => {})
window.onload = function () {
  let game = new Game(gridAndColorsOne, painting1Solution);
  //gamePage.style = "display: flex"//només per poder treballar en la pàgina del joc
  startButton.onclick = startGame;
    function startGame() { 
    artWorkPage.style = "display: flex";
    startPage.style = "display: none";
    game.intervalId = setInterval(() => {
      game._restSeconds();
      getSeconds.innerHTML = game.seconds;
    }, 1000)
    setTimeout(() => {
      artWorkPage.style = "display: none";
      gamePage.style = "display: flex";
      game._stopSeconds();
      getSeconds.innerHTML = game.seconds;
    }, 3000);
    game.printArtWorkAndColors();
    renderEverything(game);  
  }
  
 //Si crido la funció adalt, no em funciona la funció de pintar els quadrats
//game.printArtWorkAndColors();


 function colorButtons(game){
  // cada color és clicable
    document.querySelectorAll(".palette-colors button").forEach((elem) => {
      elem.addEventListener("click", () => {
        console.log(`${elem.classList[0]} color button clicked!`)
        game.pickedColors.push(elem.classList[0])
        game.pickedColorClass.push(elem.classList[1])
      //hauria d'agafar la class que és el color en #, push a l'array pickedColors i després quan 
      //fa click al quadre agafa el color de l'array i el posa al background del quadrat
      //També agafa la segona classe del botó, que és el color en format "nom" red, blue...
      });
    });
  };

  function changeSquareColor(game) {
  // cada quadrat és clicable 
    document.querySelectorAll('.grid div').forEach((elem) => {
      //Crec que se m'està anant l'olla, vaig a desconnectar 
      elem.addEventListener("click", () => {
        console.log(`${elem.id} square clicked!`)
        let getcolor = game.pickedColors[0];
        let getClass = game.pickedColorClass[0];
        console.log(`${getcolor} is fantastic!`)
        elem.style.background = `${getcolor}`;
        elem.classList.replace(elem.classList[0],`${getClass}`)
        game.pickedColors = [];
        game.pickedColorClass = [];
      });
    });
  };
//variable per poder accedir al resultat a la function next Level
let resultCompareArtWorks = null;
  function readyToCompare(game) {
    winPage.style = "display: none";
    losePage.style = "display: none";
    //depenent de si guanya o perd s'ha de mostrar una de les dues pàgines, ara està la de guanyar
    finishButton.onclick = function () {
      game.userAnswer.push(document.getElementById("a").classList.value);
      game.userAnswer.push(document.getElementById("b").classList.value);
      game.userAnswer.push(document.getElementById("c").classList.value);
      game.userAnswer.push(document.getElementById("d").classList.value);
      game.userAnswer.push(document.getElementById("e").classList.value);
      game.userAnswer.push(document.getElementById("f").classList.value);
      game.userAnswer.push(document.getElementById("g").classList.value);
      gamePage.style = "display: none";
      // intento guardar el resultat de comparar l'obra d'art i 
      resultCompareArtWorks = game.compareArtWorks();
      // console.log(resultCompareArtWorks) 
    }
  }
 //console.log(resultCompareArtWorks) 
//Per posar el següent nivell en el cas que guanyi, no funciona
  function nextLevel(game) {
    if (resultCompareArtWorks) {
      console.log("joc2")
      return game = new Game(gridAndColorsTwo, painting2Solution)
    } if (!resultCompareArtWorks) {
      console.log("joc1")
      return game = new Game(gridAndColorsOne, painting1Solution)
    }
  }
  const nextLevelButton = document.querySelector('.next-level-button')
  nextLevelButton.onclick = () => {
    nextLevel();
    console.log("next level!")
    game.cleanAll();
    startGame(); 
  }
   // Si ha guanyat crear un nou joc.
    // if(result){
      //  new Game(quadre2, resultat2);
    //}else {
        // Si ha perdut, tornar a repetir.

   // }
  //}
   

  // cada botó última pàgina (guanyar/perdre) et porta a la pàgina d'inici
  const backMenuButton = document.querySelectorAll('.menu-button').forEach((elem) => {
    elem.onclick = () => {
      startPage.style = "display: flex"
      winPage.style = "display: none";
      losePage.style = "display: none";
      game.cleanAll();
    }
  });
//botó per quan perds poder tornar a intentar-ho, no em funciona la funció
  //de comparar
  const tryAgain = document.querySelector('.try-again-button');
  tryAgain.onclick = function () {
    game.cleanAll();
    startGame();
  }

  function renderEverything(game) {
    changeSquareColor(game);
    colorButtons(game);
    readyToCompare(game);
  }
  
}