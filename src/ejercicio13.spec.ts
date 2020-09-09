import { func } from './ejercicio13';

describe(`ejercicio 13`, () => {
    it(`Devuelve 'agua de jamaica' si el código tiene la estructura adecuada`, () => {
        const result = func('999');
        expect(result).toBe('agua de jamaica');
    });

    it(`Devuelve 'agua de jamaica' si el código no existe`, () => {
        const result = func('codigo99');
        expect(result).toBe('agua de jamaica');
    });

    it(`Devuelve la bebida correspondiente si el código es correcto`, () => {
        const result = func('codigo9');
        expect(result).toBe('ron');
    });
});
