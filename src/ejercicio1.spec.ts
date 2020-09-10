import { func1 } from './ejercicio1.js';

describe(`ejercicio 1`, () => {
    describe('validacion de argumentos requeridos', () => {
        it(`parametro 1 no acepta undefined`, () => {
            expect(() => {
                func1(undefined, 2);
            }).toThrow("argumento1 requerido");
        });

        it(`parametro 2 no acepta undefined`, () => {
            expect(() => {
                func1(1);
            }).toThrow("argumento2 requerido");
        }); 
    });
    
    describe('casos validos', () => {
        it(`devuelve undefined cuando se llama correctamente`, () => {
            const result = func1(1, 2);

            expect(result).toBe(undefined);
        });
    });
});
