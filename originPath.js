import { Dice } from "./dice.js";
import { Skill } from "./skills";
import { Talent } from "./talents.js";

class HomeWorld {
    constructor(name, charMods, skills, wounds) {
        this.name = name;
        this.charMods = charMods;
        this.skills = skills;
        this.wounds = wounds;
        this.fate = new Dice(10);
    }
}

class Birthright {
    constructor(name, talents, charBonuses, drawbacks) {
        this.name = name;
    
    }
}

const HOMEWORLDS = [
    new HomeWorld('Death World', {'S': 5, 'T': 5, 'WP': -5, 'Fel': -5}, ['Survival'], new Dice(5, 2)),
    new HomeWorld('Void Born', {'S': -5, 'WP': 5}, ['Speak Language (Ship Dialect)'], new Dice(5)),
    new HomeWorld('Forge World', {'WS': -5, 'Int': 5}, ['Common Lore (Tech)', 'Common Lore (Machine Cult)'], new Dice(5, 1)),
    new HomeWorld('Hive World', {'T': -5, 'Fel': 5}, ['Speak Language (Hive Dialect)'], new Dice(5, 1)),
    new HomeWorld('Imperial World', {'WP': 3}, ['Common Lore (Imperial Creed), Common Lore (Imperium), Common Lore(War)', 'Literacy', 'Speak Language (High Gothic)'], new Dice(5)),
    new HomeWorld('Noble Born', {'WP': -5, 'Fel': 5}, ['Literacy', 'Speak Language (High Gothic)', 'Speak Language (Low Gothic)'], new Dice(5))
];

const BIRTHRIGHT = [
    // TODO: Talent new Birthright('Scavenger', [] , [{'Ag': 3}, {'WP': 3}], [{type: 'Corruption', value: new Dice(5)}, {type: 'Insanity', value: new Dice(5)}]),
    new Birthright('Scapegrace', 'Sleight of Hand', [{'Int': 3}, {'Per': 3}], [{type: 'Corruption', value: new Dice(5)}, {type: 'Insanity', value: new Dice(5)}]),
    'Stubjack',
    // new Birthright('Stubjack')
    'Child of the Creed',
    'Savant',
    'Vaunted'
];

const LUREOFTHEVOID = [
    'Tainted',
    'Criminal',
    'Renegade',
    'Duty Bound',
    'Zealot',
    'Chosen by Destiny'
];

const TRIALSANDTRAVAILS = [
    'The Hand of War',
    'Press-Ganged',
    'Calamity',
    'Ship-Lorn',
    'Dark Voyage',
    'High Vendetta'
];

const MOTIVATION = [
    'Endurance',
    'Fortune',
    'Vengeance',
    'Renown',
    'Pride',
    'Prestige'
];

const CAREERPATH = [
    'Rogue Trader',
    'Arch-Militant',
    'Astropath Transcendent',
    'Explorator',
    'Missionary',
    'Navigator',
    'Seneschal',
    'Void-Master'
];

export {CAREERPATH, MOTIVATION, TRIALSANDTRAVAILS, HOMEWORLDS, LUREOFTHEVOID, BIRTHRIGHT};

console.log('HOMEWORLDS:', HOMEWORLDS);

