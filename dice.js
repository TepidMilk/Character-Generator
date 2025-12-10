export class Dice {
    constructor(amount, faces, bonus = 0) {
        this.amount = amount;
        this.faces = faces;
        this.bonus = bonus;
    }

    rollDie() {
        let result = 0;
        for (let i = 0; i < this.amount; i++) {
            result += (Math.floor(Math.random() * this.faces) + 1);
        }
        result += this.bonus;
        return result;
    }
}