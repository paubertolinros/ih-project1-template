

// això és el mateix que posar window.addEventListener("load", (event) => {})
window.onload = function () {
  const game = new Game();
  
  //gamePage.style = "display: flex"//només per poder treballar en la pàgina del joc
  startButton.onclick = function () {
     
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
    
  }
  
 //Si crido la funció adalt, no em funciona la funció de pintar els quadrats
  game.start();


 
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
  
 

  // cada botó última pàgina (guanyar/perdre) et porta a la pàgina d'inici
  const backMenuButton = document.querySelectorAll('.menu-button').forEach((elem) => {
    elem.onclick = () => {
      startPage.style = "display: flex"
      winPage.style = "display: none";
      losePage.style = "display: none";
    }
  });
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
    game.compareArtWorks();
    //game.cleanAll();//no em funciona el grid
  }  
  
}