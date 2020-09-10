import * as mock from 'mock-fs';

import { readPort } from './ejercicio3';


describe(`ejercicio 3`, () => {

    afterEach(mock.restore);

    describe('gestión de errores', () => {
        it(`devuelve 6969 dado que el archivo no existe`, () => {
            const port = readPort('./config.json');
            expect(port).toBe(6969);
        });

        it(`devuelve 6969 dado que el el contenido es incorrecto`, () => {
            mock({
                './config.json': 'this is not valid JSON'
            });

            const port = readPort('./config.json');

            expect(port).toBe(6969);
        });

        it(`devuelve 6969 dado que en el archivo no existe "port"`, () => {
            mock({
                './config.json': '{"foo": "bar"}'
            });

            const port = readPort('./config.json');

            expect(port).toBe(6969);
        });

        it(`devuelve 6969 cuadno es un string no numérico`, () => {
            mock({
                './config.json': '{"puerto": "hola"}'
            });

            const port = readPort('./config.json');

            expect(port).toBe(6969);
        });
    });

    describe('casos validos', () => {
        it(`devuelve el valor del puerto numerico`, () => {
            mock({
                './config.json': '{"puerto": 666}'
            });

            const port = readPort('./config.json');

            expect(port).toBe(666);
        });

        it(`Devuelve el valor del puerto cuando es un string numerico valido`, () => {
            mock({
                './config.json': '{"puerto": "666"}'
            });
            
            const port = readPort('./config.json');
            
            expect(port).toBe(666);
        });
    });
});