// KACSÁK DEFINIÁLÁSA.
const ducks = [
    {
        name: "Fiú kacsa",
        price: 0,
        imagePath: "duck_boy.png"
    },
    {
        name: "Lány kacsa",
        price: 0,
        imagePath: "duck_girl.png"
    },
    {
        name: "Ügynök kacsa",
        price: 1000,
        imagePath: "duck_agent.png"
    },
    {
        name: "Cyborg Robotzsaru Terminátor kacsa",
        price: 2000,
        imagePath: "duck_cyborg.png"
    },
        {
        name: "Zombi kacsa",
        price: 3000,
        imagePath: "duck_placeholder.png"
    },
    {
        name: "Forma-1 kacsa",
        price: 5000,
        imagePath: "duck_placeholder.png"
    },
]

let unlocked = [true, true, false, false, false, false]
let equiped = 0 // hányadik kacsa a "ducks" listában

let currentlySelectedDuck = 0
// KACSÁK VÉGE.

let placeOfDuck = document.getElementById("skindetail")

function skinMenuRefresh() {
    // elhelyezzük a menüt a template-ből
    let details = document.getElementById("ducktemplate").content.cloneNode(true)
    placeOfDuck.replaceChildren(details)

    // jelenlegi kacsa mentése
    const currentDuck = ducks[currentlySelectedDuck]
    const cDuckId = currentlySelectedDuck

    // Név átírása
    placeOfDuck.querySelector("#skinduckname").textContent = currentDuck.name

    // Kép átírása
    let image = placeOfDuck.querySelector("#skinduckimg")
    image.src = `./assets/ducks/${currentDuck.imagePath}`

    // Ár átírása
    placeOfDuck.querySelector("#skinduckprice").textContent = `Ár: ${currentDuck.price}`

    // Gomb átírása
    let button = placeOfDuck.querySelector("#skinduckbutton")

    if (unlocked[cDuckId]) {
        if (equiped == cDuckId) {
            button.textContent = "Felszerelve"
        } else {
            button.textContent = "Felszerelés"
        }
    } else {
        button.textContent = "Vásárlás"
    }
    
}

function nextOrPrevDuck(direction) {
    if (direction == "next") {
        if ((currentlySelectedDuck + 1) > (ducks.length - 1)) {
            currentlySelectedDuck = 0
        } else {
            currentlySelectedDuck += 1
        }
    } else if (direction == "prev") {
        if ((currentlySelectedDuck - 1) < 0) {
            currentlySelectedDuck = (ducks.length - 1) 
        } else {
            currentlySelectedDuck -= 1
        }
    }
    skinMenuRefresh()
}



export {skinMenuRefresh, nextOrPrevDuck}