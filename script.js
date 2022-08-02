console.log("JavaScript funguje!");

console.log(Math.floor(Math.random()*10));
/*
let mojeBarvaVlasu = prompt("Jaká je tvoje barva vlasů?");
console.log(mojeBarvaVlasu);


let rokNarozeni = prompt("V jakém roce si se narodil?")

let stari = new Date().getFullYear() - rokNarozeni

console.log("Je ti " + stari + " let.")

*/
let tlacitko = document.querySelector(".button");

function pozdrav(){
    console.log("Ahoj!")
    tlacitko.classList.toggle("barvapozadi");
}

tlacitko.addEventListener("click", pozdrav);

