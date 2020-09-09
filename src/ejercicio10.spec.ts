import { func } from './ejercicio10';
import { isRegExp } from 'util';
import { arrPersonas } from './ejercicio6';

describe(`ejercicio 10`, () => {
    it(`quita las personas que no donan organos`, () => {
        const result = func([
            {
                name: 'Juan',
                donacion: true,
                esposas: ['Nadia']
            },
            {
                name: 'Lalo',
                donacion: false,
                esposas: []
            }           
        ]);

        expect(result).toStrictEqual(['Juan']);
    });

    it(`quita las personas que donan organos pero que no tienen esposas`, () => {
        const result = func([
            {
                name: 'Juan',
                donacion: true,
                esposas: ['Yahaira']
            },
            {
                name: 'Lalo',
                donacion: true,
                esposas: []
            }           
        ]);

        expect(result).toStrictEqual(['Juan']);
    });

    it(`quita las personas que donan organos pero que no tienen esposas`, () => {
        const result = func([
            {
                name: 'Juan',
                donacion: true,
                esposas: ['Nadia']
            },
            {
                name: 'Lalo',
                donacion: true,
                esposas: []
            }           
        ]);

        expect(result).toStrictEqual(['Juan']);
    });

    it(`quita las personas que donan organos y que tienen esposas, pero que el nombre de ninguna de sus esposas empieza por 'Y' o por 'N'`, () => {
        const result = func([
            {
                name: 'Juan',
                donacion: true,
                esposas: ['Nadia']
            },
            {
                name: 'Lalo',
                donacion: true,
                esposas: []
            }           
        ]);;
        expect(result).toStrictEqual(['Juan']);
    });

    it(`comprueba que dado el array del enunciado, el resultado sea '[]'`, () => {
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

        const result = func(arr);

        expect(result).toStrictEqual([]);
    });
});



