import runGame from "./game"
//runGame()

let stopgameevent = new Event("stopgamenow")
let placeOfMenu = document.getElementById("mainmenu")
let pixicontainer = document.getElementById("pixi-container")
const titleduckduration = 4 // másodperc
const secondschange = 3 // osztva x-el

function showMainMenu() {
  // elhelyezzük a menüt a template-ből
  let menu = document.getElementById("menutemplate").content.cloneNode(true)
  placeOfMenu.appendChild(menu)
  
  // kacsát elfuttatjuk
  let titleduck = document.getElementById("titleduck")
  titleduck.style.animation = `titleduck ${titleduckduration}s forwards linear`
  // amikor a kacsa elfut teljesen akkor HALÁL NEKI
  titleduck.addEventListener("animationend", () => {
    titleduck.remove()
  })
  
  // beállítjuk a cím animációját
  let titlesect = document.getElementsByClassName("titlesection")[0].children

  let calculatedIndex = (titleduckduration * 1000) / secondschange
  for (let i = 0; i < titlesect.length; i++) {
    titlesect[i].style.animation = "normal letterfall 1s ease-out"
    titlesect[i].style.animationFillMode = "backwards"
    titlesect[i].style.animationDelay = `${calculatedIndex + i * 200}ms`
  }

  // gombok beállítása
  document.getElementById("runthegame").addEventListener("click", switchToGame)
}

function switchToGame() {
  // megszerezzük a kilépés menüjét
  let ingamemenu = document.getElementById("pausetemplate").content.cloneNode(true)

  // kitöröljük a fömenüt és futtatjuk a játékot
  placeOfMenu.removeChild(document.getElementById("menutoremove"))
  runGame()

  // a kilépés menüt elhelyezzük és a kilépés gombját beállítjuk
  pixicontainer.appendChild(ingamemenu)
  let stopgamebutton = document.getElementById("stopthegame")
  stopgamebutton.addEventListener("click", stopGame)
}

function stopGame() {
  // szólunk a játéknak hogy dögöljön meg
  document.dispatchEvent(stopgameevent)
  
  // kitöröljük a kilépés menüt és a főmenüt mutatjuk
  pixicontainer.removeChild(document.getElementById("exitbutton"))
  showMainMenu()
}

showMainMenu()