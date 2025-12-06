export class Dice {
    constructor(faces, bonus = 0) {
        this.faces = faces;
        this.bonus = bonus;
    }

    rollDie(x) {
        let result = 0;
        for (let i = 0; i < x; i++) {
            result += (Math.floor(Math.random() * this.faces) + 1);
        }
        result += this.bonus;
        return result;
    }
}