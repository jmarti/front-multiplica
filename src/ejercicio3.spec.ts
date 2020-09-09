import * as mock from 'mock-fs';

import { func } from './ejercicio3';

afterEach(mock.restore);

describe(`ejercicio 3`, () => {

    describe('gestión de errores', () => {
        it(`Devuelve 6969 dado que el archivo no existe`, () => {
            return func('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });

        it(`Devuelve 6969 dado que el archivo no tiene la estructura correcta`, () => {
            mock({
                './config.json': '{"foo": "bar"}'
            });
            return func('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });

        it(`Devuelve 6969 dado que el el contenido es incorrecto`, () => {
            mock({
                './config.json': 'foobar'
            });
            return func('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });
    });

    describe('casos validos', () => {
        it(`Devuelve el valor del puerto definido en config.json`, () => {
            mock({
                './config.json': '{"puerto": 666}'
            });
            return func('./config.json').then(result => {
                expect(result).toBe(666);
            });
        });
    });
});