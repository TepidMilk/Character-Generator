import { Talent, talents } from "./talents.js";
import { Skill, skills, Trained, Descriptor, Type } from "./skills.js";
import { HOMEWORLDS, BIRTHRIGHT, LUREOFTHEVOID, TRIALSANDTRAVAILS, MOTIVATION, CAREERPATH } from "./originPath.js";
import { Dice } from "./dice.js";

class Character {
    constructor() {
        this.playerName = null;
        this.characterName = null;
        this.homeWorld = null;
        this.birthright = null;
        this.lotv = null;
        this.tat = null;
        this.motivation = null;
        this.careerPath = null;
        this.rank = 0;
        this.motivation = null;
        this.description = null;
        this.characteristics = {
            'WS': 0,
            'BS': 0,
            'S': 0,
            'T': 0,
            'Ag': 0,
            'Int': 0,
            'Per': 0,
            'WP': 0,
            'Fel': 0
        };
        this.skills = skills;
        this.talentsTraits = [];
        this.specialAbilities = [];
        this.psychicDisciplines = [];
        this.psychicTechniques = [];
        this.totalExp = 4500;
        this.expToSpend = 500;
        this.movement = {};
        this.weapons = [];
        this.gear = [];
        this.acquisitions = [];
        this.mutations = [];
        this.corruption = {
            currentCorruption: 0,
            degree: null,
            Malignancies: null
        };
        this.wounds = {
            totalWounds: 0,
            currentWounds: 0,
            criticalDamage: 0,
            fatigue: 0
        };
        this.insanity = {
            currentInsanity: 0,
            degree: null,
            disorders: null
        };
        this.armour = {
            head: 0,
            rightArm: 0,
            leftArm: 0,
            body: 0,
            rightLeg: 0,
            leftLeg: 0
        };
        this.lifting = {
            lift: 0,
            carry: 0,
            push: 0
        };
        this.fatePoints = {
            totalFate: 0,
            currentFate: 0
        };
    }

    generateCharacteristics() {
        let dTen = new Dice(1, 10, 25);
        for (let key in this.characteristics) {
            this.characteristics[key] = dTen.rollDie();
        }
    }

    findLowestCharacteristic() {
        let lowestChar = null;
        let lowestValue = Infinity;
        for (let key in this.characteristics) {
            if (this.characteristics[key] < lowestValue) {
                lowestValue = this.characteristics[key];
                lowestChar = key;
            }
        }
        return lowestChar;
    }

    findLowestCharacteristics() {
        let lowestChar = this.findLowestCharacteristic();
        let lowestValue = this.characteristics[lowestChar];
        let lowestChars = [lowestChar];
        for (let key in this.characteristics) {
            if (key !== lowestChar && this.characteristics[key] === lowestValue) {
                lowestChars.push(key);
            }
        }
        return lowestChars;
    }
    
    rerollCharacteristic(characteristic) {
        let dTen = new Dice(2, 10, 25);
        this.characteristics[characteristic] = dTen.rollDie();
    }

    randomizeHomeWorld() {
        this.homeWorld = HOMEWORLDS[Math.floor(Math.random() * HOMEWORLDS.length)];
    }

    randomizeBirthright() {
        this.birthright = BIRTHRIGHT[Math.floor(Math.random() * BIRTHRIGHT.length)];
    }

    randomizeLOTV() {
        this.lotv = LUREOFTHEVOID[Math.floor(Math.random() * LUREOFTHEVOID.length)];
    }

    randomizeTAT() {
        this.tat = TRIALSANDTRAVAILS[Math.floor(Math.random() * TRIALSANDTRAVAILS.length)];
    }

    randomizeMotivation() {
        this.motivation = MOTIVATION[Math.floor(Math.random() * MOTIVATION.length)];
    }

    randomizeCareerPath() {
        this.careerPath = CAREERPATH[Math.floor(Math.random() * CAREERPATH.length)];
    }

    randomizeOriginPath() {
        this.randomizeHomeWorld();
        this.randomizeBirthright();
        this.randomizeLOTV();
        this.randomizeTAT();
        this.randomizeMotivation();
        this.randomizeCareerPath();
    }
}

let player = new Character();
player.generateCharacteristics();
player.randomizeOriginPath();
console.log(player);