import { Dice } from "./dice";

const CRAFTSMANSHIP = Object.freeze({
    POOR: 'Poor',
    COMMON: 'Common',
    GOOD: 'Good',
    BEST: 'Best'
});

const TYPE = Object.freeze({
    EXOTIC: 'Exotic',
    MELEE: 'Melee',
    THROWN: 'Thrown',
    PISTOL: 'Pistol',
    BASIC: 'Basic',
    HEAVY: 'Heavy'
});

const SPECIAL = Object.freeze({
    ACCURATE: 'Accurate',
    BALANCED: 'Balanced',
    BLAST: 'Blast',
    CUSTOMIZED: 'Customized',
    DEFENSIVE: 'Defensive',
    FLAME: 'Flame',
    FLEXIBLE: 'Flexible',
    INACCURATE: 'Inaccurate',
    OVERHEATS: 'Overheats',
    POWER_FIELD: 'Power Field',
    PRIMITIVE: 'Primitive',
    RECHARGE: 'Recharge',
    RELIABLE: 'Reliable',
    SCATTER: 'Scatter',
    SHOCKING: 'Shocking',
    SMOKE: 'Smoke',
    SNARE: 'Snare',
    STORM: 'Storm',
    TEARING: 'Tearing',
    TOXIC: 'Toxic',
    TWINLINKED: 'Twin-linked',
    UNBALANCED: 'Unbalanced',
    UNRELIABLE: 'Unreliable',
    UNSTABLE: 'Unstable',
    UNWIELDY: 'Unwieldy'
});

const AVAILABILITY = Object.freeze({
    UBIQUITOUS: 'Ubiquitous',
    ABUNDANT: 'Abundant',
    PLENTIFUL: 'Plentiful',
    COMMON: 'Common',
    AVERAGE: 'Average',
    SCARCE: 'Scarce',
    RARE: 'Rare',
    VERY_RARE: 'Very Rare',
    EXTREMELY_RARE: 'Extremely Rare',
    NEAR_UNIQUE: 'Near Unique',
    UNIQUE: 'Unique'
});

class RangedWeapon {
    constructor(name, type, range, rof, damage, pen, clip, reload, special, weight, availability, description) {
        this.name = name;
        this.type = type;
        this.range = range;
        this.rof = rof;
        this.damage = damage;
        this.pen = pen;
        this.clip = clip;
        this.reload = reload;
        this.special = special;
        this.weight = weight;
        this.availability = availability;
        this.craftsmanship = CRAFTSMANSHIP.COMMON;
        this.description = description;
    }
}

class grenadesAndMissles {
    constructor(name, type, range, rof, damage, pen, special, weight, availability, description) {
        this.name = name;
        this.type = type;
        this.range = range;
        this.rof = rof;
        this.damage = damage;
        this.pen = pen;
        this.special = special;
        this.weight = weight;
        this.availability = availability;
        this.description = description;
    }
}

class MeleeWeapon {
    constructor(name, type, range, damage, pen, special, weight, availability, description) {
        this.name = name;
        this.type = type;
        this.range = range;
        this.damage = damage;
        this.pen = pen;
        this.special = special;
        this.weight = weight;
        this.availability = availability;
        this.craftsmanship = CRAFTSMANSHIP.COMMON;
        this.description = description;
    }
}

class Armour {
    constructor(name, location, ap, weight, availability, description) {
        this.name = name;
        this.location = location;
        this.ap = ap;
        this.weight = weight;
        this.availability = availability;
        this.craftsmanship = CRAFTSMANSHIP.COMMON;
        this.description = description;
    }   
}

class Gear {
    constructor(name, weight, availability, description) {
        this.name = name;
        this.weight = weight;
        this.availability = availability;
        this.description = description;
    }   
}

class DrugsAndConsumables {
    constructor(name, weight, availability, description) {
        this.name = name;
        this.weight = weight;
        this.availability = availability;
        this.description = description;
    }
}

class Tools {
    constructor(name, weight, availability, description) {
        this.name = name;
        this.weight = weight;
        this.availability = availability;
        this.description = description;
    }
}

class Cybernetics {
    constructor(name, availability, craftsmanship, description) {
        this.name = name;
        this.availability = availability;
        this.craftsmanship = craftsmanship;
        this.description = description;
    }  
}

let rangedWeapons = [
    new RangedWeapon('Archeotech Laspistol', TYPE.PISTOL, 90, [1,3,0], new Dice(1, 10, 3), 2, 70, 'Full', [SPECIAL.ACCURATE, SPECIAL.RELIABLE], 4, AVAILABILITY.NEAR_UNIQUE, ''),
    new RangedWeapon('Belasco Dueling Pistol', TYPE.PISTOL, 45, [1,0,0], new Dice(1, 10, 4), 4, 1, 'Full', [SPECIAL.ACCURATE], 1.5, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Hellpistol (Lucius)', TYPE.PISTOL, 35, [1,2,0], new Dice(1,10,4), 7, 40, '2 Full', [], 4, AVAILABILITY.RARE, ''),
    new RangedWeapon('Hellgun (Lucius)', TYPE.BASIC, 110, [1,3,0], new Dice(1,10,4), 7, 30, '2 Full', [], 6, AVAILABILITY.RARE, ''),
    new RangedWeapon('Las Gauntlets', TYPE.PISTOL, 50, [1,4,0], new Dice(1,10,4), 1, 20, 'Full', [SPECIAL.RELIABLE], 3, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Lascarbine (Locke)', TYPE.BASIC, 60, [1,2,0], new Dice(1,10,3), 0, 40, '2 Full', [SPECIAL.RELIABLE], 2.5, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Lasgun', TYPE.BASIC, 100, [1,3,0], new Dice(1,10,3), 0, 60, 'Full', [SPECIAL.RELIABLE], 4, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Laspistol', TYPE.PISTOL, 30, [1,0,0], new Dice(1,10,2), 0, 30, 'Full', [SPECIAL.RELIABLE], 1.5, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Long-las', TYPE.BASIC,150, [1,0,0], new Dice(1,10,3), 1, 40, 'Full', [SPECIAL.ACCURATE, SPECIAL.RELIABLE], 4.5, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Man Portable Lascannon', TYPE.HEAVY, 300, [1,0,0], new Dice(5,10,10), 10, 5, '2 Full', [], 55, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Autogun', TYPE.BASIC, 90, [1,3,10], new Dice(1,10,3), 0, 30, '2 Full', [], 3.5, AVAILABILITY.AVERAGE, ''),
    new RangedWeapon('Autopistol', TYPE.PISTOL, 30, [1,0,6], new Dice(1,10,2), 0, 18, 'Full', [], 2.5, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Hand Cannon', TYPE.PISTOL, 35, [1,0,0], new Dice(1,10,4), 2, 5, '2 Full', [], 3, AVAILABILITY.AVERAGE, ''),
    new RangedWeapon('Heavy Stubber (Orthlack)', TYPE.HEAVY, 120, [0,0,10], new Dice(1,10,5), 3, 200, '2 Full', [], 35, AVAILABILITY.AVERAGE, ''),
    new RangedWeapon('Heavy Stubber (Ursid)', TYPE.HEAVY, 120, [0,0,10], new Dice(1,10,5), 3, 40, 'Full', [], 35, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Naval Pistol (Mars)', TYPE.PISTOL, 20, [1,3,0], new Dice(1,10,4), 0, 6, 'Full' [SPECIAL.TEARING], 3, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Naval Shotcannon', TYPE.HEAVY, 40, [1,3,0], new Dice(2,10,4), 0, 24, '2 Full', [SPECIAL.SCATTER, SPECIAL.UNRELIABLE], 7, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Pump-Action Shotgun', TYPE.BASIC, 30, [1,0,0], new Dice(1,10,4), 0, 8, '2 Full', [SPECIAL.SCATTER], 5, AVAILABILITY.AVERAGE, ''),
    new RangedWeapon('Shotgun', TYPE.BASIC, 30, [1,0,0], new Dice(1,10,4), 0, 2, '2 Full', [SPECIAL.SCATTER], 5, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Shotgun Pistol', TYPE.PISTOL, 10, [1,0,0], new Dice(1,10,4), 0, 1, 'Full', [SPECIAL.RELIABLE, SPECIAL.SCATTER], 1, AVAILABILITY.AVERAGE, ''),
    new RangedWeapon('Stub Automatic', TYPE.PISTOL, 30, [1,3,0], new Dice(1,10,3), 0, 9, 'Full', [], 1.5, AVAILABILITY.PLENTIFUL, ''),
    new RangedWeapon('Stub Revolver', TYPE.PISTOL, 30, [1,0,0], new Dice(1,10,3), 0, 6, '2 Full', [SPECIAL.RELIABLE], 1, AVAILABILITY.PLENTIFUL, ''),
    new RangedWeapon('Boltgun (Locke)', TYPE.BASIC, 90, [1,2,4], new Dice(1,10,5), 4, 24, 'Full', [SPECIAL.TEARING], 7, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Bolt Pistol (Ceres)', TYPE.PISTOL, 30, [1,2,0,], new Dice(1,10,5), 4, 8, 'Full', [SPECIAL.TEARING], 3.5, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Storm Bolter (Mars)', TYPE.BASIC, 90, [1,2,4], new Dice(1,10,5), 4, 60, 'Full', [SPECIAL.STORM, SPECIAL.TEARING], 9, AVAILABILITY.EXTREMELY_RARE, ''),
    new RangedWeapon('Heavy Bolter (Solar)', TYPE.HEAVY, 120, [0,0,10], new Dice(2,10,2), 5, 60, 'Full', [SPECIAL.TEARING], 40, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Inferno Pistol (Mars)', TYPE.PISTOL, 10, [1,0,0], new Dice(2,10,8), 13, 3, 'Full', [], 2.5, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Meltagun (Mars)', TYPE.BASIC, 20, [1,0,0], new Dice(2,10,8), 13, 5, '2 Full', [], 40, AVAILABILITY.RARE, ''),
    new RangedWeapon('Meltagun (Mezoa)', TYPE.BASIC, 20, [1,0,0], new Dice(2,10,8), 13, 10, '3 Full', [], 46, AVAILABILITY.RARE, ''),
    new RangedWeapon('Thermal Lance (Mars)', TYPE.HEAVY, 10, [1,0,0], new Dice(2,10,10), 12, 2, '2 Full', [SPECIAL.ACCURATE], 40, AVAILABILITY.RARE, ''),
    new RangedWeapon('Multi-Melta (Mars)', TYPE.HEAVY, 60, [1,3,0], new Dice(4,10,5), 13, 10, '2 Full', [SPECIAL.BLAST], 40, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Plasma Pistol (Ryza)', TYPE.PISTOL, 30, [1,2,0], new Dice(1,10,6), 6, 10, '3 Full', [SPECIAL.OVERHEATS], 4, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Plasma Gun (Mezoa)', TYPE.BASIC, 90, [1,2,0], new Dice(1,10,7), 6, 40, '5 Full', [SPECIAL.OVERHEATS], 18, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Plasma Cannon (Ryza)', TYPE.HEAVY, 120, [1,0,0], new Dice(2,10,10), 8, 16, '5 Full', [SPECIAL.OVERHEATS, SPECIAL.BLAST, SPECIAL.UNRELIABLE], 40, AVAILABILITY.VERY_RARE, ''),
    new RangedWeapon('Hand Flamer (Mezoa)', TYPE.PISTOL, 10, [1,0,0], new Dice(1,10,4), 2, 2, '2 Full', [SPECIAL.FLAME], 3.5, AVAILABILITY.RARE, ''),
    new RangedWeapon('Flamer (Mezoa)', TYPE.BASIC, 20, [1,0,0], new Dice(1,10,4), 2, 6, '2 Full', [SPECIAL.FLAME], 6, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Heavy Flamer (Locke)', TYPE.HEAVY, 30, [1,0,0], new Dice(2,10,4), 4, 10, '2 Full', [SPECIAL.FLAME], 20, AVAILABILITY.RARE, ''),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
    new RangedWeapon(),
];
