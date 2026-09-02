Boks1 = document.getElementById("boks1")
Boks2 = document.getElementById("boks2")
Boks3 = document.getElementById("boks3")

Figurer = [
    "media/firkant.png",
    "media/trekant.png",
    "media/sirkel.png",
    "media/stjerne.png",
    "media/hjerte.png",
    "media/rombe.png",
    "media/sekskant.png",
    "media/femkant.png"
]

let nummer = 0

let figur = document.getElementById("figur")

Boks3.addEventListener("click", function() {
    nummer = nummer + 1

    if (nummer >= Figurer.length) {
        nummer = 0
    }

    figur.src = Figurer[nummer]
})


Boks1.addEventListener("click", function() {
    nummer = nummer - 1

    if (nummer < 0) {
        nummer = Figurer.length - 1
    }

    figur.src = Figurer[nummer]
})