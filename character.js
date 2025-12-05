import { Talent, talents } from "./talents";
import { Skill, skills, Trained, Descriptor, Type } from "./skills";

class Character {
    constructor(
        playerName,
        characterName, 
        careerPath,
        motivation, 
        description, 
        weapons,
        gear,
        acquisitions,
        mutations,
        armour,
    ) {
        this.playerName = playerName;
        this.characterName = characterName;
        this.careerPath = careerPath;
        this.rank = 0;
        this.motivation = motivation;
        this.description = description;
        this.characteristics = {
            'ws': 0,
            'bs': 0,
            's': 0,
            't': 0,
            'ag': 0,
            'int': 0,
            'per': 0,
            'wp': 0,
            'fel': 0
        };
        this.skills = skills;
        this.talentsTraits = [];
        this.specialAbilities = [];
        this.psychicDisciplines = [];
        this.psychicTechniques = [];
        this.exp = 4500;
        this.movement = {};
        this.weapons = weapons;
        this.gear = gear;
        this.acquisitions = acquisitions;
        this.mutations = mutations;
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
        this.armour = armour;
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
        let dTen = new Dice(10);
        for (let key in this.characteristics) {
            this.characteristics[key] = dTen.rollDie(2) + 25
        }
    }

    generateHomeWorld() {

    }
}

class Dice {
    constructor(faces) {
        this.faces = faces;
    }

    rollDie(x) {
        let result = 0;
        for (let i = 0; i < x; i++) {
            result += Math.floor(Math.random() * this.faces) + 1;
        }
        return result
    }
}