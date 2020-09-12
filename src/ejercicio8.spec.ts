import { cat, dog } from './ejercicio8.js';

describe(`ejercicio 8`, () => {

    let consoleSpy: any;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    })

    it(`cat.speak() imprime 'miau'`, () => {
        
        cat.speak();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenLastCalledWith("miau");
    });

    it(`dog.speak() imprime 'wof'`, () => {
        
        dog.speak();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenLastCalledWith("wof");
    });    

    it(`usando bind puedo confundir al gato para que imprima 'wof'`, () => {
        
        cat.speak.bind(dog)();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenLastCalledWith("wof");
    });

});
