class Unit {
    _hitPoints = 10;
    _storege = new Map();
    _ecwipe = {
        rightHend: "",
        leftHend: "",
        helmed: "",
        armor: ""
    };

    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get atacs() {
        return this._ecwipe.rightHend;
    }
    set storege(item) {
        if (!Array.isArray(item)) item = [item, 1];
        let [it, am] = item;
        if (!this.storege.has(it)) {
            this._storege.set(...item);
        } else {
            let x = this._storege.get(it);
            this._storege.set(it, x + am);
        }
    }
    get storege() {
        return this._storege;
    }
    set hitPoints(hp) {
        this._hitPoints += hp;
        if (this._hitPoints > 10) this._hitPoints = 10;
        if (this._hitPoints <= 0) alert("Ви програли цей бій");
    }

    get hitPoints() {
        return this._hitPoints;
    }
}

class Veapon {
    constructor(damage) {
        if (!damage) return;
        this._damage = damage;
    }

    atac(mod = 1) {
        return -(this._damage * mod);
    }
}
class Knife extends Veapon {
    constructor(material) {
        let damage;
        switch (material) {
            case "rock":
                damage = 3;
                break;
            case "metal":
                damage = 5;
                break;
            default:
                damage = 0;
        }
        super(damage);
    }
    static CreateAKnife(material) {
        if (!material === "rock" || !material === "metal") return;
        return new Knife(material);
    }
}

let leftMenu = document.querySelector(".leftMenu");
let centralEkran = document.querySelector(".centralEkran");
let player;
let stouneKnife = Knife.CreateAKnife("rock");
function createPlayer() {
    // let name = "name";
    // while (true) {
    //     name = prompt("How is your name? max 7 simvols", "Name");
    //     if (name.length > 7) {
    //         alert("So match simvols");
    //     } else if (!name || name == 0) {
    //         alert("write yor name please");
    //     } else {
    //         break;
    //     }
    // }
    // let player = new Unit(name);
    player = new Unit("Oleg");
    leftMenu.innerHTML = `<div class="name">${player.name}</div>
    <div class="eqip rightHend"  onclick="eqipfn('rightHend')">${"R hend"}</div>`;
}

function eqipfn(x) {
    player._ecwipe[x] = stouneKnife;
    let secton = document.querySelector(`.${x}`);
    secton.innerHTML = "Knife";
}
createPlayer();
