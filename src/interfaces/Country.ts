export interface Country {
    name: Name;
    currencies: {
        [key: string]: Currency;
    };
    car: Car;
    flags: Flags;
    coatOfArms: CoatOfArms;
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common: string;
    official: string;
}