// a "runthegame" id-jű gomb logikája a ./main.js fájlban található

const menus = ["skins", "settings", "credits"]

menus.forEach((menuname) => {
    let dialog = document.getElementById(`${menuname}Dialog`)
    document.getElementById(`${menuname}mbt`).addEventListener("click", () => {
        dialog.showModal()
    })
    document.getElementById(`${menuname}Close`).addEventListener("click", () => {
        dialog.close()
    })
})