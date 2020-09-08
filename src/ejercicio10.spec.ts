import { func } from './ejercicio10';

const arr = [
    {
        name: 'Pepe',
        donacion: true,
        esposas: ['Rosangela', 'Mayte']
    },
    {
        name: 'Juan',
        donacion: false,
        esposas: ['Yahaira']
    },
    {
        name: 'Lalo',
        donacion: true,
        esposas: []
    }
];

describe(`ejercicio 10`, () => {
    it(`devuelve solo los nombres de las personas que donan órganos y tienen alguna esposa cuyo nombre empiece con 'Y' o 'N'`, () => {
        const result = func(arr);
        expect(result).toStrictEqual([]);
    });
});
