export class weapon {
    _status = null;
    constructor(material, damage, cost) {
        this._material = material;
        this._damage = damage;
        this._cost = cost;
    }
    setDamage() {
        return { damage: this._damage, type: this._type, status: this._status };
    }
}
