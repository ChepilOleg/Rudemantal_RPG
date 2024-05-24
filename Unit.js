export class Unit {
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
