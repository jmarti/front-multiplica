import { func } from './ejercicio11';

const arr = [
    {
        name: 'Pepe',
        edad: 11
    },
    {
        name: 'Juan',
        edad: 22
    },
    {
        name: 'Lalo',
        edad: 33
    }
];  

describe(`ejercicio 11`, () => {
    it(`devuelve array vacío si no se pasa ninguna edad`, () => {
        const result = func(arr);
        expect(result).toStrictEqual([]);
    });

    it(`devuelve array vacío si no hay coincidencias de edad`, () => {
        const result = func(arr, 1, -10, Infinity, 30);
        expect(result).toStrictEqual([]);
    });

    it(`devuelve array con los nombres coincidentes`, () => {
        const result = func(arr, 22);
        expect(result).toStrictEqual(['Juan']);
    });
});
