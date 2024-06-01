import { weapon } from "../weapon/weapon.js";
import { Unit } from "./Unit.js";

export class Player extends Unit {
    _equipment = {
        rightHand: null,
        leftHand: null,
        head: null
    };
    constructor() {
        super("oleg", 10);
    }
    setEquipment(item) {
        if (item instanceof weapon) {
            switch (item._from) {
                case "oll":
                    let head = prompt("Left or Right", "Left");
                    if (head == "Left") this._equipment.leftHand = item;
                    if (head == "rigt") this._equipment.rightHand = item;
                    break;
            }
        }
    }
}
