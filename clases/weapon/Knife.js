import { weapon } from "./weapon.js";

export class Knife extends weapon {
    _type = "fis";
    _from = "oll";
    static createKnife(material) {
        let damage, cost;
        switch (material) {
            case "wood":
                damage = 2;
                cost = 4;
                break;
            case "iron":
                damage = 4;
                cost = 8;
                break;
            default:
                return null;
        }
        return new Knife(material, damage, cost);
    }
}
