import runGame from "./game"
//runGame()

let stopgameevent = new Event("stopgamenow")
let placeOfMenu = document.getElementById("mainmenu")
let pixicontainer = document.getElementById("pixi-container")

function showMainMenu() {
  let menu = document.getElementById("menutemplate").content.cloneNode(true)
  placeOfMenu.appendChild(menu)
  let titlesect = document.getElementsByClassName("titlesection")[0].children

  for (let i = 0; i < titlesect.length; i++) {
    titlesect[i].style.animation = "normal letterfall 1s ease-out"
    titlesect[i].style.animationFillMode = "backwards"
    titlesect[i].style.animationDelay = `${i * 200}ms`
  }
  document.getElementById("runthegame").addEventListener("click", switchToGame)
}

function switchToGame() {
  let ingamemenu = document.getElementById("pausetemplate").content.cloneNode(true)
  placeOfMenu.removeChild(document.getElementById("menutoremove"))
  runGame()
  pixicontainer.appendChild(ingamemenu)
  let stopgamebutton = document.getElementById("stopthegame")
  stopgamebutton.addEventListener("click", stopGame)
}

function stopGame() {
  document.dispatchEvent(stopgameevent)
  pixicontainer.removeChild(document.getElementById("exitbutton"))
  showMainMenu()
}

showMainMenu()