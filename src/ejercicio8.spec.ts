import { cat, dog } from './ejercicio8.js';

describe(`ejercicio 8`, () => {

    let consoleSpy: any;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    })

    it(`cat.speak() imprime en consola el valor de la propiedad 'sound' del objeto 'dog'`, () => {
        
        cat.speak = cat.speak.bind(dog);
        cat.speak();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenLastCalledWith("wof");
    });

});
