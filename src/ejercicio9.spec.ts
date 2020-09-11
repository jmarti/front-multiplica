import { getModeloFromPlaca, Placa } from './ejercicio9';

describe(`ejercicio 9`, () => {

    describe(`casos sin marca`, () => {

        it(`retorna "no existe modelo" al pasar el objeto placa si marca no está declarado`, () => {
            const placa: Placa = {
                pais: 'Peru'
            };

            const modelo = getModeloFromPlaca(placa);

            expect(modelo).toBe('no existe modelo');
        });

        it(`retorna "no existe modelo" al pasar el objeto placa si marca es undefined`, () => {
            const placa: Placa = {
                pais: 'Peru',
                marca: undefined
            };

            const modelo = getModeloFromPlaca(placa);

            expect(modelo).toBe('no existe modelo');
        });

        it(`retorna "no existe modelo" al pasar el objeto placa si marca es un objeto vacío`, () => {
            const placa: Placa = {
                pais: 'Peru',
                marca: {}
            };

            const modelo = getModeloFromPlaca(placa);

            expect(modelo).toBe('no existe modelo');
        });

    });

    describe(`casos sin modelo`, () => {

        it(`retorna "no existe modelo" al pasar el objeto placa si modelo no está declarado`, () => {
            const placa: Placa = {
                marca: {
                    name: 'Honda'
                },
                pais: 'Peru'
            };

            const modelo = getModeloFromPlaca(placa);

            expect(modelo).toBe('no existe modelo');
        });

        it(`retorna "no existe modelo" al pasar el objeto placa si modelo es undefined`, () => {
            const placa: Placa = {
                marca: {
                    name: 'Honda',
                    modelo: undefined
                },
                pais: 'Peru'
            };

            const modelo = getModeloFromPlaca(placa);

            expect(modelo).toBe('no existe modelo');
        });

        it(`retorna "no existe modelo" al pasar el objeto placa si el modelo es un objeto vacío`, () => {
            const placa: Placa = {
                marca: {
                    name: 'Honda',
                    modelo: {}
                },
                pais: 'Peru'
            };

            const modelo = getModeloFromPlaca(placa);

            expect(modelo).toBe('no existe modelo');
        });
    });
    
    describe(`casos con modelo`, () => {
        it(`retorna el nombre del modelo al pasar el objeto placa con un nombre de modelo`, () => {
            const placa: Placa = {
                marca: {
                    name: 'Honda',
                    modelo: {
                        name: 'CR-V'
                    }
                },
                pais: 'Peru'
            };

            const modelo = getModeloFromPlaca(placa);
            
            expect(modelo).toBe('CR-V');
        });
    });

});
