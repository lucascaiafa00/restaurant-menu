let buttons = document.querySelectorAll(".button")
let background = document.getElementById("background")
let openMenu = document.getElementById("open")
let closeButton = document.getElementById("close")

buttons.forEach(button => {
    button.onclick = ()=>{
        background.classList.add("show")
        openMenu.classList.add("show")
        openMenu.children[0].innerHTML = button.id
    }
});

closeButton.onclick = ()=>{
    background.classList.remove("show")
    openMenu.classList.remove("show")
}