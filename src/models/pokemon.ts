export class Pokemon {
    id: number;
    name: string;
    sprite: string;
    weight: number;
    height: number;
    stats : Stat;
    types:any[];
}

export class Stat {
    hp: number;
    attack: number;
    defense: number;
    sp_attack : number;
    sp_defense: number;
    speed: number;
}


// tao ra models de to chuc quan li du lieu