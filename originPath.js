import { Dice } from "./dice.js";
import { skillMap } from "./skills.js";
import { talentMap } from "./talents.js";

class HomeWorld {
    constructor(name, charMods, skills, wounds) {
        this.name = name;
        this.charMods = charMods;
        this.skills = skills;
        this.wounds = wounds;
        this.fate = new Dice(1, 10);
    }
}

class Birthright {
    constructor(name, talents, charBonuses, drawbacks) {
        this.name = name;
        this.talents = talents;
        this.charBonuses = charBonuses;
        this.drawbacks = drawbacks;
    }
}

class LureOfTheVoid {
    constructor(name, effects){
        this.name = name;
        this.effects = effects;
    }
}
 
class TrialsAndTravails {
    constructor(name, effects) {
        this.name = name;
        this.effects = effects;
    }
}

class CareerPath {
    constructor(name, startingSkills, startingTalents, StartingGear) {
        this.name = name;   
        this.startingSkills = startingSkills;
        this.startingTalents = startingTalents;
        this.startingGear = StartingGear;
    }
}

const HOMEWORLDS = [
    new HomeWorld('Death World', {'S': 5, 'T': 5, 'WP': -5, 'Fel': -5}, ['Survival'], 2),
    new HomeWorld('Void Born', {'S': -5, 'WP': 5}, ['Speak Language (Ship Dialect)'], new Dice(5)),
    new HomeWorld('Forge World', {'WS': -5, 'Int': 5}, ['Common Lore (Tech)', 'Common Lore (Machine Cult)'], 1),
    new HomeWorld('Hive World', {'T': -5, 'Fel': 5}, ['Speak Language (Hive Dialect)'], 1),
    new HomeWorld('Imperial World', {'WP': 3}, ['Common Lore (Imperial Creed), Common Lore (Imperium), Common Lore(War)', 'Literacy', 'Speak Language (High Gothic)'], 0),
    new HomeWorld('Noble Born', {'WP': -5, 'Fel': 5}, ['Literacy', 'Speak Language (High Gothic)', 'Speak Language (Low Gothic)'], 0)
];

const BIRTHRIGHT = [
    new Birthright('Scavenger', ['Unremarkable', 'Resistance (Fear)'] , [{'Ag': 3}, {'WP': 3}], ['Corruption', 'Insanity']),
    new Birthright('Scapegrace', 'Sleight of Hand', [{'Int': 3}, {'Per': 3}], ['Corruption', 'Insanity']),
    new Birthright('Stubjack', 'Quickdraw', [{'WS': 5, 'Fel': -5}, {'BS': 5, 'Fel': -5}], 'Insanity'), 
    new Birthright('Child of the Creed', 'Unshakeable Faith', [{'WP': 3, 'WS': -3}, {'Fel': 3, 'WS': -3}], null),
    new Birthright('Savant', ['Logic', 'Peer (Academics)'], [{'Int': 3, 'T': -3}, {'Fel': 3, 'T': -3}], null),
    new Birthright('Vaunted', 'Decadence', [{'Ag': 3, 'Per': -3}, {'Fel': 3, 'Per': -3}], 'Corruption')
];

const LUREOFTHEVOID = [
    new LureOfTheVoid('Tainted', ['Mutant', 'Insane']),
    new LureOfTheVoid('Criminal', ['Wanted Fugitive', 'Hunted by a Crime Baron', 'Judged and Found Wanting']),
    new LureOfTheVoid('Renegade', ['Recidivist', 'Free-thinker', 'Dark Visionary']),
    new LureOfTheVoid('Duty Bound', ['Duty to the Throne', 'Duty to Humanity', 'Duty to Your Dynasty']),
    new LureOfTheVoid('Zealot', ['Blessed Scars', 'Unnerving Clarity', 'Favoured of the Faithful']),
    new LureOfTheVoid('Chosen by Destiny', ['Seeker of Truth', 'Xenophile', 'Fated for Greatness'])
];

const TRIALSANDTRAVAILS = [
    new TrialsAndTravails('The Hand of War', ['The Ashes of War', 'The Face of the Enemy']),
    new TrialsAndTravails('Press-Ganged', ['Unwilling accomplice', 'Jealoous Freedom']),
    new TrialsAndTravails('Calamity', ['Inured to Adversity', 'Echo of Hard Times']),
    new TrialsAndTravails('Ship-Lorn', ['Against All Odds', 'Ill-starred']),
    new TrialsAndTravails('Dark Voyage', ['Things Man Was Not Meant to Know', 'Marked by Darkness']),
    new TrialsAndTravails('High Vendetta', ['Blood Will Have Blood', 'Brook No Insult'])
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
    new CareerPath(
        'Rogue Trader',
        [
            'Command',
            'Commerce',
            'Charm',
            'Common Lore (Imperium)',
            'Evaluate',
            'Literacy',
            'Scholastic Lore (Astromancy)',
            'Speak Language (High Gothic)',
            'Speak Language (Low Gothic)'
        ],
        [
            'Air of Authority',
            'Pistol Weapon Training (Universal)',
            'Melee Weapon Training (Universal)'
        ],
        [
            //TODO: Add starting gear for Rogue Trader
        ]
    ),
    'Arch-Militant',
    'Astropath Transcendent',
    'Explorator',
    'Missionary',
    'Navigator',
    'Seneschal',
    'Void-Master'
];

export {CAREERPATH, MOTIVATION, TRIALSANDTRAVAILS, HOMEWORLDS, LUREOFTHEVOID, BIRTHRIGHT};



