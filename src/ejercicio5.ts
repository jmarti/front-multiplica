type Partida = [string, any][];

interface PuedeHablar {
    hablar(palabras: string): void;
}

interface PuedeGritar {
    gritar(palabras: string): void;
}

interface PuedeCorrer {
    correr(): void;
}

interface PuedeDefender {
    defender(): void;
}

interface PuedeAtacar {
    atacar(): void;
}

interface PuedeHechizar {
    hechizar(): void;
}

interface PuedeControlarMentalmente {
    controlarMentalmente(): void;
}

interface PuedeVolar {
    volar(): void;
}

interface PuedeSanar {
    sanar(): void;
}

interface PuedeEstudiar {
    estudiar(): void;
}

abstract class Personaje implements PuedeHablar {
    constructor(public name: string) { }
    
    hablar(palabras: string) {
        console.log(`${this.name} dijo: "${palabras}"`);
    }
}

abstract class Guerrero extends Personaje implements PuedeGritar {
    gritar(palabras: string) {
        console.log(`${this.name} gritó: "${palabras.toUpperCase()}!!!"`);
    }
}

abstract class Enfermero extends Personaje implements PuedeEstudiar {
    estudiar() {
        console.log(`${this.name} aprendió algo`);
    }
}

class Protoss extends Guerrero implements PuedeCorrer, PuedeDefender {
    correr() {
        console.log(`${this.name} corrió`);
    }

    defender() {
        console.log(`${this.name} defendió`);
    }
}

class Terran extends Guerrero implements PuedeAtacar, PuedeHechizar {
    atacar() {
        console.log(`${this.name} atacó`);
    }

    hechizar() {
        console.log(`${this.name} hechizó`)
    }
}

class Zerg extends Guerrero implements PuedeControlarMentalmente, PuedeVolar {
    controlarMentalmente() {
        console.log(`${this.name} controló mentalmente`);
    }

    volar() {
        console.log(`${this.name} voló`)
    }
}

class SuperTerran extends Terran implements PuedeCorrer, PuedeDefender {
    correr() {
        console.log(`${this.name} corrió`);
    }

    defender() {
        console.log(`${this.name} defendió`);
    }  
}

class SuperZerg extends Zerg implements PuedeEstudiar {
    estudiar() {
        console.log(`${this.name} aprendió algo`);
    }
}

export const crearPartida = (): Partida => {
    return [
        ['Protoss', new Protoss('Leroy Jenkins')],
        ['Terran', new Terran('Chicken')],
        ['Zerg', new Zerg('Winnie the pooh')],
        ['SuperTerran', new SuperTerran('Bad Luck Brian')],
        ['SuperZerg', new SuperZerg('Ragnar')]
    ];
};
