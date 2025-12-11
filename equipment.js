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

class ExoticWeapon extends RangedWeapon {
    constructor(name, type, range, rof, damage, pen, clip, reload, special, weight, availability, description) {
        super(name, type, range, rof, damage, pen, clip, reload, special, weight, availability, description);
    }
}

class Grenades {
    constructor(name, damage, pen, special, weight, availability, description) {
        this.name = name;
        this.type = TYPE.THROWN;
        this.range = 3;
        this.rof = [1,0,0];
        this.damage = damage;
        this.pen = pen;
        this.special = special;
        this.weight = weight;
        this.availability = availability;
        this.description = description;
    }
}

class Missles {
    constructor(name, damage, pen, special, availability, description) {
        this.name = name;
        this.damage = damage;
        this.pen = pen;
        this.special = special;
        this.weight = 1;
        this.availability = availability;
        this.description = description;
    }
}

class MeleeWeapon {
    constructor(name, damage, pen, special, weight, availability, description) {
        this.name = name;
        this.type = TYPE.MELEE;
        this.range = 0;
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

class MechanicusCybernetics extends Cybernetics {
    constructor(name, availability, craftsmanship, description) {
        super(name, availability, craftsmanship, description);
        this.mechanicus = true;
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
    new RangedWeapon('Bolas', TYPE.THROWN, 10, [1,0,0], 0, 0, 1, 0, [SPECIAL.PRIMITIVE, SPECIAL.SNARE, SPECIAL.INACCURATE], 1.5, AVAILABILITY.AVERAGE, ''),
    new RangedWeapon('Bow', TYPE.BASIC, 30, [1,0,0], new Dice(1,10), 0, 1, 'Half', [SPECIAL.PRIMITIVE, SPECIAL.RELIABLE], 2, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Crossbow', TYPE.BASIC, 30, [1,0,0], new Dice(1,10), 0, 1, '2 Full', [SPECIAL.PRIMITIVE], 3, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Hand Bow', TYPE.PISTOL, 15, [1,0,0], new Dice(1,10), 0, 1, 'Full', [SPECIAL.PRIMITIVE], 1, AVAILABILITY.RARE, ''),
    new RangedWeapon('Flintlock Pistol', TYPE.PISTOL, 15, [1,0,0], new Dice(1,10), 0, 1, '3 Full', [SPECIAL.PRIMITIVE, SPECIAL.UNRELIABLE, SPECIAL.INACCURATE], 4, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Musket', TYPE.BASIC, 30, [1,0,0], new Dice(1,10,2), 0, 1, '5 Full', [SPECIAL.PRIMITIVE, SPECIAL.UNRELIABLE, SPECIAL.INACCURATE], 7, AVAILABILITY.COMMON, ''),
    new RangedWeapon('Sling', TYPE.BASIC, 15, [1,0,0], new Dice(1,10,-2), 0,1,'Full', [SPECIAL.PRIMITIVE], 0.5, AVAILABILITY.PLENTIFUL, ''),
    new RangedWeapon('Grenade Launcher (Mezoa)', TYPE.BASIC, 80, [1,0,0], 0, 0, 1, 'Half', [], 10, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Grenade Launcher (Voss)', TYPE.BASIC, 60, [1,0,0], 0, 0, 6, 'Full', [SPECIAL.INACCURATE], 12.5, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Grenade Launcher (Locke)', TYPE.BASIC, 250, [1,0,0], 0, 0, 1, 'Full', [], 12, AVAILABILITY.SCARCE, ''),
    new RangedWeapon('Grenade Launcher (Retobi)', TYPE.BASIC, 200, [1,0,0], 0, 0, 5, '2 Full', [SPECIAL.INACCURATE], 35, AVAILABILITY.RARE, '')
];

let meleeWeapons = [
    new MeleeWeapon('Chain Axe', new Dice(1,10,4), 2, [SPECIAL.TEARING], 13, AVAILABILITY.AVERAGE, ''),
    new MeleeWeapon('Chainsword (Hecate)', new Dice(1,10,2), 2, [SPECIAL.TEARING, SPECIAL.BALANCED], 6, AVAILABILITY.AVERAGE, ''),
    new MeleeWeapon('Omnissian Axe (Sollex)', new Dice(2,10,4), 6, [SPECIAL.POWER_FIELD, SPECIAL.UNBALANCED], 8, AVAILABILITY.EXTREMELY_RARE, ''),
    new MeleeWeapon('Power Axe (Mezoa)', new Dice(1,10,7), 7, [SPECIAL.POWER_FIELD, SPECIAL.UNBALANCED], 6, AVAILABILITY.VERY_RARE, ''),
    new MeleeWeapon('Power Fist (Mezoa)', new Dice(2,10), 9, [SPECIAL.POWER_FIELD, SPECIAL.UNWIELDY], 13, AVAILABILITY.VERY_RARE, ''),
    new MeleeWeapon('Power Maul (High)', new Dice(1,10,5), 4, [SPECIAL.POWER_FIELD, SPECIAL.SHOCKING], 3.5, AVAILABILITY.VERY_RARE, ''),
    new MeleeWeapon('Power Maul (Low)', new Dice(1,10,1), 2, [SPECIAL.SHOCKING], 3.5, AVAILABILITY.VERY_RARE, ''),
    new MeleeWeapon('Power Sword (Mordian)', new Dice(1,10,5), 5, [SPECIAL.POWER_FIELD, SPECIAL.BALANCED], 3, AVAILABILITY.VERY_RARE, ''),
    new MeleeWeapon('Fractal Blade', new Dice(1,10,1), 7, [SPECIAL.POWER_FIELD, SPECIAL.BALANCED], 1, AVAILABILITY.EXTREMELY_RARE, ''),
    new MeleeWeapon('Ghost Sword', new Dice(1,10,3), 6, [SPECIAL.POWER_FIELD, SPECIAL.BALANCED], 1, AVAILABILITY.EXTREMELY_RARE, ''),
    new MeleeWeapon('Harlequin\'s Kiss', new Dice(1,10,8), 10, [SPECIAL.TEARING], 1, AVAILABILITY.EXTREMELY_RARE, ''),
    new MeleeWeapon('Ork Choppa', new Dice(1,10,1), 2, [SPECIAL.UNBALANCED], 8, AVAILABILITY.SCARCE, ''),
    new MeleeWeapon('Officer\'s Cutlass', new Dice(1,10), 0, [SPECIAL.SHOCKING], 3, AVAILABILITY.SCARCE, ''),
    new MeleeWeapon('Shock Glove', new Dice(1,10), 0, [SPECIAL.SHOCKING], 1.5, AVAILABILITY.RARE, ''),
    new MeleeWeapon('Shock-Staff', new Dice(1,5,3), 0, [SPECIAL.SHOCKING], 2, AVAILABILITY.RARE, ''),
    new MeleeWeapon('Great Weapon', new Dice(2,10), 0, [SPECIAL.PRIMITIVE, SPECIAL.UNBALANCED], 7, AVAILABILITY.SCARCE, ''),
    new MeleeWeapon('Growwhip', new Dice(1,10,3), 0, [SPECIAL.FLEXIBLE, SPECIAL.TEARING, SPECIAL.PRIMITIVE], 4, AVAILABILITY.SCARCE, ''),
    new MeleeWeapon('Improvised', new Dice(1,10,-2), 0, [SPECIAL.PRIMITIVE, SPECIAL.UNBALANCED], null, null, ''),
    new MeleeWeapon('Knife', new Dice(1,5), 0, [SPECIAL.PRIMITIVE], 1, AVAILABILITY.PLENTIFUL, ''),
    new MeleeWeapon('Kraken Tooth Dagger', new Dice(1,5,1), 1, [SPECIAL.PRIMITIVE], 0.4, AVAILABILITY.EXTREMELY_RARE, ''),
    new MeleeWeapon('Shield', new Dice(1,5), 0, [SPECIAL.DEFENSIVE, SPECIAL.PRIMITIVE], 3, AVAILABILITY.COMMON, ''),
    new MeleeWeapon('Spear', new Dice(1,10), 0, [SPECIAL.PRIMITIVE], 3, AVAILABILITY.COMMON, ''),
    new MeleeWeapon('Staff', new Dice(1,10), 0, [SPECIAL.BALANCED, SPECIAL.PRIMITIVE], 3, AVAILABILITY.PLENTIFUL, ''),
    new MeleeWeapon('Sword', new Dice(1,10), 0, [SPECIAL.PRIMITIVE, SPECIAL.BALANCED], 3, AVAILABILITY.COMMON, ''),
    new MeleeWeapon('Truncheon', new Dice(1,10), 0, [SPECIAL.PRIMITIVE], 2, AVAILABILITY.PLENTIFUL, ''),
    new MeleeWeapon('Warhammer', new Dice(1,10,2), 1, [SPECIAL.PRIMITIVE], 4.5, AVAILABILITY.SCARCE, '')
];

let grenades = [
    new Grenades('Anti-Plant', new Dice(3,10), 0, [SPECIAL.BLAST], 0.5, AVAILABILITY.VERY_RARE, ''),
    new Grenades('Blind', 0, 0, [SPECIAL.SMOKE], 0.5, AVAILABILITY.RARE, ''),
    new Grenades('Filament', new Dice(4,10,4), 6, [SPECIAL.BLAST, SPECIAL.TEARING], 0.5, AVAILABILITY.EXTREMELY_RARE, ''),
    new Grenades('Frag Missile', null, new Dice(2, 10), 4, [SPECIAL.BLAST], 1, AVAILABILITY.AVERAGE, ''),
    new Grenades('Frag', new Dice(2,10), 0, [SPECIAL.BLAST], 0.5, AVAILABILITY.COMMON, ''),
    new Grenades('Geode', new Dice(2,10,3), 4, [SPECIAL.BLAST], 0.5, AVAILABILITY.EXTREMELY_RARE, ''),
    new Grenades('Hallucinogen', 0, 0, [], 0.5, AVAILABILITY.RARE, ''),
    new Grenades('Krak', new Dice(2,10,4), 6, [], 0.5, AVAILABILITY.RARE, ''),
    new Grenades('Photon Flash', 0, 0, [], 4, AVAILABILITY.VERY_RARE, ''),
    new Grenades('Plasma', new Dice(1,10,6), 6, [SPECIAL.BLAST], 4, AVAILABILITY.VERY_RARE, ''),
    new Grenades('Smoke', 0, 0, [SPECIAL.SMOKE], 0.5, AVAILABILITY.COMMON, ''),
    new Grenades('Stun', 0, 0, [SPECIAL.BLAST], 0.2, AVAILABILITY.SCARCE, ''),
    new Grenades('Virus', new Dice(3,10), 0 , [SPECIAL.TOXIC], 0.5, AVAILABILITY.EXTREMELY_RARE, '')
];

let missles = [
    new Missles('Frag Missile', new Dice(2,10), 4, [SPECIAL.BLAST], AVAILABILITY.AVERAGE, ''),
    new Missles('Krak Missile', new Dice(3,10,10), 10, [SPECIAL.BLAST], AVAILABILITY.SCARCE, '')
];

let exoticWeapons = [
    new ExoticWeapon('Crux Beam Gun', TYPE.BASIC, 80, [1,3,0], new Dice(2,10,5), 6, 25, '4 Full', [SPECIAL.SCATTER], 4, AVAILABILITY.NEAR_UNIQUE, ''),
    new ExoticWeapon('Dartcaster', TYPE.PISTOL, 30, [1,0,0], new Dice(1,10), 0, 1, 'Full', [SPECIAL.TOXIC], 2.5, AVAILABILITY.RARE, ''),
    new ExoticWeapon('Digi-laser', TYPE.PISTOL, 3, [1,0,0], new Dice(1,10,3), 7, 1, 'Full', [SPECIAL.RELIABLE], 0.5, AVAILABILITY.EXTREMELY_RARE, ''),
    new ExoticWeapon('Digi-melta', TYPE.PISTOL, 3, [1,0,0], new Dice(2,10,4), 12, 1, 'Full', [], 0.5, AVAILABILITY.EXTREMELY_RARE, ''),
    new ExoticWeapon('Digi-needler', TYPE.PISTOL, 3, [1,0,0], new Dice(1,10), 0, 1, 'Full', [], 0.5 , AVAILABILITY.EXTREMELY_RARE, ''),
    new ExoticWeapon('Digi-flamer', TYPE.PISTOL, 3, [1,0,0], new Dice(1,10,4), 2, 1, 'Full', [SPECIAL.FLAME], 0.5, AVAILABILITY.EXTREMELY_RARE, ''),
    new ExoticWeapon('Graviton Gun', TYPE.BASIC, 30, [1,0,0], new Dice(1,5), 0, 3, '2 Full', [SPECIAL.BLAST], 5, AVAILABILITY.NEAR_UNIQUE, ''),
    new ExoticWeapon('Kroot Rifle', TYPE.BASIC, 110, [1,2,0], new Dice(1,10,5), 1, 6, '2 Full', [], 6, AVAILABILITY.EXTREMELY_RARE, ''),
    new ExoticWeapon('Needle Pistol', TYPE.PISTOL, 30, [1,0,0], new Dice(1,10), 0 ,6, 'Full', [SPECIAL.ACCURATE, SPECIAL.TOXIC], 1.5, AVAILABILITY.VERY_RARE, ''),
    new ExoticWeapon('Needle Rifle', TYPE.BASIC, 180, [1,0,0], new Dice(1,10), 0, 6, '2 Full', [SPECIAL.ACCURATE, SPECIAL.TOXIC], 2, AVAILABILITY.VERY_RARE, ''),
    new ExoticWeapon('Ork Shoota', TYPE.BASIC, 60, [1,3,10], new Dice(1,10,4), 0, 30, 'Full', [SPECIAL.INACCURATE, SPECIAL.UNRELIABLE], 4, AVAILABILITY.SCARCE, ''),
    new ExoticWeapon('Ork Slugga', TYPE.PISTOL, 20, [1,3,0], new Dice(1,10,4), 0, 18, 'Full', [SPECIAL.INACCURATE, SPECIAL.UNRELIABLE], 2, AVAILABILITY.SCARCE, ''),
    new ExoticWeapon('Shuriken Catapult', TYPE.BASIC, 60, [1,3,10], new Dice(1,10,4), 6, 100, '2 Full', [SPECIAL.RELIABLE], 2.5, AVAILABILITY.VERY_RARE, ''),
    new ExoticWeapon('Shuriken Pistol', TYPE.PISTOL, 30, [1,3,5], new Dice(1,10,2), 4, 40, '2 Full', [SPECIAL.RELIABLE], 1.2, AVAILABILITY.VERY_RARE, '')
];

let armours = [
    new Armour('Heavy Leathers/Furs', ['Arms', 'Body', 'Legs'], 2, 7, AVAILABILITY.COMMON, ''),
    new Armour('Grox Hide/Chainmail', ['Arms', 'Body', 'Legs'], 3, 15, AVAILABILITY.COMMON, ''),
    new Armour('Feudal World plate', ['All'], 5, 30, AVAILABILITY.SCARCE, ''),
    new Armour('Burnscour Beast Hide', ['Body'], 6, 20, AVAILABILITY.VERY_RARE, ''),
    new Armour('Flak Helmet', ['Head'], 2, 2, AVAILABILITY.AVERAGE, ''),
    new Armour('Flak Cloak', ['Arms', 'Body', 'Legs'], 3, 8, AVAILABILITY.SCARCE, ''),
    new Armour('Flak Coat', ['Arms', 'Body', 'Legs'], 3, 5, AVAILABILITY.AVERAGE, ''),
    new Armour('Guard Flak Armour', ['All'], 4, 11, AVAILABILITY.SCARCE, ''),
    new Armour('Mesh Cowl', ['Head'], 3, 0.5, AVAILABILITY.RARE, ''),
    new Armour('Xeno Mesh', ['Arms', 'Body', 'Legs'], 3, 2, AVAILABILITY.RARE, ''),
    new Armour('Mesh Combat Cloak', ['Arms', 'Body', 'Legs'], 4, 1.5, AVAILABILITY.VERY_RARE, ''),
    new Armour('Mesh Vest', ['Body'], 4, 2, AVAILABILITY.RARE, ''),
    new Armour('Carapace Helm', ['Head'], 4, 2, AVAILABILITY.RARE, ''),
    new Armour('Enforcer Light Carapace', ['All'], 5, 15, AVAILABILITY.RARE, ''),
    new Armour('Carapace Chestplate', ['Body'], 6, 7, AVAILABILITY.RARE, ''),
    new Armour('Storm Trooper Carapace', ['All'], 6, 15, AVAILABILITY.VERY_RARE, ''),
    new Armour('Armoured Bodyglove', ['Arms', 'Body', 'Legs'], 3, 5, AVAILABILITY.RARE, ''),
    new Armour('Light Power Armour', ['All'], 7, 40, AVAILABILITY.VERY_RARE, ''),
    new Armour('Power Armour', ['All'], 8, 65, AVAILABILITY.VERY_RARE, '')
]

let gear = [
    new Gear('Backpack', 1, AVAILABILITY.PLENTIFUL, ''),
    new Gear('Cameleoline Cloak', 0.5, AVAILABILITY.RARE, ''),
    new Gear('Charm', 0, AVAILABILITY.AVERAGE, ''),
    new Gear('Chrono', 0, AVAILABILITY.ABUNDANT, ''),
    new Gear('Clip Harness/Drop Harness', 2, AVAILABILITY.COMMON, ''),
    new Gear('Clothing and Adornment (Common)', 0, AVAILABILITY.ABUNDANT, ''),
    new Gear('Clothing and Adornment (Merchant Guilder)', 0, AVAILABILITY.AVERAGE, ''),
    new Gear('Clothing and Adornment (Noble)', 0, AVAILABILITY.SCARCE, ''),
    new Gear('Filtration Plugs', 0, AVAILABILITY.COMMON, ''),
    new Gear('Night Cloak', 2, AVAILABILITY.AVERAGE, ''),
    new Gear('Photo-visors/Photo-contacts', 0.5, AVAILABILITY.SCARCE, ''),
    new Gear('Preysense Goggles', 0.5, AVAILABILITY.RARE, ''),
    new Gear('Rebreather', 1, AVAILABILITY.SCARCE, ''),
    new Gear('Recoil Gloves', 0.5, AVAILABILITY.RARE, ''),
    new Gear('Respirator/Gas Mask', 0.5, AVAILABILITY.AVERAGE, ''),
    new Gear('Shifting Fabric', 0, AVAILABILITY.VERY_RARE, ''),
    new Gear('Survival Suit', 0, AVAILABILITY.PLENTIFUL, ''),
    new Gear('Synskin', 2, AVAILABILITY.EXTREMELY_RARE, ''),
    new Gear('Void Suit', 8, AVAILABILITY.PLENTIFUL, ''),
    new Gear('Void Suit (Selenite-pattern)', 25, AVAILABILITY.SCARCE, '')
]

let drugsAndConsumables = [
    new DrugsAndConsumables('Amasec', 0, AVAILABILITY.SCARCE, ''),
    new DrugsAndConsumables('De-tox', 0, AVAILABILITY.RARE, ''),
    new DrugsAndConsumables('Frenzon', 0, AVAILABILITY.VERY_RARE, ''),
    new DrugsAndConsumables('Injector', 0, AVAILABILITY.PLENTIFUL, ''),
    new DrugsAndConsumables('Lho-sticks', 0, AVAILABILITY.COMMON, ''),
    new DrugsAndConsumables('Medikit', 2, AVAILABILITY.COMMON, ''),
    new DrugsAndConsumables('Medikit (Advanced)', 5, AVAILABILITY.RARE, ''),
    new DrugsAndConsumables('High Provender', 0, AVAILABILITY.VERY_RARE, ''),
    new DrugsAndConsumables('Obscura', 0, AVAILABILITY.RARE, ''),
    new DrugsAndConsumables('Ration Packs', 0, AVAILABILITY.UBIQUITOUS, ''),
    new DrugsAndConsumables('Recaf', 0, AVAILABILITY.ABUNDANT, ''),
    new DrugsAndConsumables('Sacred Unguents', 0, AVAILABILITY.VERY_RARE, ''),
    new DrugsAndConsumables('Slaught', 0, AVAILABILITY.SCARCE, ''),
    new DrugsAndConsumables('Stimm', 0, AVAILABILITY.AVERAGE, ''),
    new DrugsAndConsumables('Thosophis\'s Philtre', 0, AVAILABILITY.VERY_RARE, ''),
    new DrugsAndConsumables('Tranq', 0, AVAILABILITY.ABUNDANT, '')
]

let tools = [
    new Tools('Almanac Astrae Divinitus', 4, AVAILABILITY.EXTREMELY_RARE, ''),
    new Tools('Arms Coffer', 6, AVAILABILITY.AVERAGE, ''),
    new Tools('Auspex/Scanner', 0.5, AVAILABILITY.SCARCE, ''),
    new Tools('Auto-quill', 0, AVAILABILITY.SCARCE, ''),
    new Tools('Calculance Array', 120, AVAILABILITY.SCARCE, ''),
    new Tools('Combi-tool', 1, AVAILABILITY.RARE, ''),
    new Tools('Data-loom (Hadd-pattern)', 13, AVAILABILITY.VERY_RARE, ''),
    new Tools('Data-slate', 0.5, AVAILABILITY.COMMON, ''),
    new Tools('Demolition Charge', 1, AVAILABILITY.SCARCE, ''),
    new Tools('Diagnostor', 4, AVAILABILITY.VERY_RARE, ''),
    new Tools('Glow-globe/Lamp pack', 0.5, ),
    new Tools('Grapnel', 2, AVAILABILITY.AVERAGE, ''),
    new Tools('Grapplehawk', 0, AVAILABILITY.VERY_RARE, ''),
    new Tools('Grav Chute', 15, AVAILABILITY.RARE, ''),
    new Tools('Jump Pack', 25, AVAILABILITY.RARE, ''),
    new Tools('Lord-Captain\'s Baton',1, AVAILABILITY.VERY_RARE, ''),
    new Tools('Magboots', 2, AVAILABILITY.RARE, ''),
    new Tools('Magnoculars', 0.5, AVAILABILITY.AVERAGE, ''),
    new Tools('Manacles', 1, AVAILABILITY.PLENTIFUL, ''),
    new Tools('Mefonte\'s Orthodoxy', 2, AVAILABILITY.SCARCE, ''),
    new Tools('Melta-bomb', 12, AVAILABILITY.VERY_RARE, ''),
    new Tools('Micro-bead', 0, AVAILABILITY.AVERAGE, ''),
    new Tools('Multikey', 0, AVAILABILITY.SCARCE, ''),
    new Tools('Multicompass', 4, AVAILABILITY.NEAR_UNIQUE, ''),
    new Tools('Navis Prima', 1, AVAILABILITY.VERY_RARE, ''),
    new Tools('Pict Recorder', 1, AVAILABILITY.COMMON, ''),
    new Tools('Psy-focus', 0, AVAILABILITY.RARE, ''),
    new Tools('Renumeration Engine', 7, AVAILABILITY.VERY_RARE, ''),
    new Tools('Shipboard Emergency Kit', 6, AVAILABILITY.COMMON, ''),
    new Tools('Screamer', 1.5, AVAILABILITY.AVERAGE, ''),
    new Tools('Servitor (Labor, Simple Monotask)', 0, AVAILABILITY.SCARCE, ''),
    new Tools('Servitor (Combat)', 0, AVAILABILITY.RARE, ''),
    new Tools('Servitor (Complex Multitask)', 0, AVAILABILITY.RARE, ''),
    new Tools('Servo-Skull', 0, AVAILABILITY.SCARCE, ''),
    new Tools('Stummer', 2, AVAILABILITY.AVERAGE, ''),
    new Tools('Venom Ring', 0, AVAILABILITY.VERY_RARE, ''),
    new Tools('Vox Caster', 0, AVAILABILITY.SCARCE, '')
]

let cybernetics = [
    new Cybernetics('Augur Array', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Augmented Senses', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Baleful Eye', AVAILABILITY.NEAR_UNIQUE, CRAFTSMANSHIP.GOOD, ''),
    new MechanicusCybernetics('Ballistic Mechadendrite', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.GOOD, ''),
    new Cybernetics('Bionic Limb', AVAILABILITY.SCARCE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Bionic Locomotion', AVAILABILITY.SCARCE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Bionic Respiratory System', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Bionic Heart', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Calculus Logi Upgrade', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Cortex Implants', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Cranial Armour', AVAILABILITY.SCARCE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Cybernetic Senses', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Locator Matrix', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new MechanicusCybernetics('Manipulator Mechadendrite', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.GOOD, ''),
    new MechanicusCybernetics('Medicae Mechadendrite', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.GOOD, ''),
    new Cybernetics('Memorance Implant', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Mind Impulse Unit', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('MIU Weapon Interface', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new MechanicusCybernetics('Optical Mechadendrite', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.GOOD, ''),
    new Cybernetics('Respiratory Filter Implant', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Scribe-tines', AVAILABILITY.SCARCE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Subskin Armour', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Synthetic Muscle Grafts', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new MechanicusCybernetics('Utility Mechadendrite', AVAILABILITY.VERY_RARE, CRAFTSMANSHIP.GOOD, ''),
    new Cybernetics('Voidskin', AVAILABILITY.SCARCE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Volitor Implant', AVAILABILITY.RARE, CRAFTSMANSHIP.COMMON, ''),
    new Cybernetics('Vox Implant', AVAILABILITY.SCARCE, CRAFTSMANSHIP.COMMON, '')
]