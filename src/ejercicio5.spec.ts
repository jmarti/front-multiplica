import each from 'jest-each';

import { crearPartida } from './ejercicio5';


describe(`ejercicio 5`, () => {

    const partida = crearPartida();
    const puedeCorrer = ['Protoss', 'SuperTerran'];
    const puedeDefender = ['Protoss'];
    const puedeAtacar = ['Terran'];
    const puedeHechizar = ['Terran'];
    const puedeControlarMentalmente = ['Zerg'];
    const puedeVolar = ['Zerg'];
    const puedeSanar: string[] = [];
    const puedeHablar = ['Protoss', 'Terran', 'Zerg', 'SuperTerran', 'SuperZerg'];
    const puedeEstudiar = ['SuperZerg'];
    const puedeGritar = ['Protoss', 'Terran', 'Zerg', 'SuperTerran', 'SuperZerg'];

    let consoleSpy: any;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    describe(`Correr`, () => {
        each(
            partida.filter(([raza]) => puedeCorrer.indexOf(raza) !== -1)
        ).it(`la raza %s puede correr`, (raza, jugador) => {
            
            jugador.correr();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} corrió`);
        });

        each(
            partida.filter(([raza]) => puedeCorrer.indexOf(raza) === -1)
        ).it(`la raza %s no puede correr`, (raza, jugador) => {
            try {
                jugador.correr()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.correr is not a function");
            }            
        });
    });

    describe(`Defender`, () => {
        each(
            partida.filter(([raza]) => puedeDefender.indexOf(raza) !== -1)
        ).it(`la raza %s puede defender`, (raza, jugador) => {
            
            jugador.defender();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} defendió`);
        });

        each(
            partida.filter(([raza]) => puedeDefender.indexOf(raza) === -1)
        ).it(`la raza %s no puede defender`, (raza, jugador) => {
            try {
                jugador.defender()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.defender is not a function");
            }            
        });
    });

    describe(`Atacar`, () => {
        each(
            partida.filter(([raza]) => puedeAtacar.indexOf(raza) !== -1)
        ).it(`la raza %s puede atacar`, (raza, jugador) => {
            
            jugador.atacar();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} atacó`);
        });

        each(
            partida.filter(([raza]) => puedeAtacar.indexOf(raza) === -1)
        ).it(`la raza %s no puede atacar`, (raza, jugador) => {
            try {
                jugador.atacar()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.atacar is not a function");
            }            
        });
    });

    describe(`Hechizar`, () => {
        each(
            partida.filter(([raza]) => puedeHechizar.indexOf(raza) !== -1)
        ).it(`la raza %s puede hechizar`, (raza, jugador) => {
            
            jugador.hechizar();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} hechizó`);
        });

        each(
            partida.filter(([raza]) => puedeHechizar.indexOf(raza) === -1)
        ).it(`la raza %s no puede hechizar`, (raza, jugador) => {
            try {
                jugador.hechizar()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.hechizar is not a function");
            }            
        });
    });

    describe(`Control Mental`, () => {
        each(
            partida.filter(([raza]) => puedeControlarMentalmente.indexOf(raza) !== -1)
        ).it(`la raza %s puede controlar mentalmente`, (raza, jugador) => {
            
            jugador.controlarMentalmente();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} controló mentalmente`);
        });

        each(
            partida.filter(([raza]) => puedeControlarMentalmente.indexOf(raza) === -1)
        ).it(`la raza %s no puede controlar mentalmente`, (raza, jugador) => {
            try {
                jugador.controlarMentalmente()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.controlarMentalmente is not a function");
            }            
        });
    });

    describe(`Volar`, () => {
        each(
            partida.filter(([raza]) => puedeVolar.indexOf(raza) !== -1)
        ).it(`la raza %s puede volar`, (raza, jugador) => {
            
            jugador.volar();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} voló`);
        });

        each(
            partida.filter(([raza]) => puedeVolar.indexOf(raza) === -1)
        ).it(`la raza %s no puede volar`, (raza, jugador) => {
            try {
                jugador.volar()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.volar is not a function");
            }            
        });
    });

    describe(`Sanar`, () => {
        each(
            partida.filter(([raza]) => puedeSanar.indexOf(raza) === -1)
        ).it(`la raza %s no puede sanar`, (raza, jugador) => {
            try {
                jugador.sanar()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.sanar is not a function");
            }            
        });
    });

    describe(`Hablar`, () => {
        each(
            partida.filter(([raza]) => puedeHablar.indexOf(raza) !== -1)
        ).it(`la raza %s puede hablar`, (raza, jugador) => {
            
            jugador.hablar(`Soy ${jugador.name}`);

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} dijo: "Soy ${jugador.name}"`);
        });
    });

    describe(`Estudiar`, () => {
        each(
            partida.filter(([raza]) => puedeEstudiar.indexOf(raza) !== -1)
        ).it(`la raza %s puede estudiar`, (raza, jugador) => {
            
            jugador.estudiar();

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} aprendió algo`);
        });

        each(
            partida.filter(([raza]) => puedeEstudiar.indexOf(raza) === -1)
        ).it(`la raza %s no puede estudiar`, (raza, jugador) => {
            try {
                jugador.estudiar()
            } catch(e) {
                expect(e.toString()).toBe("TypeError: jugador.estudiar is not a function");
            }            
        });
    });

    describe(`Gritar`, () => {
        each(
            partida.filter(([raza]) => puedeGritar.indexOf(raza) !== -1)
        ).it(`la raza %s puede gritar`, (raza, jugador) => {
            
            jugador.gritar(jugador.name.toUpperCase());

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(`${jugador.name} gritó: "${jugador.name.toUpperCase()}!!!"`);
        });
    });
});
