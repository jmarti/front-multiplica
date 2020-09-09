import * as mock from 'mock-fs';

import { readPort } from './ejercicio3';

afterEach(mock.restore);

describe(`ejercicio 3`, () => {

    describe('gestión de errores', () => {
        it(`Devuelve 6969 dado que el archivo no existe`, () => {
            return readPort('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });

        it(`Devuelve 6969 dado que en el archivo no existe "port"`, () => {
            mock({
                './config.json': '{"foo": "bar"}'
            });
            return readPort('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });

        it(`Devuelve 6969 dado que el el contenido es incorrecto`, () => {
            mock({
                './config.json': 'this is not valid JSON'
            });
            return readPort('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });

        it(`Devuelve 6969 cuadno es un string no numérico`, () => {
            mock({
                './config.json': '{"puerto": "hola"}'
            });
            return readPort('./config.json').then(result => {
                expect(result).toBe(6969);
            });
        });
    });

    describe('casos validos', () => {
        it(`Devuelve el valor del puerto numerico`, () => {
            mock({
                './config.json': '{"puerto": 666}'
            });
            return readPort('./config.json').then(result => {
                expect(result).toBe(666);
            });
        });

        it(`Devuelve el valor del puerto cuando es un string numerico valido`, () => {
            mock({
                './config.json': '{"puerto": "666"}'
            });
            return readPort('./config.json').then(result => {
                expect(result).toBe(666);
            });
        });
    });
});