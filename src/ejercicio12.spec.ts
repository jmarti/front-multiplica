import MockDate from 'mockdate';
import * as fetchMock from 'fetch-mock';

import { getConductorFromPlaca } from './ejercicio12';

describe(`ejercicio 12`, () => {

    let consoleSpy: any;
    let date: Date;

    function getPlaca(nroPlaca: string):Promise<Response> {
        // response: {pais, dniConductor}
        return fetch('api/placa/' + nroPlaca)
    }

    function getConductor(dniConductor: string):Promise<Response> {
        // response: {name, dni, sexo}
        return fetch('api/conductor/' + dniConductor)
    }

    beforeEach(() => {

        date = new Date();
        MockDate.set(date);

        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
        MockDate.reset();
        consoleSpy.mockRestore();
    })

    describe(`casos inválidos`, () => {
        it(`imprime en consola el msg de error cuando no la API no está activa`, async () => {
            const time = new Date().toTimeString().split(" ")[0];

            fetchMock.mock('/api/placa/D0Q643', 500);

            await getConductorFromPlaca('D0Q643', getPlaca, getConductor);
            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(time + ' - ' + 'Server error');    
        });

        it(`imprime en consola el msg de error cuando no hay body en el response`, async () => {
            const time = new Date().toTimeString().split(" ")[0];

            fetchMock.mock('/api/placa/D0Q643', {
                satus: 200
            });

            await getConductorFromPlaca('D0Q643', getPlaca, getConductor);
            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(time + ' - ' + 'el body del response está vacío');    
        });

        it(`imprime en consola el msg de error cuando no se encuentra la placa`, async () => {
            const time = new Date().toTimeString().split(" ")[0];

            fetchMock.mock('/api/placa/D0Q643', {
                satus: 200,
                response: {
                    "error": "placa no encontrada"
                }
            });

            await getConductorFromPlaca('D0Q643', getPlaca, getConductor);
            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(time + ' - ' + 'placa no encontrada');    
        });

        it(`imprime en consola el msg de error cuando no se encuentra el conductor`, async () => {
            const time = new Date().toTimeString().split(" ")[0];

            fetchMock.mock('/api/placa/D0Q643', {
                satus: 200,
                response: {
                    "pais": "Perú",
                    "dniConductor": "43887261"
                }
            });

            fetchMock.mock('/api/conductor/43887261', {
                satus: 404,
                response: {
                    error: "dni no encontrado"
                }
            });

            await getConductorFromPlaca('D0Q643', getPlaca, getConductor);

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(time + ' - ' + 'dni no encontrado');    
        });
    });

    describe(`casos válidos`, () => {

        it(`imprime en consola el response de getConductor {name, dni, sexo}`, async () => {
            
            fetchMock.mock('/api/placa/D0Q643', {
                satus: 200,
                response: {
                    "pais": "Perú",
                    "dniConductor": "43887261"
                }
            });

            fetchMock.mock('/api/conductor/43887261', {
                satus: 200,
                response: {
                    name: "Dolores Fuertes",
                    dni: "43887261",
                    sexo: "F"
                }
            });

            await getConductorFromPlaca('D0Q643', getPlaca, getConductor);

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith({
                name: "Dolores Fuertes",
                dni: "43887261",
                sexo: "F"
            });
        });
    });
});
