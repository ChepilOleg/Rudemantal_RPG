export class Unit {
    _statusList = {};
    _imuneList = {};
    constructor(name, hitPoints) {
        this._name = name;
        this._maxHitPoints = hitPoints;
        this._hitPoints = hitPoints;
    }
    get name() {
        return this._name;
    }

    getDamage({ damage, type, status }) {
        if (!this._hitPoints) return "day";
        if (damage < 0) {
            this._hitPoints = this.healing(damage, type);
            if (this._hitPoints >= this._maxHitPoints)
                this._hitPoints = this._maxHitPoints;
        } else {
            this._hitPoints = this.damaged(damage, type);
            if (this._hitPoints <= 0) this._hitPoints = 0;
        }
        if (status) {
            this._[status[0]] = this.starused(status[1], status[2]);
        }
    }

    healing(heal, type) {
        return Math.floor(this._hitPoints - heal);
    }

    damaged(damage, type) {
        if (type in this._imuneList) {
            damage *= this._imuneList?.[type];
        }
        return Math.floor(this._hitPoints - damage);
    }

    starused(damage, time) {
        let x = time;
        return function* () {
            let d = damage;
            if (x == 1) return d;
            while (x > 0) {
                x -= 1;
                yield d;
            }
        };
    }
    nextTurn() {
        for (let status in this._) {
            let res = this._[status]().next();
            if (res.done) {
                delete this._statusList[status];
            }
            this.getDamage({ damage: res.value, type: status });
        }
    }
}
