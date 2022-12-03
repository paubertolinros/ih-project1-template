

// això és el mateix que posar window.addEventListener("load", (event) => {})
window.onload = function () {
  
  //gamePage.style = "display: flex"//només per poder treballar en la pàgina del joc

  function startGame(grid, solutions,level,image, winPage) { 
    let game = new Game(grid,solutions,level,image, winPage);
    console.log('Starting', game)
    game.printArtWorkImage();
    artWorkPage.style = "display: flex";
    startPage.style = "display: none";
    game.intervalId = setInterval(() => {
      game.changeSecondColor();
      game._restSeconds();
      getSeconds.innerHTML = game.seconds;
    }, 1000)
    setTimeout(() => {
      artWorkPage.style = "display: none";
      gamePage.style = "display: flex";
      game._stopSeconds();
      getSeconds.innerHTML = game.seconds;
    }, 7000);
    game.printArtWorkAndColors();
    renderEverything(game);  
  }

  startButton.onclick = () => {
    startGame(gridAndColorsOne, painting1Solution, 1, "../img/Composition II in Red, Blue and Yellow - Mondrian.jpeg",artWorkWinPage1 )
  };
  
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
    console.log("quadrats1")
  // cada quadrat és clicable 
   //cosi ale const div = docu('.grid1 div').forEach((elem) => {
  document.querySelectorAll(`.grid${game.level} div`).forEach((elem) => {
      //Crec que se m'està anant l'olla, vaig a desconnectar 
    console.log("quadrats2")
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
  function readyToCompare(game,level) {
    winPage.style = "display: none";
    losePage.style = "display: none";
    //depenent de si guanya o perd s'ha de mostrar una de les dues pàgines, ara està la de guanyar
    finishButton.onclick = function () {
      let rigthResultLength = Object.keys(game.rigthResult);
      console.log(rigthResultLength)
      for (let i = 0; i < rigthResultLength.length; i++){
        console.log(`a${i}`)
        let userAswerFirst = document.getElementById(`a${i}`)
        console.log(userAswerFirst)
        game.userAnswer.push(userAswerFirst.classList.value);
        
      }
      
      /*game.userAnswer.push(document.getElementById("a0").classList.value);
      game.userAnswer.push(document.getElementById("a1").classList.value);
      game.userAnswer.push(document.getElementById("a2").classList.value);
      game.userAnswer.push(document.getElementById("a3").classList.value);
      game.userAnswer.push(document.getElementById("a4").classList.value);
      game.userAnswer.push(document.getElementById("a5").classList.value);
      game.userAnswer.push(document.getElementById("a6").classList.value);*/
      gamePage.style = "display: none";
      // intento guardar el resultat de comparar l'obra d'art i 
      resultCompareArtWorks = game.compareArtWorks();
      console.log(resultCompareArtWorks) 
      
    }
  }
 //console.log(resultCompareArtWorks) 
//Per posar el següent nivell en el cas que guanyi, no funciona
  // function nextLevel(game) {
  //   if (resultCompareArtWorks) {
  //     console.log("joc2")
  //     game = new Game(gridAndColorsTwo, painting2Solution)
  //   } if (!resultCompareArtWorks) {
  //     console.log("joc1")
  //     game = new Game(gridAndColorsOne, painting1Solution)
  //   }
  // }
  function nextLevel(game) {
    const nextLevelButton = document.querySelector('.next-level-button')
    if (game.level === 2) {
      nextLevelButton.setAttribute('disabled', '')
     } else {
        nextLevelButton.removeAttribute("disabled")
      }
    nextLevelButton.onclick = () => {
      if (game.level === 1) {
    startGame(gridAndColorsTwo, painting2Solution, 2, "../img/Composition in Red, Yellow, blue and black - Mondrian.jpg", artWorkWinPage2)
      } 
      }
    }
function backToMenu (game) {
  // cada botó última pàgina (guanyar/perdre) et porta a la pàgina d'inici
  const backMenuButton = document.querySelectorAll('.menu-button').forEach((elem) => {
    elem.onclick = () => {
      startPage.style = "display: flex"
      winPage.style = "display: none";
      losePage.style = "display: none";
      game.cleanAll();
    }
  });
  };
//botó per quan perds poder tornar a intentar-ho, no em funciona la funció
  //de comparar
  function tryAgainButton(game, level) {
    const tryAgain = document.querySelector('.try-again-button');
    tryAgain.onclick = function () {
      console.log("try again")
      if (game.level === 1) {
      startGame(gridAndColorsOne, painting1Solution, 1,"../img/Composition II in Red, Blue and Yellow - Mondrian.jpeg", artWorkWinPage1)
      } if (game.level === 2) {
        startGame(gridAndColorsTwo, painting2Solution, 2, "../img/Composition in Red, Yellow, blue and black - Mondrian.jpg", artWorkWinPage2)
      }
      }
      
  }

  function renderEverything(game, level) {
    console.log("rendering")
    changeSquareColor(game);
    colorButtons(game, level);
    readyToCompare(game, level);
    tryAgainButton(game, level);
    nextLevel(game);
    backToMenu(game);
  }
  
}