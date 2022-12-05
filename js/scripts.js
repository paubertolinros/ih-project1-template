// això és el mateix que posar window.addEventListener("load", (event) => {})
window.onload = function () {
  //Codi que no acabo d'entendre, perquè haig de posar el de la línia d'abaix i no directament 
  //especificar como ho faig a la línia 28
  function startGame(grid, solutions, level, image, winPage, int, hints) {
    let game = new Game(grid, solutions, level, image, winPage, int, hints);
    game.printArtWorkImage();
    artWorkPage.style = "display: flex";
    startPage.style = "display: none";
    getSeconds.textContent = int;
    game.intervalId = setInterval(() => {
      if (game.seconds > 0) {
        game._restSeconds();
        game.changeSecondColor();
        getSeconds.textContent = game.seconds;
      } else {
        artWorkPage.style = "display: none";
        gamePage.style = "display: flex";
        game._stopSeconds();
      };
    }, 1000);
    game.printArtWorkAndColors();
    game._printHints();
    renderEverything(game);
  };
  //codi que no acabo d'entendre
  startButton.onclick = () => {
    startGame(gridAndColorsOne, painting1Solution, 1, "./img/Composition II in Red, Blue and Yellow - Mondrian.jpeg", artWorkWinPage1, 7, hintsLevel1);
  };
  function colorButtons(game) {
    document.querySelectorAll(".palette-colors button").forEach((elem) => {
      elem.addEventListener("click", () => {
        game.pickedColors.push(elem.classList[0]);
        console.log(elem.classList[0])
        game.pickedColorClass.push(elem.classList[1]);
        console.log(elem.classList[1])
      });
    });
  };
  function changeSquareColor(game) {
    document.querySelectorAll(`.grid${game.level} div`).forEach((elem) => {
      elem.addEventListener("click", () => {
        //let getcolor = game.pickedColors[0];
        let getcolor = game.pickedColors.pop();
        console.log(getcolor)
        let getClass = game.pickedColorClass[0];
        elem.style.background = `${getcolor}`;
        elem.classList.replace(elem.classList[0], `${getClass}`)
        game.pickedColors = [];
        game.pickedColorClass = [];
      });
      
    });
  };
  let resultCompareArtWorks = null;
  function readyToCompare(game, level) {
    winPage.style = "display: none";
    losePage.style = "display: none";
    finishButton.onclick = function () {
      let rigthResultLength = Object.keys(game.rigthResult);
      for (let i = 0; i < rigthResultLength.length; i++) {
        let userAswerFirst = document.getElementById(`a${i}`);
        game.userAnswer.push(userAswerFirst.classList.value);
      };
      gamePage.style = "display: none";
      resultCompareArtWorks = game.compareArtWorks();
    };
  };
  function nextLevel(game) {
    const nextLevelButton = document.querySelector('.next-level-button');
    if (game.level === 2) {
      nextLevelButton.setAttribute('disabled', '');
    } else {
      nextLevelButton.removeAttribute("disabled");
    };
    nextLevelButton.onclick = () => {
      if (game.level === 1) {
        startGame(gridAndColorsTwo, painting2Solution, 2, "./img/Composition in Red, Yellow, blue and black - Mondrian.jpg", artWorkWinPage2, 14, hintsLevel2);
      };
    };
  };
  function backToMenu(game) {
    const backMenuButton = document.querySelectorAll('.back-menu-button').forEach((elem) => {
      elem.onclick = () => {
        startPage.style = "display: flex";
        winPage.style = "display: none";
        losePage.style = "display: none";
        game.cleanAll();
      };
    });
  };
//funció del try again button
  function tryAgainButton(game) {
    tryAgain.onclick = function () {
      if (game.level === 1) {
        startGame(gridAndColorsOne, painting1Solution, 1, "./img/Composition II in Red, Blue and Yellow - Mondrian.jpeg", artWorkWinPage1, 7, hintsLevel1);
      } if (game.level === 2) {
        startGame(gridAndColorsTwo, painting2Solution, 2, "./img/Composition in Red, Yellow, blue and black - Mondrian.jpg", artWorkWinPage2, 14, hintsLevel2);
      };
    };   
  };
//funció per mostrar les instruccions
  function instructions() {
    instructionsImage.onclick = function () {
      getInstructions.style = "display: flex";
    };
    getInstructions.onclick = function () {
      getInstructions.style = "display: none"
    };
    getInstructions.style = "display: none"
  };
//funció per mostrar les hints 
  function hints() {
    let countClicks = 0;
    hintsImage.onclick = function () {
      getHintsContainer.style = "display: flex";
      countClicks++;
      setTimeout(() => {
        getHintsContainer.style = "display: none";
      }, 5000)
      if (countClicks > 3) {
        getHintsContainer.style = "display: none";
      } else {
        getHintsContainer.style = "display: flex";
      };
    };
  };
  /*function hintLevel2(game) {
    if (game.level === 2) {
      setTimeout(() => {
        document.querySelector(".grid2").onmouseenter = () =>
      },5000)
    }
  }*/
  function renderEverything(game, level) {
    changeSquareColor(game);
    colorButtons(game, level);
    readyToCompare(game, level);
    tryAgainButton(game, level);
    nextLevel(game);
    backToMenu(game);
    instructions(game);
    hints(game);
  };
};