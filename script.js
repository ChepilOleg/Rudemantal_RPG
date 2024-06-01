import * as Units from "./clases/units.js";
import * as Weapons from "./clases/weapons.js";

let leftMenu = document.querySelector(".leftMenu");
let centralEkran = document.querySelector(".centralEkran");
let player;

function createLeftButton(name) {
    let secton = document.createElement("section");
    let fn = listOfFunctins(name);
    secton.classList.add("leftMenuButton", name);
    secton.innerText = name;
    secton.addEventListener("click", () => fn());
    return secton;
}

function createPlayer() {
    player = new Units.Player();
    leftMenu.innerHTML = `<div class="leftMenuButton">${player.name}</div>`;
    ["eqwip", "beg"].forEach((item) => {
        leftMenu.append(createLeftButton(item));
    });
}

function eqipfn(x) {
    let secton = document.querySelector(`.${x}`);
    secton.innerHTML = "Knife";
}

function listOfFunctins(name) {
    switch (name) {
        case "beg":
            return function oppenBeg() {
                alert("it is beg");
            };
            break;
        case "eqwip":
            return function oppenEqip() {
                alert("it is eqip");
            };
            break;
    }
}

createPlayer();
let knife = Weapons.Knife.createKnife("wood");
